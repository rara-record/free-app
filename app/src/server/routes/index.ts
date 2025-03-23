import type { FastifyPluginAsync } from "fastify";
import api from "./api";

const routes: FastifyPluginAsync = async (app) => {
  app.register(api, { prefix: "/api" });
};

export default routes;
