import { Schema, model } from 'mongoose';

const RoleSchema = new Schema(
  {
    nombre: {
      type: String,
      unique: true,
      required: true,
    },
    permisos: {
      type: [String],
      unique: true,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const roleModel = model('role', RoleSchema);
