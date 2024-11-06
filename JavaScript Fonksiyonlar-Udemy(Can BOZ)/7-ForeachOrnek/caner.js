const ulum=document.querySelector('.main');

let ogrencilerim = ['caner', 'hakan', 'elif', 'tuba'];

let html=``;

ogrencilerim.forEach(ogrenci =>{
    html +=`<li>${ogrenci}</li>`
})

console.log(html);

ulum.innerHTML=html;