import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class FindeClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const client = await prismaClient.client.findFirst({
      where: {
        id,
      },
      include: {
        ClientType: true,
      },
    });

    return response.json(client);
  }
}
