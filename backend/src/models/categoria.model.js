import { Schema, model } from 'mongoose';

const CategorySchema = new Schema(
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
  },
  { timestamps: true }
);

export const categoriaModel = model('categoria', CategorySchema);
