import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";
export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, email, cpf } = request.body;
    const client = await prismaClient.client.create({
      data: {
        name: name,
        email: email,
        cpf: cpf,
      },
    });
    return response.json(client);
  }
}
