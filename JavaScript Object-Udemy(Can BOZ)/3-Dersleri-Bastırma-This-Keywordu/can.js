let ogrenci={
    ad:'Caner',
    yas:29,
    email:'caner_kapisiz@hotmail.com',
    sinif:12,
    dersler:['matematik','fizik','kimya'],
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons()
    {
        console.log(this.dersler);
        // console.log(this);
        this.dersler.forEach(a =>{
            console.log(a);
        })
    }
};
// console.log(this);
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();
