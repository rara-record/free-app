import type { FastifyPluginAsync } from "fastify";
import { registerSchema } from "./shema";
import type { AuthBody } from "./types";

const authRoute: FastifyPluginAsync = async (app) => {
  app.post("/login", async () => {
    return app.userService.login();
  });

  app.post<{ Body: AuthBody }>(
    "/register",
    {
      schema: registerSchema,
    },
    async (request, reply) => {
      try {
        const user = await app.userService.register(request.body);

        return reply.code(201).send({
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          success: true,
          message: "회원가입이 완료되었습니다.",
          username: user.username,
        });
      } catch (err) {
        return reply.code(500).send({
          success: false,
          message: "회원가입 중 오류가 발생했습니다.",
        });
      }
    }
  );
};

export default authRoute;
