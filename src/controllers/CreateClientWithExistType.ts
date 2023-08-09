import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateClientWithExistType {
  async handle(request: Request, response: Response) {
    const { name, email, id_type } = request.body;

    const client = await prismaClient.clientType.create({
      data: {
        client: {
          create: {
            name,
            email,
          },
        },
        type: {
          connect: {
            id: id_type,
          },
        },
      },
    });

    return response.json(client);
  }
}
