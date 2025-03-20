import path from "node:path";
import { build } from "esbuild";
import { glob } from "glob";

// web 폴더를 제외한 모든 ts 파일을 엔트리 포인트로 설정
const entryPoints = await glob([
  path.resolve("./src/*.ts"),
  path.resolve("./src/!(web)/**/*.ts"),
]);

build({
  entryPoints,
  outdir: "dist/server",
  target: "node20",
  platform: "node",
  bundle: false,
  minify: false,
  sourcemap: false,
  format: "esm",
  plugins: [],
});
