import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class FindeClientController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.params;

    const client = await prismaClient.client.findMany({
      where: {
        name,
        email,
      },
      include: {
        ClientType: true,
      },
    });

    return response.json(client);
  }
}
