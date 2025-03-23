import type { FastifyPluginAsync } from "fastify";
import authRoute from "./auth";

const api: FastifyPluginAsync = async (app) => {
  app.register(authRoute, { prefix: "/auth" });
};

export default api;
