import { Request, Response } from "express";
import Aterrizaje from "../models/aterrizaje";

export const postAterrizaje = async (req: Request, res: Response) => {
  const { origen, destino } = req.body;

  const aterrizajeOrigen = await Aterrizaje.findAll({
    where: {
      nombre_ciudad: origen,
    },
  });

  const aterrizajeDestino = await Aterrizaje.findAll({
    where: {
      nombre_ciudad: destino,
    },
  });

  if (aterrizajeOrigen && aterrizajeDestino) {
    res.json({
      partida: aterrizajeOrigen,
      llegada: aterrizajeDestino,
    });
  } else {
    res.status(404).json({
      msg: `No existen aterrizajes con el origen: ${origen} o destino: ${destino}`,
    });
  }
};