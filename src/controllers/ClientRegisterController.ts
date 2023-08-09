import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;

    const client = await prismaClient.client.create({
      data: {
        name,
        email,
      },
    });

    return response.json(client);
  }
}
