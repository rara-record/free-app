import type { FastifyPluginAsync } from "fastify";
import { registerSchema } from "./shema";

const authRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post("/login", async () => {
    return fastify.userService.login();
  });

  fastify.post(
    "register",
    {
      schema: registerSchema,
    },
    async () => {
      return fastify.userService.register();
    },
  );
};

export default authRoute;
