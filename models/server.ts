import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';
import userRoutes from '../routes/usuarios';
import loginRoutes from '../routes/login';
import dijkstraRoutes from '../routes/dijkstra';
class Server {
    
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        login:'/api/login',
        dijkstra:'/api/dijkstra'
    }

    constructor() {
        this.app  = express();
        this.port = '8080';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            console.log('Error al conectar la base de datos');
        }
    }

    middlewares() 
    {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }

    routes()
    {
        this.app.use(this.apiPaths.usuarios,userRoutes);
        this.app.use(this.apiPaths.login,loginRoutes);
        this.app.use(this.apiPaths.dijkstra,dijkstraRoutes);
    }
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }
}

export default Server;