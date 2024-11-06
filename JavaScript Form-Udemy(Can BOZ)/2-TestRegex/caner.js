
const username='111canerkpsz';
const pattern=/^[a-z]{6,12}$/;

// let sonuc=pattern.test(username);
// // console.log(sonuc);

// if(sonuc)
// {
//     console.log('Başarılı');

// }
// else
// {
//     console.log('Başarısız');
// }


let sonuc=username.search(pattern);
console.log(sonuc);