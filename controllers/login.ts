import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const login = async(req:Request,res:Response)=>{

    const { correo_electronico,contraseña }  = req.body;

    try{
        // Verificar si el email existe
        const usuario = await Usuario.findOne({ 
            where: {
            correo_electronico:correo_electronico,
            contraseña:contraseña
        }});
        
        if(!usuario)
        {
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - correo'
            });
        }
        
        res.json({
            usuario
        });
        // Este return sirve para que no de un error al regresar dos peticiones
        return;

    } catch (error){
        console.log(error);
        
         res.status(500).json({
            msg:'Hable con el administrador'
        });
    }

    res.json({
        msg:'Login ok'
    });
}