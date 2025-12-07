function isEmpty(obj) {
  
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({"x": 5, "y": 42}))
