class MainPage {

    driver

    constructor(driver) {
        this.driver = driver
    }

    // page selectors
    get inputFieldLeft() {
        return "inputFieldLeft"
    }

    get inputFieldRight() {
        return "inputFieldRight"
    }

    get additionButton() {
        return "additionButton"
    }

    get subtractButton() {
        return "subtractButton"
    }

    get multiplicationButton() {
        return "multiplicationButton"
    }

    get divisionButton() {
        return "divisionButton"
    }

    get resetButton() {
        return "resetButton"
    }

    get resultTextView() {
        return "resultTextView"
    }

    get errorText() {
        return "Please, fill the input fields correctly"
    }

    // page actions
    async inputValues(value1, value2) {
        let elementOne = await this.driver.elementByAccessibilityId(this.inputFieldLeft);
        await elementOne.type(value1)

        let elementTwo = await this.driver.elementByAccessibilityId(this.inputFieldRight);
        await elementTwo.type(value2)
    }

    async clickButton(btn) {
        let elementOperation = await this.driver.elementByAccessibilityId(btn);
        elementOperation.click()
    }

    async getResultText() {
        const result = await this.driver.elementByAccessibilityId(this.resultTextView);
        return await result.text()
    }

    async getResult() {
        let result = (await this.getResultText()).split(" ")
        return result[result.length - 1]
    }
}

export default MainPage