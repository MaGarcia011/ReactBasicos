import db from "../database/db.js";
//Importar la conexión a la base 


import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default BlogModel