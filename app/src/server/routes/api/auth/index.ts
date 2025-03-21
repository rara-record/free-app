import type { FastifyPluginAsync } from "fastify";
import { UserService } from "../../../services/UserService";

const authRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post("/login", async () => {
    const userId = await fastify.userService.getUserById();
    console.log(userId);
  });

  fastify.post("register", async () => {});
};

export default authRoute;
