import main from "../index.js"
import MainPage from "../pages/main.page.js";
import {checkResult} from "../utils/checkResult.js";

(async () => {
    const driver = await main()
    const mainPage = new MainPage(driver)

    let result = ""

    // multiplication
    await mainPage.inputValues(25, 5)
    await mainPage.clickButton(mainPage.multiplicationButton)
    result = await mainPage.getResult()
    checkResult(result, 125)
    await mainPage.clickButton(mainPage.resetButton)

    // empty values
    await mainPage.inputValues("", "")
    await mainPage.clickButton(mainPage.multiplicationButton)
    result = await mainPage.getResultText()
    checkResult(result, mainPage.errorText)
    await mainPage.clickButton(mainPage.resetButton)

    // multiplication with zero
    await mainPage.inputValues(25, 0)
    await mainPage.clickButton(mainPage.multiplicationButton)
    result = await mainPage.getResult()
    checkResult(result, 0)
    await mainPage.clickButton(mainPage.resetButton)

    // negative numbers
    await mainPage.inputValues(-25, -5)
    await mainPage.clickButton(mainPage.multiplicationButton)
    result = await mainPage.getResult()
    checkResult(result, 125)
    await mainPage.clickButton(mainPage.resetButton)

    // big number
    await mainPage.inputValues(1000000000000, 10)
    await mainPage.clickButton(mainPage.multiplicationButton)
    result = await mainPage.getResult()
    checkResult(result, 10000000000000)
    await mainPage.clickButton(mainPage.resetButton)

    // negative result
    await mainPage.inputValues(-30, 5)
    await mainPage.clickButton(mainPage.multiplicationButton)
    result = await mainPage.getResult()
    checkResult(result, -150)
    await mainPage.clickButton(mainPage.resetButton)

    // fractional numbers
    await mainPage.inputValues(3.7, 5.2)
    await mainPage.clickButton(mainPage.multiplicationButton)
    result = await mainPage.getResult()
    checkResult(result, 19.24)
    await mainPage.clickButton(mainPage.resetButton)

    // whole and fractional numbers
    await mainPage.inputValues(3.7, 5)
    await mainPage.clickButton(mainPage.multiplicationButton)
    result = await mainPage.getResult()
    checkResult(result, 18.5)
    await mainPage.clickButton(mainPage.resetButton)
})()