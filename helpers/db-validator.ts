import Usuario from "../models/usuario";

export const existeUsuarioPorId= async(id: number)=>{
    const existeUsuario = await Usuario.findByPk(id);
    if(!existeUsuario)
    {
        throw new Error(`El id no existe ${ id }`);
    }
}