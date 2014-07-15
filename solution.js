var a = 23;
var b = 5324;
var flag = true;

var c = a * flag + b * !flag;

c = eval("a * flag + b * !flag");

c = a*flag || b*(!flag);