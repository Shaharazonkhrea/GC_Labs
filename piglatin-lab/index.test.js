const {
	translate
} = require("./index")

describe("translate()", () => {
	it("should reorder word and append ay if word starts with consonant", async () => {
		const actual = translate("table")
        const expected = "abletay"
		expect(actual).toBe(expected)
	})
    it("should append way to word if word starts with vowel", async () => {
		const actual = translate("apple")
        const expected = "appleway"
		expect(actual).toBe(expected)
	})
    it("should return pig latin if upper case is present", async () => {
		const actual = translate("House")
        const expected = "ousehay"
		expect(actual).toBe(expected)
	})
    it("should return pig latin if input has multiple words", async () => {
		const actual = translate("hello all worlds")
        const expected = "ellohay allway orldsway"
		expect(actual).toBe(expected)
	})
})