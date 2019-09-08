function teamObj(name, level) {
  let obj = {};
  obj["teamName"] = name;
  obj["level"] = level;
  obj["points"] = 0;
  return obj;
}

module.exports = teamObj;
