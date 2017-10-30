function antiCaps(s) {
  var s2 = "";
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toLowerCase()) {
      s2 += s.charAt(i).toUpperCase();
    } else if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      s2 += s.charAt(i).toLowerCase();
    } else {
      break;
    }
  }
  console.log(s2);
}
antiCaps("tOdAy Is YeStErDaY");
