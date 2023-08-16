import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";
export class ClientEditController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, cpf } = request.body;
    try {
      console.log("Editing client with ID:", id);
      const existingClient = await prismaClient.client.findUnique({
        where: { id: parseInt(id) },
      });
      if (!existingClient) {
        return response.status(404).json({ message: "Client not found" });
      }
      const updatedClient = await prismaClient.client.update({
        where: { id: parseInt(id) },
        data: {
          name: name,
          email: email,
          cpf: cpf,
        },
      });
      return response.json(updatedClient);
    } catch (error) {
      console.error("Error editing client:", error);
      return response.status(500).json({ message: "Error editing client" });
    }
  }
}
