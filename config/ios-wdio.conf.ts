import { join } from "path";

const projectPath: string = process.cwd();
const iosAppPath: string = join(projectPath, "/app/ios/MyRNDemoApp.app");

export const config = {
  runner: "local",
  specs: ["../tests/ios/*.ts"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "IOS",
      "appium:udid": "E0BB4C18-8831-4B66-BD5A-85B4332ACFCA",
      "appium:automationName": "XCUItest",
      "appium:app": iosAppPath,
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["appium"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
