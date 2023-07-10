import BlogModel from "../models/BlogModel.js";

//Métodos para el CRUD

//Mostrar todos los registros
export const getAllBlogs = async(req,res) =>{
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getBlogs = async(req,res) =>{
    try {
        const blog = await BlogModel.findAll({
            where: { id:req.params.id}
        })
        res.json(blog)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createBlog = async(req,res) =>{
    try {
        const createblog = await BlogModel.create(req.body)
        res.json({
            "message":"Registro creado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar un registro
export const updateBlog = async (req,res) =>{
    try {
        BlogModel.update(req.body, {
            where:{ id:req.params.id}
        })
        res.json({
            "message":"Registro actualizado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar un registro 
export const deleteBlog = async (req,res) =>{
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

