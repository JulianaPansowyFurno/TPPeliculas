import sql from 'mssql'
import config from '../models/BD.js'
import 'dotenv/config'

const PersonajeTabla = process.env.DB_TABLA_PERSONAJE;

export default class PerosonajeService {

    getPesonaje = async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${PersonajeTabla}`);
        console.log(response)

        return response.recordset;
    }
}