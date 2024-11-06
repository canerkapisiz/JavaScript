const icerik =document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('caner');
icerik.classList.remove('error');


const pDegeri=document.querySelectorAll('p');

pDegeri.forEach(caner => {
    if(caner.textContent.includes('error'))
    {
        caner.classList.add('error');
    }
    if(caner.textContent.includes('success'))
    {
        caner.classList.add('success');
    }
});