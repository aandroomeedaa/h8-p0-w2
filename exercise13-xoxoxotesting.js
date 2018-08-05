console.log('Logic Challenge - X dan O - aandroomeedaa');
function xo(str) {
  // you can only write your code here!
   var coux = 0;
   var couo = 0;
 var   psx = str.indexOf('x');
 var   pso = str.indexOf('o');

  while (psx !== -1) {
  coux++;
  psx = str.indexOf('x', psx + 1);
}
while (pso !== -1) {
  couo++;
  pso = str.indexOf('o', pso + 1);
}

if (coux === couo){
  return true;
}else{
  return false;
}
}
 // TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
