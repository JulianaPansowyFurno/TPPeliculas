import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

const PeliculaTabla = process.env.DB_TABLA_PELICULA;

export default class PeliculaService {

    BusquedaPeliculas = async (name, order) => {
        console.log('This is a function on the service 1');
        let queryString = `SELECT  Pelicula.Id, Pelicula.Imagen, Pelicula.Titulo, Pelicula.FechaCreacion from ${PeliculaTabla}`
        
        if(name)
        {
            queryString += " where Pelicula.Titulo = @Titulo "
        }
        if(order == "ASC" && order != "DESC")
        {
            queryString += " order by Pelicula.FechaCreacion ASC "
        }
        else if(order == "DESC" && order != "ASC")
        {
            queryString += " order by Pelicula.FechaCreacion DESC "
        }


        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('Titulo',sql.NChar, name)
        .query(queryString);
        console.log(response)
        return response;
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


    // getPizzaById = async (id) => {
    //     console.log('This is a function on the service');

    //     const pool = await sql.connect(config);
    //     const response = await pool.request()
    //         .input('id',sql.Int, id)
    //         .query(`SELECT * from ${pizzaTabla} where id = @id`);
    //     console.log(response)

    //     return response.recordset[0];
    // }

    // createPizza = async (pizza) => {
    //     console.log('This is a function on the service');

    //     const pool = await sql.connect(config);
    //     const response = await pool.request()
    //         .input('Nombre',sql.NChar, pizza?.nombre ?? '')
    //         .input('LibreGluten',sql.Bit, pizza?.libreGluten ?? false)
    //         .input('Importe',sql.NChar, pizza?.importe ?? 0)
    //         .input('Descripcion',sql.NChar, pizza?.description ?? '')
    //         .query(`INSERT INTO ${pizzaTabla}(Nombre, LibreGluten, Importe, Descripcion) VALUES (@Nombre, @LibreGluten, @Importe, @Descripcion)`);
    //     console.log(response)

    //     return response.recordset;
    // }

    // updatePizzaById = async (id, pizza) => {
    //     console.log('This is a function on the service');

    //     const pool = await sql.connect(config);
    //     const response = await pool.request()
    //         .input('id',sql.Int, id)
    //         .input('Nombre',sql.NChar, pizza?.nombre ?? '')
    //         .input('LibreGluten',sql.Bit, pizza?.libreGluten ?? false)
    //         .input('Importe',sql.NChar, pizza?.importe ?? 0)
    //         .input('Descripcion',sql.NChar, pizza?.description ?? '')
    //         .query(`UPDATE Pizzas SET Nombre = @Nombre, LibreGluten = @LibreGluten, Importe = @Importe, Descripcion = @Descripcion WHERE id = @Id`);
    //     console.log(response)

    //     return response.recordset;
    // }

    // deletePizzaById = async (id) => {
    //     console.log('This is a function on the service');

    //     const pool = await sql.connect(config);
    //     const response = await pool.request()
    //         .input('id',sql.Int, id)
    //         .query(`DELETE FROM ${pizzaTabla} WHERE id = @id`);
    //     console.log(response)

    //     return response.recordset;
    // }
}