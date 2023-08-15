import { Router } from "express";
import { CreateClientController } from "./controllers/ClientRegisterController";
import { ClientDeleteController } from "./controllers/ClientDeleteController";
import { prismaClient } from "./database/PrismaClient";
import { ClientEditController } from "./controllers/ClientEditController";

const router = Router();

const createClient = new CreateClientController();
const deleteClient = new ClientDeleteController();
const editClient = new ClientEditController();

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
router.put("/client/:id", editClient.handle);

export { router };
