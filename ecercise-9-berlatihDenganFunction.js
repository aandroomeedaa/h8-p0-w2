//soal nomor 1

function Shoutout(){
  return('Halo Function!');
}
console.log(Shoutout())


//soal nomor 2

var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
function calculateMultiply(num1,num2) {
  return(num1 * num2);
}
console.log(hasilPerkalian);


//soal nomor 3

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
function processSentence(name,age,address,hobby) {
  return('Nama saya '+name + ', umur saya ' + age +' tahun' + ', alamat saya di ' + address + ', saya punya hobby yaitu ' +hobby + '!' );

}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
