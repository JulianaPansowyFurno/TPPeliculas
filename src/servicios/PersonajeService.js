import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

const PersonajeTabla = process.env.DB_TABLA_PERSONAJE;

export default class PersonajeService {

    getPersonaje = async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT Imagen, Nombre, Id from ${PersonajeTabla}`);
        console.log(response)

        return response.recordset;
    }

    createPersonaje = async (personaje) => {
        console.log('This is a function on the service');
            const pool = await sql.connect(config);
            const response = await pool.request()
                .input('Imagen',sql.NChar, personaje.Imagen)
                .input('Nombre',sql.NChar, personaje.Nombre)
                .input('Edad',sql.Int, personaje.Edad)
                .input('Peso',sql.Int, personaje.Peso)
                .input('Historia',sql.NChar, personaje.Historia)
                .query(`INSERT INTO ${PersonajeTabla}(Imagen, Nombre, Edad, Peso, Historia) VALUES ( @Imagen, @Nombre, @Edad, @Peso, @Historia)`);
            console.log(response)
    
        return response.recordset;
    }

    deletePersonajeById = async (id) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('id',sql.Int, id)
        .query(`DELETE FROM ${PersonajeTabla} WHERE id = @id`);
        console.log(response)
        return response.recordset;
    }

    updatePersonajeById = async (id, personaje) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('Id',sql.Int, id)
            .input('Imagen',sql.NChar, personaje.Imagen)
            .input('Nombre',sql.NChar, personaje.Nombre)
            .input('Edad',sql.Int, personaje.Edad)
            .input('Peso',sql.Int, personaje.Peso)
            .input('Historia',sql.NChar, personaje.Historia)
            .query(`UPDATE ${PersonajeTabla} SET Imagen = @Imagen, Nombre = @Nombre, Edad = @Edad, Peso = @Peso, Historia = @Historia WHERE id = @Id`);
        console.log(response)

        return response.recordset;
    }

    PersonajesDetalles = async (id) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('Id',sql.Int, id)
        .query(`Select * FROM ${PersonajeTabla} WHERE Personaje.Id = @Id`);
                
        const pool2 = await sql.connect(config);
        const response2 = await pool2.request()
        .input('Id',sql.Int, id)
        .query(`Select Pelicula.Titulo FROM Pelicula inner join PersonajesAsociados on PersonajesAsociados.FkPeliculas = Pelicula.Id WHERE PersonajesAsociados.FkPersonajes = @Id`);

        console.log(response)
        const personaje = response.recordset[0]
        personaje.pelicula = response2.recordset;
        return personaje;
    }

    BusquedaPersonaje = async (name, age , movie) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const queryString = (`Select Imagen, Nombre, Id FROM ${PersonajeTabla} `)

        if(name)
        {
            queryString += " where Personaje.Nombre = @Nombre "
        }
        if(age)
        {
            queryString += " where Personaje.Edad = @Edad "
        }
        if(movie)
        {
            queryString += " inner join PersonajesAsociados on PersonajesAsociados.FkPersonajes = Personaje.Id where  PersonajesAsociados.FkPeliculas = @Id"
        }

        const response = await pool.request()
        .input('Nombre',sql.NChar, name)
        .input('Edad',sql.Int, age)
        .input('Id',sql.Int, movie)
        .query(queryString);
        console.log(response)
        return queryString;
    }
}