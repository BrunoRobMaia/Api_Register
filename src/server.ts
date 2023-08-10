import express from "express";
import cors from "cors"; // Importe o pacote cors
import { router } from "./routes";

const app = express();

app.use(cors()); // Adicione esta linha para habilitar o CORS
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log("Servidor está ativo na porta 4000"));
