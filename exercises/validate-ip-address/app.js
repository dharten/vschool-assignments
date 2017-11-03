function isIPv4(str) {
  var sections = str.split(".");
  if (sections.length === 4) {
    return sections.every(function(sections) {
      return parseInt(sections) >= 0 && parseInt(sections) <= 255;
    });
  };
}

module.exports = isIPv4;
