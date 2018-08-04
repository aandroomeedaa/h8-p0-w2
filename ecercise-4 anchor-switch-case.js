var tanggal= ('30')// assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan= ('11')// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun= ('1990')// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
switch(bulan)
{ 
    case '1':
        {bulan = 'JANUARI';
        break;}
    case '2':
       {bulan = 'FEBRUARI';
        break;}
    case '3':
        {bulan = 'MARET';
        break;}
    case '4':
        {bulan = 'APRIL';
        break;}
    case '5':
        {bulan = 'MEI';
        break;}
    case '6':
        {bulan = 'JUNI';
        break;}
    case '7':
        {bulan = 'JULI';
        break}
    case '8':
        {bulan = 'AGUSTUS';
        break;}
    case '9':
        {bulan = 'SEPTEMBER';
        break;}
    case '10':
        {bulan = 'OKTOBER';
        break;}
    case '11':
        {bulan = 'NOVEMBER';
        break;}
    case '12':
        {bulan = 'DESEMBER';
        break;}
    default:
    {
      console.log('bulan tidak boleh kosong')
    }
}
console.log(tanggal+ ' ' + bulan +' ' + tahun )
