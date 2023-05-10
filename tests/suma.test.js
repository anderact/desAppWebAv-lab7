const {suma} = require("../utils/for_testing")

test("suma de dos numeros", () => {
    const result = suma(1,2)

    expect(result).toBe(3)
})

test("suma con valores no numéricos", () => {
    const result = suma("1","2")

    expect(result).toBe("valores incorrectos!")
})