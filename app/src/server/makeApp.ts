import path from "node:path";
import FastifyAutoload from "@fastify/autoload";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import Fastify from "fastify";
import { swaggerConfig, swaggerConfigUI } from "./config/swagger";
import routes from "./routes";

import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

const SECOND = 1000;

export async function makeApp() {
  /**
   * 앱을 생성합니다
   */
  const app = Fastify({
    logger: true,
    pluginTimeout: 60 * SECOND,
    disableRequestLogging: true,
  }).withTypeProvider<TypeBoxTypeProvider>();

  /**
   * 플러그인을 등록합니다
   */
  await app.register(FastifyAutoload, {
    dir: path.resolve("./dist/server/plugins"),
  });

  /**
   * Swagger를 등록합니다
   */
  await app.register(fastifySwagger, swaggerConfig);
  await app.register(fastifySwaggerUI, swaggerConfigUI);

  /**
   * API 라우트를 등록합니다
   */
  await app.register(routes);

  /**
   * 모든 Fastify 플러그인이 준비될때까지 대기합니다
   */
  await app.ready();
  app.log.info({}, "[system] completed - app.ready()");

  return app;
}
