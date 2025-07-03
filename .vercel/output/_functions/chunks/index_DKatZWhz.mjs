function isEmpty(value) {
  if (value === null || value === void 0) {
    return true;
  }
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  return false;
}
function convertStringtoUrl(value) {
  let str = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").replaceAll("?", "");
  let noSpaceStr = str.replace(/\s/g, "-");
  let lowercaseStr = noSpaceStr.toLowerCase();
  let finalStr = "/" + lowercaseStr;
  return finalStr;
}

export { convertStringtoUrl as c, isEmpty as i };
