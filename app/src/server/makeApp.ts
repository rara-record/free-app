import path from "node:path";
import FastifyAutoload from "@fastify/autoload";
import Fastify from "fastify";
import routes from "./routes";
const SECOND = 1000;

export async function makeApp() {
  /**
   * 앱을 생성합니다
   */
  const app = Fastify({
    logger: true,
    pluginTimeout: 60 * SECOND,
    disableRequestLogging: true,
  });

  /**
   * 플러그인을 등록합니다
   */
  await app.register(FastifyAutoload, {
    dir: path.resolve("./dist/server/plugins"),
  });

  /**
   * API 라우트를 등록합니다
   */
  await app.register(routes);

  /**
   * 헬스체크 엔드포인트를 등록합니다
   *
   * GET /healthz
   */
  app.get("/healthz", async () => {
    return {
      ok: true,
    };
  });

  /**
   * 모든 Fastify 플러그인이 준비될때까지 대기합니다
   */
  await app.ready();
  app.log.info({}, "[system] completed - app.ready()");

  return app;
}
