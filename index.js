export const increment = (value) => {
    if (typeof value !== "number") {
      throw "not a number";
    }
    return value + 1;
}