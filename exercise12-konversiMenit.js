function konversiMenit(menit) { 
  var jam = Math.floor(menit / 60);
  var sisa = menit % 60;
  if(sisa <= 9) {
    return jam + ':0' + sisa;
  }
  return jam + ':' + sisa;
}
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
