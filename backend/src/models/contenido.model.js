import { Schema, model } from 'mongoose';

const ContenidoSchema = new Schema(
  {
    tematica: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    contenido: {
      type: String,
      required: true,
    },
    credito: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const contenidoModel = model('contenido', ContenidoSchema);
