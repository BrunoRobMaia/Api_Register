import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateClientTypeController {
  async handle(request: Request, response: Response) {
    const { id_client, id_type } = request.body;

    const clientType = await prismaClient.clientType.create({
      data: {
        id_client,
        id_type,
      },
    });

    return response.json(clientType);
  }
}
