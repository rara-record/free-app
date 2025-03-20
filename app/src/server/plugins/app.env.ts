import fastifyEnv from "@fastify/env";
import { type Static, Type } from "@sinclair/typebox";
import fp from "fastify-plugin";

export const schema = Type.Object({
  COOKIE_SECRET: Type.String(),
});

declare module "fastify" {
  interface FastifyInstance {
    env: Static<typeof schema>;
  }
}

export default fp(
  async (app) => {
    app.register(fastifyEnv, {
      confKey: "env",
      schema,
      data: {
        ...process.env,
      },
    });
  },
  {
    name: "app.env",
  }
);
