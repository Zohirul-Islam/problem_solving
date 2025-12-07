function compactObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(compactObject).filter(Boolean);
  }

  if (obj !== null && typeof obj === "object") {
    const result = {};
    for (const key in obj) {
      const value = compactObject(obj[key]);
      if (Boolean(value)) {
        result[key] = value;
      }
    }
    return result;
  }

  return obj;
}
