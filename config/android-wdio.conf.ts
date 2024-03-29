import path from "path";

const projectPath: string = process.cwd();
const androidAppPath: string = path.join(
  projectPath,
  "/app/android/Android-MyDemoAppRN.1.3.0.build-244.apk"
);

const config = {
  runner: "local",
  specs: ["../tests/android/*.ts"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:device-name": "Pixel 4 API 34",
      "appium:platformVersion": "14",
      "appium:automationName": "UIAutomator2",
      "appium:app": androidAppPath,
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

export { config };
