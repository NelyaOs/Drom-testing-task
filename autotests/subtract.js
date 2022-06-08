import main from "../index.js"
import MainPage from "../pages/main.page.js";
import {checkResult} from "../utils/checkResult.js";

(async () => {
    const driver = await main()
    const mainPage = new MainPage(driver)

    let result = ""

    // subtract
    await mainPage.inputValues(25, 5)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, 20)
    await mainPage.clickButton(mainPage.resetButton)

    // empty values
    await mainPage.inputValues("", "")
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResultText()
    checkResult(result, mainPage.errorText)
    await mainPage.clickButton(mainPage.resetButton)

    // subtract zero
    await mainPage.inputValues(25, 0)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, 25)
    await mainPage.clickButton(mainPage.resetButton)

    // negative numbers
    await mainPage.inputValues(-25, -5)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, -20)
    await mainPage.clickButton(mainPage.resetButton)

    // big number
    await mainPage.inputValues(1000000000000, 10)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, 999999999990)
    await mainPage.clickButton(mainPage.resetButton)

    // negative result
    await mainPage.inputValues(-30, 5)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, -35)
    await mainPage.clickButton(mainPage.resetButton)

    // subtracting a smaller number from a larger one
    await mainPage.inputValues(5, 30)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, -25)
    await mainPage.clickButton(mainPage.resetButton)

    // fractional number with two decimal places
    await mainPage.inputValues(12.75, 5.23)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, 7.52)
    await mainPage.clickButton(mainPage.resetButton)

    // fractional number with many decimal places
    await mainPage.inputValues(12.7567, 5.2349)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, 7.5218)
    await mainPage.clickButton(mainPage.resetButton)

    // subtraction of fractional numbers smaller from larger
    await mainPage.inputValues(5.23, 12.75)
    await mainPage.clickButton(mainPage.subtractButton)
    result = await mainPage.getResult()
    checkResult(result, -7.52)
    await mainPage.clickButton(mainPage.resetButton)
})()