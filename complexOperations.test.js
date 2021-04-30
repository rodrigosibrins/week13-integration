import "jest";
import * as complexOperations from "./complexOperations";

describe("complexOperation - Unit Tests", () => {
  describe("checkEmail", () => {
    it("if email is undefined show the correct mssg", () => {
      expect(complexOperations.checkEmail()).toBe(
        "The email should be an string"
      );
    });
    it("if email is empty show the correct mssg", () => {
      expect(complexOperations.checkEmail("")).toBe(
        "The email should be an string"
      );
    });
    it("if email is a number show the correct mssg", () => {
      expect(complexOperations.checkEmail(9876)).toBe(
        "The email should be an string"
      );
    });
    it("if email is not complete show the correct mssg", () => {
      expect(complexOperations.checkEmail("@")).toBe("The email is invalid");
    });
    it("if email is not valid show the correct mssg", () => {
      expect(complexOperations.checkEmail("rodrigo@.ar")).toBe(
        "The email is invalid"
      );
    });
    it("if email is valid show the correct mssg", () => {
      expect(complexOperations.checkEmail("rodrigo@gmail.com")).toBe(
        "The email is valid"
      );
    });
  });

  describe("calculateArea", () => {
    it("if figure is undefined show the correct mssg", () => {
      expect(complexOperations.calculateArea()).toBe(
        "undefined is not supported"
      );
    });
    it("if figure is not supported show the correct mssg", () => {
      expect(complexOperations.calculateArea("pentagon", 4, 4)).toBe(
        "pentagon is not supported"
      );
    });
    it("if number1 & number2 are not defined show the correct mssg", () => {
      expect(complexOperations.calculateArea("rectangle")).toBe(
        "number1 and number2 should be numbers"
      );
    });
    it("if number1 is not a number show the correct mssg", () => {
      expect(complexOperations.calculateArea("rectangle", "string", 4)).toBe(
        "number1 and number2 should be numbers"
      );
    });
    it("if number2 is not a number show the correct mssg", () => {
      expect(complexOperations.calculateArea("rectangle", 4, "string")).toBe(
        "number1 and number2 should be numbers"
      );
    });
    it("rectangle area to be 16", () => {
      expect(complexOperations.calculateArea("rectangle", 4, 4)).toBe(16);
    });
    it("square area to be 4", () => {
      expect(complexOperations.calculateArea("square", 2, 2)).toBe(4);
    });
    it("triangle area to be 7,5", () => {
      expect(complexOperations.calculateArea("triangle", 5, 3)).toBe(7.5);
    });
    it("circle area to be 132,73", () => {
      expect(complexOperations.calculateArea("circle", 6.5)).toBeCloseTo(
        132.73,
        0.5
      );
    });
    it("circle area to be 201,06", () => {
      expect(complexOperations.calculateArea("circle", 8, 3)).toBeCloseTo(
        201.06,
        0.5
      );
    });
  });

  describe("sumGratherThan", () => {
    it("first test for sumGratherThan", () => {});
  });

  describe("intersectionBetweenArrays", () => {
    it("first test for intersectionBetweenArrays", () => {});
  });

  describe("sortArrayOfObjectsByKey", () => {
    it("first test for sortArrayOfObjectsByKey", () => {});
  });

  describe("numberOfOddAndEvenNumbers", () => {
    it("first test for numberOfOddAndEvenNumbers", () => {});
  });
});
