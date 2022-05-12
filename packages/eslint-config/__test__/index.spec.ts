import * as path from "path"
import { ESLint } from "eslint"

describe("test eslint instance", () => {
  test("eslint basic config instance should running successfully", () => {
    const eslint = new ESLint({
      baseConfig: require("../basic/lib"),
      cwd: path.resolve(__dirname, "../"),
    })
    expect(eslint).toBeTruthy()
  })

  test("eslint ts config instance should running successfully", () => {
    const eslint = new ESLint({
      baseConfig: require("../typescript/lib"),
      cwd: path.resolve(__dirname, "../"),
    })
    expect(eslint).toBeTruthy()
  })

  test("eslint vue config instance should running successfully", () => {
    const eslint = new ESLint({
      baseConfig: require("../vue/lib"),
      cwd: path.resolve(__dirname, "../"),
    })
    expect(eslint).toBeTruthy()
  })

  test("eslint react config instance should running successfully", () => {
    const eslint = new ESLint({
      baseConfig: require("../react/lib"),
      cwd: path.resolve(__dirname, "../"),
    })
    expect(eslint).toBeTruthy()
  })

  test("eslint all config instance should running successfully", () => {
    const eslint = new ESLint({
      baseConfig: require("../all/lib"),
      cwd: path.resolve(__dirname, "../"),
    })
    expect(eslint).toBeTruthy()
  })
})
