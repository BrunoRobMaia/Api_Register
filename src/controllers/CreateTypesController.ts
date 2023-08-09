import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class CreateTypesController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const types = await prismaClient.type.create({
      data: {
        name,
      },
    });

    return response.json(types);
  }
}
