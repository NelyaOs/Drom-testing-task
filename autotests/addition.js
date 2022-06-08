import driver from "../index.js"
import MainPage from "../pages/main.page.js";
import {checkResult} from "../utils/checkResult.js";

const mainPage = new MainPage(driver)

let result = ""

// addition
await mainPage.inputValues(25, 5)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, 30)
await mainPage.clickButton(mainPage.resetButton)

// empty values
await mainPage.inputValues("", "")
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResultText()
checkResult(result, mainPage.errorText)
await mainPage.clickButton(mainPage.resetButton)

// addition with zero
await mainPage.inputValues(25, 0)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, 25)
await mainPage.clickButton(mainPage.resetButton)

// negative numbers
await mainPage.inputValues(-25, -5)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, -30)
await mainPage.clickButton(mainPage.resetButton)

// big number
await mainPage.inputValues(1000000000000, 10)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, 1000000000010)
await mainPage.clickButton(mainPage.resetButton)

// negative result
await mainPage.inputValues(-30, 5)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, -25)
await mainPage.clickButton(mainPage.resetButton)

// fractional numbers
await mainPage.inputValues(17.25, 5.25)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, 22.5)
await mainPage.clickButton(mainPage.resetButton)

// fractional number with many decimal places
await mainPage.inputValues(17.2548, 5.2537)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, 22.5085)
await mainPage.clickButton(mainPage.resetButton)

// integer and fractional number
await mainPage.inputValues(17.25, 5)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, 22.25)
await mainPage.clickButton(mainPage.resetButton)

// fractional number with many decimal places and integer
await mainPage.inputValues(17.25, 5)
await mainPage.clickButton(mainPage.additionButton)
result = await mainPage.getResult()
checkResult(result, 22.25)
await mainPage.clickButton(mainPage.resetButton)
