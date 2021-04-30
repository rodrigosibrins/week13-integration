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
    it("square area to be false", () => {
      expect(complexOperations.calculateArea("square", 2)).toBeFalsy();
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
    it("if arguments are not defined show the correct mssg", () => {
      expect(complexOperations.sumGratherThan()).toMatch(
        "The params should be numbers"
      );
    });
    it("if arguments are not numbers show the correct mssg", () => {
      expect(complexOperations.sumGratherThan("string", {}, undefined)).toMatch(
        "The params should be numbers"
      );
    });
    it("total sum to be greater than number3", () => {
      expect(complexOperations.sumGratherThan(400, 200, 300)).toBe(
        "600 is grather than 300"
      );
    });
    it("fourth test for sumGratherThan", () => {
      expect(complexOperations.sumGratherThan(45, 45, 100)).toBe(
        "90 is less than 100"
      );
    });
  });

  describe("intersectionBetweenArrays", () => {
    it("if params not defined show the correct mssg", () => {
      expect(complexOperations.intersectionBetweenArrays()).toMatch(
        "The params should be arrays"
      );
    });
    it("if params not arrays show the correct mssg", () => {
      expect(
        complexOperations.intersectionBetweenArrays("string", 4234)
      ).toMatch("The params should be arrays");
    });
    it("if there is not two arrays show the proper mssg", () => {
      expect(
        complexOperations.intersectionBetweenArrays(["car", "ball", "bed"])
      ).toMatch("The params should be arrays");
    });
    it("return car", () => {
      expect(
        complexOperations.intersectionBetweenArrays(
          ["car", "ball", "bed"],
          ["car"]
        )
      ).toStrictEqual(["car"]);
    });
    it("if there is no matching elements show proper mssg", () => {
      expect(
        complexOperations.intersectionBetweenArrays(
          ["car", "ball", "bed"],
          ["rocket"]
        )
      ).toMatch("There are not matching elements");
    });
    it("return ball", () => {
      expect(
        complexOperations.intersectionBetweenArrays(
          ["car", "ball", "bed"],
          ["ball", 250]
        )
      ).toStrictEqual(["ball"]);
    });
  });

  describe("sortArrayOfObjectsByKey", () => {
    it("first test for sortArrayOfObjectsByKey", () => {
      expect(complexOperations.sortArrayOfObjectsByKey()).toMatch(
        "The first param should be an array"
      );
    });
    it("first test for sortArrayOfObjectsByKey", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey("string", undefined)
      ).toMatch("The first param should be an array");
    });
    it("first test for sortArrayOfObjectsByKey", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ instrument: "guitar" }],
          undefined
        )
      ).toMatch("The second param should be an string");
    });
    it("first test for sortArrayOfObjectsByKey", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey([{ instrument: "guitar" }])
      ).toMatch("The second param should be an string");
    });
    it("first test for sortArrayOfObjectsByKey", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [
            { instrument: "guitar" },
            { instrument: "bass" },
            { instrument: "drum" },
          ],
          "body"
        )
      ).toMatch("Some elements in the array does not have the body property");
    });
    it("first test for sortArrayOfObjectsByKey", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [
            { instrument: "guitar" },
            { instrument: "bass" },
            { instrument: "drum" },
          ],
          " "
        )
      ).toMatch("Some elements in the array does not have the   property");
    });
    it("sixth test for sortArrayOfObjectsByKey", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [
            { instrument: "guitar" },
            { instrument: "bass" },
            { instrument: "drum" },
          ],
          "instrument"
        )
      ).toEqual([
        { instrument: "bass" },
        { instrument: "drum" },
        { instrument: "guitar" },
      ]);
    });
  });

  describe("numberOfOddAndEvenNumbers", () => {
    it("first test for numberOfOddAndEvenNumbers", () => {});
  });
});
