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
    it("if params are not defined show the correct mssg", () => {
      expect(complexOperations.sumGratherThan()).toMatch(
        "The params should be numbers"
      );
    });
    it("if params are not numbers show the correct mssg", () => {
      expect(complexOperations.sumGratherThan("string", {}, undefined)).toMatch(
        "The params should be numbers"
      );
    });
    it("total sum to be greater than number3", () => {
      expect(complexOperations.sumGratherThan(400, 200, 300)).toBe(
        "600 is grather than 300"
      );
    });
    it("total sum to be less than number3", () => {
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
    it("if params is not defined show the proper mssg", () => {
      expect(complexOperations.sortArrayOfObjectsByKey()).toMatch(
        "The first param should be an array"
      );
    });
    it("if first param is not an array show proper mssg", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey("string", undefined)
      ).toMatch("The first param should be an array");
    });
    it("if second param is not a string show proper mssg", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [{ instrument: "guitar" }],
          undefined
        )
      ).toMatch("The second param should be an string");
    });
    it("if second param is not type string show proper mssg", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey([{ instrument: "guitar" }])
      ).toMatch("The second param should be an string");
    });
    it("when missing property show the proper mssg", () => {
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
    it("when property is empty show the proper mssg", () => {
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
    it("return the correct array ", () => {
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
    it("if any element doesn't have the property show the proper mssg ", () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
          [
            { instrument: "guitar" },
            { instrument: "bass" },
            { vehicle: "car" },
          ],
          "instrument"
        )
      ).toMatch(
        "Some elements in the array does not have the instrument property"
      );
    });
  });

  describe("numberOfOddAndEvenNumbers", () => {
    it("first test for numberOfOddAndEvenNumbers", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()).toMatch(
        "The param should be an array"
      );
    });
    it("second test for numberOfOddAndEvenNumbers", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers("string")).toMatch(
        "The param should be an array"
      );
    });
    it("third test for numberOfOddAndEvenNumbers", () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([1, { name: "rodrigo" }])
      ).toMatch("The array should have only numbers");
    });
    it("fourth test for numberOfOddAndEvenNumbers", () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([undefined, "string"])
      ).toMatch("The array should have only numbers");
    });
    it("fifth test for numberOfOddAndEvenNumbers", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([])).toStrictEqual({
        even: 0,
        odd: 0,
      });
    });
    it("sixth test for numberOfOddAndEvenNumbers", () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([33.33, 46.46])
      ).toStrictEqual({
        even: 0,
        odd: 2,
      });
    });
    it("seventh test for numberOfOddAndEvenNumbers", () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([22, 44, 66, 88])
      ).toStrictEqual({
        even: 4,
        odd: 0,
      });
    });
    it("eighth test for numberOfOddAndEvenNumbers", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([3, 8])).toStrictEqual(
        {
          even: 1,
          odd: 1,
        }
      );
    });
  });
});
