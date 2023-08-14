import { Router } from "express";
import { CreateClientController } from "./controllers/ClientRegisterController";
import { ClientDeleteController } from "./controllers/ClientDeleteController"; // Importe o ClientDeleteController
import { prismaClient } from "./database/PrismaClient";

const router = Router();

const createClient = new CreateClientController();
const deleteClient = new ClientDeleteController();

router.post("/client", createClient.handle);
router.get("/clients", async (req, res) => {
  try {
    const clients = await prismaClient.client.findMany({});
    res.json(clients);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ error: "Erro ao buscar clientes" });
  }
});
router.delete("/client/:id", deleteClient.handle);

export { router };
