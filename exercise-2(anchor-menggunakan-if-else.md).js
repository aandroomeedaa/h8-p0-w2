var nama = 'andromeda'
var peran = 'Ksatria'

console.log('Selamat datang di Dunia Proxytia, ' +nama)
if (nama==='' && peran==='') 
{
  console.log('Halo Player silahkan mengisi Nama dan peran anda untuk melanjutkan permainan ')
}
else if (peran==='')
{
  
  console.log('halo '+ nama + ' silahkan mengisi peran untuk memulai permainan')
}
else if(peran==='Ksatria')
{
    console.log('halo Ksatria '+ nama +' kamu dapat menyerang dengan senjatamu!' )
}
else if(peran==='Tabib')
{
  console.log('halo Tabib '+ nama +' kamu akan membantu temanmu yang terluka.')
}
else if(peran==='Penyihir')
{
  console.log('Halo Penyihir '+ nama + ' kamu akan membantu temanmu yang terluka.')
}
else
{
  console.log('silahkan memulai kembali permainan ini' ) 
}
