import { Request, Response } from "express";
import { prismaClient } from "../database/PrismaClient";

export class ClientDeleteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const parsedId = parseInt(id);

      // Verifica se o cliente existe antes de excluir
      const existingClient = await prismaClient.client.findUnique({
        where: { id: parsedId },
      });

      if (!existingClient) {
        return response.status(404).json({ message: "Client not found" });
      }

      // Realiza a exclusão do cliente
      await prismaClient.client.delete({
        where: { id: parsedId },
      });

      return response.json({ message: "Client deleted successfully" });
    } catch (error) {
      return response.status(500).json({ message: "Error deleting client" });
    }
  }
}
