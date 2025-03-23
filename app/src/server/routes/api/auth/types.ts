import { type Static, Type } from "@fastify/type-provider-typebox";

const AuthBodySchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
});

export type AuthBody = Static<typeof AuthBodySchema>;
