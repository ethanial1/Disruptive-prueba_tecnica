import mongoose from "mongoose";
import server, { stopServer } from './src/main.js';
import { MONGO_URI, PORT } from "./src/config/app.js";

server.listen(PORT, () => {
  console.log('Servidor en el puerto', PORT);
  mongoose.connect(MONGO_URI, {dbName: 'disruptive'}).catch(() => stopServer())
})
