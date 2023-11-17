import { Sequelize } from 'sequelize';


const db = new Sequelize('viajes','root','',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;
