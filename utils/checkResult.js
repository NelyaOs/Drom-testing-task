import {equal} from "assert";

export const checkResult = (actual, expected) => {
    try {
        equal(actual, expected)
    } catch (err) {
        console.log(err)
    }
}