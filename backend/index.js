import mongoose from "mongoose";
import server, { stopServer } from './src/main.js';

const PORT = 5003;
const MONGO_URI = 'mongodb://root:secret@192.168.1.190:27017';

server.listen(PORT, () => {
  console.log('Servidor en el puerto', PORT);
  mongoose.connect(MONGO_URI, {dbName: 'disruptive'}).catch(() => stopServer())
})
