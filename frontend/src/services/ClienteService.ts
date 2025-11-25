import type { Cliente } from "../../../backend/src/Models/Cliente";
import { fetchApi } from "./api";

export class ClienteService {
  static async getAll(): Promise<Cliente[]> {
    return fetchApi("/cliente");
  }

  static async getById(id: number): Promise<Cliente> {
    return fetchApi(`/cliente/${id}`);
  }

  static async create(cliente: Cliente): Promise<Cliente> {
    return fetchApi("/cliente", {
      method: "POST",
      body: JSON.stringify(cliente),
    });
  }

  static async update(id: number, cliente: Cliente): Promise<Cliente> {
    return fetchApi(`/cliente/${id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
    });
  }

  static async delete(id: number): Promise<void> {
    await fetchApi(`/cliente/${id}`, {
      method: "DELETE",
    });
  }
}
