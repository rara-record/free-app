import { Type } from "@fastify/type-provider-typebox";

export const registerSchema = {
  description: "회원가입 API",
  tags: ["auth"],
  body: Type.Object({
    username: Type.Optional(
      Type.String({ description: "사용자 이름", examples: ["김보라"] })
    ),
    password: Type.String({
      description: "사용자 비밀번호",
      minLength: 8,
      examples: ["password123"],
    }),
  }),
  response: {
    201: Type.Object({
      token: Type.String({
        description: "JWT 토큰",
        examples: ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"],
      }),
      username: Type.String({ examples: ["김보라"] }),
      success: Type.Boolean({ examples: [true] }),
      message: Type.String({ examples: ["회원가입이 완료되었습니다."] }),
    }),
    400: Type.Object({
      success: Type.Boolean({ examples: [false] }),
      message: Type.String({ examples: ["이미 사용 중인 이메일입니다."] }),
    }),
  },
};
