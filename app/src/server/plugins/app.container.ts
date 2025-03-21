import fp from "fastify-plugin";
import { container } from "tsyringe";

// 서비스 및 레포지토리 임포트
import UserService from "../services/UserService";

declare module "fastify" {
  interface FastifyInstance {
    container: typeof container;
    userService: UserService;
  }
}

export default fp(
  async (app) => {
    /**
     * 의존성 등록
     */
    container.registerSingleton("UserService", UserService);

    /**
     * 환경 변수 등 설정 등록
     */
    container.register("CONFIG", {
      useValue: {
        cookieSecret: app.env?.COOKIE_SECRET,
      },
    });

    /**
     * Fastify 인스턴스에 컨테이너 추가
     */
    app.decorate("container", container);

    /**
     * 서비스 직접 추가
     */
    app.decorate("userService", container.resolve<UserService>("UserService"));

    /**
     * 애플리케이션 종료 시 정리 작업
     */
    app.addHook("onClose", async () => {});
  },
  {
    name: "app.container",
    dependencies: ["app.env"],
  },
);
