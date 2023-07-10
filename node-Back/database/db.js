import { Sequelize } from "sequelize";

//La 3ra es la contraseña
const db = new Sequelize('database_app','root','',{
    host:'localhost',
    dialect: 'mysql'
})

export default db