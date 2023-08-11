import { Router } from "express";
import { CreateClientController } from "./controllers/ClientRegisterController";
import { CreateTypesController } from "./controllers/CreateTypesController";
import { CreateClientTypeController } from "./controllers/CreateClientTypeController";
import { CreateClientWithExistType } from "./controllers/CreateClientWithExistType";
import { FindeClientController } from "./controllers/FindClientController";
import { prismaClient } from "./database/PrismaClient";

const router = Router();

const createClient = new CreateClientController();
const createTypes = new CreateTypesController();
const createClientType = new CreateClientTypeController();
const createClientTypeExist = new CreateClientWithExistType();

const findClient = new FindeClientController();

router.post("/client", createClient.handle);
router.post("/types", createTypes.handle);
router.post("/client_types", createClientType.handle);
router.post("/client_types_exist", createClientTypeExist.handle);
router.get("/client/:id", findClient.handle);
router.get("/clients", async (req, res) => {
  try {
    const clients = await prismaClient.client.findMany({
      include: {
        ClientType: true,
      },
    });
    res.json(clients);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ error: "Erro ao buscar clientes" });
  }
});

export { router };
