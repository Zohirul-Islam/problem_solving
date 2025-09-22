const checkIfInstanceOf = (obj, classFn) =>
  obj != null && typeof classFn === "function" && obj instanceof classFn;
