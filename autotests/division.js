import main from "../index.js"
import MainPage from "../pages/main.page.js";
import {checkResult} from "../utils/checkResult.js";


(async () => {
    const driver = await main()
    const mainPage = new MainPage(driver)

    let result = ""

    // division
    await mainPage.inputValues(25, 5)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResult()
    checkResult(result, 5)
    await mainPage.clickButton(mainPage.resetButton)

    // empty values
    await mainPage.inputValues("", "")
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResultText()
    checkResult(result, mainPage.errorText)
    await mainPage.clickButton(mainPage.resetButton)

    // division on zero
    await mainPage.inputValues(25, 0)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResultText()
    checkResult(result, mainPage.errorText)
    await mainPage.clickButton(mainPage.resetButton)

    // negative numbers
    await mainPage.inputValues(-25, -5)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResult()
    checkResult(result, 5)
    await mainPage.clickButton(mainPage.resetButton)

    // big number
    await mainPage.inputValues(1000000000000, 10)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResult()
    checkResult(result, 100000000000)
    await mainPage.clickButton(mainPage.resetButton)

    // negative result
    await mainPage.inputValues(-30, 5)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResult()
    checkResult(result, -6)
    await mainPage.clickButton(mainPage.resetButton)

    // dividing a smaller number by a larger one
    await mainPage.inputValues(-3, -30)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResult()
    checkResult(result, 0.1)
    await mainPage.clickButton(mainPage.resetButton)

    // fractional numbers
    await mainPage.inputValues(4.6, 2.3)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResult()
    checkResult(result, 2)
    await mainPage.clickButton(mainPage.resetButton)

    // fractional numbers: dividing a smaller number by a larger one
    await mainPage.inputValues(2.34, 7.2)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResult()
    checkResult(result, 0.325)
    await mainPage.clickButton(mainPage.resetButton)

    // division of a fractional number by an integer
    await mainPage.inputValues(5.48, 2)
    await mainPage.clickButton(mainPage.divisionButton)
    result = await mainPage.getResult()
    checkResult(result, 2.74)
    await mainPage.clickButton(mainPage.resetButton)
})()
