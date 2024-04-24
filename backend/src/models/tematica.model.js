import { Schema, model } from 'mongoose';

const TematicaSchema = new Schema(
  {
    nombre: {
      type: String,
      unique: true,
      required: true,
    },
    unombre: {
      type: String,
      unique: true,
      required: true,
    },
    permisos: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const tematicaModel = model('tematica', TematicaSchema);
