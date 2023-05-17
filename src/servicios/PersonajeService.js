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
        .query(`Select Pelicula.Titulo, Personaje.*  
                FROM ${PersonajeTabla} 
                inner join PersonajesAsociados on ${PersonajeTabla}.Id =  PersonajesAsociados.FkPersonajes 
                inner join Pelicula on PersonajesAsociados.FkPeliculas = Pelicula.Id 
                WHERE Personaje.Id = @Id`);
                // terminar
        console.log(response)
        return response.recordset;
    }
}