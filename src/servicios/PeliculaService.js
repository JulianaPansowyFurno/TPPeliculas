import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

const PeliculaTabla = process.env.DB_TABLA_PELICULA;

export default class PeliculaService {

    BusquedaPeliculas = async (name, order) => {
        console.log('This is a function on the service 1');
        let queryString = `SELECT  Pelicula.Id, Pelicula.Imagen, Pelicula.Titulo, Pelicula.FechaCreacion from ${PeliculaTabla}`
        
        if(name && !order)
        {
            queryString += " WHERE Pelicula.Titulo LIKE CONCAT('%', @Titulo, '%') "
        }
        if(order == "ASC" && order != "DESC" && !name)
        {
            queryString += " ORDER BY Pelicula.FechaCreacion ASC "
        }
        if(order == "DESC" && order != "ASC" && !name)
        {
            queryString += " ORDER BY Pelicula.FechaCreacion DESC "
        }
        if (order == "ASC" && order != "DESC" && name)
        {
            queryString += " WHERE Pelicula.Titulo LIKE CONCAT('%', @Titulo, '%') ORDER BY Pelicula.FechaCreacion ASC "
        }

        if (order == "DESC" && order != "ASC" && name)
        {
            queryString += " WHERE Pelicula.Titulo LIKE CONCAT('%', @Titulo, '%') ORDER BY Pelicula.FechaCreacion DESC "
        }

        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('Titulo',sql.NChar, name)
        .query(queryString);
        console.log(queryString)
        return response.recordset;
    }

    PeliculaDetalles = async (id) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('Id',sql.Int, id)
        .query(`Select * FROM ${PeliculaTabla} WHERE Pelicula.Id = @Id`);
                
        const pool2 = await sql.connect(config);
        const response2 = await pool2.request()
        .input('Id',sql.Int, id)
        .query(`Select Personaje.Nombre FROM Personaje inner join PersonajesAsociados on PersonajesAsociados.FkPersonajes = Personaje.Id WHERE PersonajesAsociados.FkPeliculas = @Id`);

        console.log(response)
        console.log(response2)
        const pelicula = response.recordset[0]
        pelicula.personaje = response2.recordset;
        return pelicula;
    }

    createPelicula = async (pelicula) => {
        console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('Imagen',sql.NChar, pelicula.Imagen)
                .input('Titulo',sql.NChar, pelicula.Titulo)
                .input('FechaCreacion',sql.NChar, pelicula.FechaCreacion)
                .input('Calificacion',sql.Int, pelicula.Calificacion)
                .query(`INSERT INTO ${PeliculaTabla}(Imagen, Titulo, FechaCreacion, Calificacion) VALUES (@Imagen, @Titulo, @FechaCreacion, @Calificacion)`);
            console.log(response)
    
        return response.recordset;
    }

    deletePeliculaById = async (id) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('id',sql.Int, id)
        .query(`DELETE FROM ${PeliculaTabla} WHERE id = @id`);

        console.log(response)
        return response.recordset;
    }

    updatePeliculaById = async (id, pelicula) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, id)
            .input('Imagen',sql.NChar, pelicula.Imagen)
            .input('Titulo',sql.NChar, pelicula.Titulo)
            .input('FechaCreacion',sql.NChar, pelicula.FechaCreacion)
            .input('Calificacion',sql.Int, pelicula.Calificacion)
            .query(`UPDATE ${PeliculaTabla} SET Imagen = @Imagen, Titulo = @Titulo, FechaCreacion = @FechaCreacion, Calificacion = @Calificacion WHERE id = @Id`);
        console.log(response)

        return response.recordset;
    }


}