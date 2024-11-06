console.log('Merhaba Dünya');

let email ="caner_kapisiz@hotmail.com";
console.log(email);

//Birleştirme

let ad = "Caner";
let soyad ="Kapısız";
let adSoyad= ad + " " +soyad;
console.log(adSoyad);

//Karakterleri Çekme

console.log(adSoyad[2]);

//Kaç Karakter

console.log(adSoyad.length);
// if(adSoyad.length > 0)
// {
// }

//Methodlar

console.log(adSoyad.toUpperCase());
let kucukAdSoyad=adSoyad.toLocaleLowerCase();
console.log(kucukAdSoyad);
console.log(adSoyad);

let index=adSoyad.indexOf('B');
console.log("K nin bulundugu index:" +index);