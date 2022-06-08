import {promiseChainRemote} from "wd";

const connectOpts = {
    path: '/wd/hub',
    port: 4723,
}

const capabilities = {
    platformName: "Android",
    platformVersion: "5.1",
    deviceName: "emulator-5554",
    appPackage: "com.vbanthia.androidsampleapp",
    appActivity: "com.vbanthia.androidsampleapp.MainActivity",
    automationName: "UiAutomator2"
}

const driver = await promiseChainRemote(connectOpts);
await driver.init(capabilities)

export default driver
