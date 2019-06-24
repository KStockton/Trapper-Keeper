import * as actions from "../Actions/index";
import handleErrorReducer from "./handleErrorReducer";

const error = "error message";

describe("handleErrorReducer", () => {
  it("should return state on default", () => {
    const expected = "";
    const result = handleErrorReducer(undefined, "");
    expect(result).toEqual(expected);
  });

  it("should return state with a string of error message", () => {
    const expected = error;
    const result = handleErrorReducer(
      undefined,
      actions.handleError(error)
    );

    expect(result).toEqual(expected);
  });
});
