import { Router } from "express";
import { CreateClientController } from "./controllers/ClientRegisterController";
import { CreateTypesController } from "./controllers/CreateTypesController";
import { CreateClientTypeController } from "./controllers/CreateClientTypeController";
import { CreateClientWithExistType } from "./controllers/CreateClientWithExistType";
import { FindeClientController } from "./controllers/FindClientController";

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

export { router };
