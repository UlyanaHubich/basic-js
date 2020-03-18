module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;

  } else {
    return arr.filter (name => typeof name === "string")
    .map(name => name.trim().charAt(0).toUpperCase()).sort().join("");
  }
   
}