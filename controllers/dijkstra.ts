import { Request, Response } from "express";
import { dijkstra } from "../helpers/dijkstra";
import Arista from "../models/arista";


export const postDijkstra =async (req: Request, res: Response) => {
    const {origen ,destino} = req.body;
     
    const resultado = await dijkstra(origen, destino);
    
    try {
        return res.json({ caminoMasCorto: resultado });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        });    
    }
}
export const getVuelos=async(req:Request,res:Response)=>{
    const {seleccion} = req.body;
    
    const  aristas = await Arista.findAll( {
        where:{
        nodo_origen:seleccion
    } }
    );

    if( aristas ) 
    {
        res.json(aristas);
    } 
    else 
    {
        res.status(404).json({
            msg: `No existe una arista ${ seleccion }`
        });
    }
}
