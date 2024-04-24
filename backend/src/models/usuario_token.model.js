import { Schema, model } from 'mongoose';

const userTokenSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    // token: {
    //   type: String,
    //   required: true,
    // },
    refreshToken: {
      type: String,
      required: true,
    }
  },
  { timestamps: true },
);

export const userTokenModel = model('user_token', userTokenSchema);
