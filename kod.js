var operatorler = ["/" , "*" , "+" ,"-"];
var opt = [];
sayiOpt1 = [];
var j=0;
var z;
var denklem ;

function ayirma(){
    denklem = document.getElementById("textview").value ;
    //  textview inputundaki değeri denklem değişkenine atıyor.

    uzunluk = denklem.length;               //  Denklem uzunluğunu belirleme
 /*-------------------------*******------------------------------------ */
    var toplam = denklem.split("+");        //  Her operatör tek tek dizilerden çıkarılıyor
    var cikar=String(toplam).split("-");
    var carp=String(cikar).split("*");
    var bol=String(carp).split("/");
    var sayilar= String(bol).split(",");  
                                            // Üstteki split metotlarında değerler "," ile ayrıldığı 
                                            // için sayıları belirlemek için ayırma operatörü olarak "," kullanıldı.
 /*-------------------------*******------------------------------------ */
    for(i=0;i<uzunluk;i++)
    {
        var x = denklem.charAt(i);              // Denklemin tüm elemanlarını tek tek bakıp
        var a = operatorler.indexOf(x);         // Operatörler dizisinde olanları a olarak alıyor. Mesela 36+3 denkleminde
                                                // i 0 ve 1 ken a nın değeri -1 oluyor. i 2 olduğunda ise a nın değeri + oluyor.
        if(a != -1)
        {  
            var b = operatorler[a];             // x değişkeni sırayla string deki elemanları kontrol ediyor. 
            sayiOpt1 +=sayilar[j]+" " + b+" ";  // a değeri x in ilk bulduğu işareti alıyor
            j++;                                // eğer a işaretse içeri giriyor ve sayılar dizisinin ilk elemanını sayiOpt1 e yazıyor.
                                                // bir adet boşluk(" ") bırakıyor, işaret yazılıyor ve tekrar " " bırakılıyor.
                                                // boşluk(" ") aşağıda sayı ve operatörleri birbirden ayırmada kolaylık sağlıyor.
                                                // j değeri arttırılıyor.(if fonksiyonu çalışmazsa j artmadığı için sonraki sayıya geçilmiyor.)    
        }       
    }
    sayiOpt1 += sayilar[j];                     // ** en sondaki sayıyı ekleme(döngü dışında kaldığı için)
    var sayiOpt2 = sayiOpt1.split(" ");         // sayiOpt1 i diziye çevirme. Boşluk ayraç olarak kullanldı.

    if(sayiOpt2[0]=="")//Denkleme işaretle başlanırsa yapılacaklar
    {
    //  ilk eleman işaret olursa veya 2 işaret peş peşe gelirse üstteki döngüden dolayı 2 tane "" peş peşe geliyor.

        if(sayiOpt2[1]=="-") // "-" ile başlanırsa 
        {
            sayiOpt2[2] = sayiOpt2[1]+sayiOpt2[2];
            // Dizinin 0. elemanı "" geldiği için 1. eleman olan "-" ve 2. eleman birleştirilip 2. elemana yazılıyor.
            //                                                          1. elemana yazılsaydı 2. eleman boş kalırdı.
            sayiOpt2.splice(0,2);
            //  0. Elemandan başla 2. ye kadar sil(2 dahil değil)
        }
        else // Diğer işaretlerle başlanırsa olacaklar
        {
            alert("İşaret hatası düzeltildi. İlk sayı sadece '-' işaretiyle başlayabilir!");
            sayiOpt2.splice(0,2); //    0. Elemandan başla 2. ye kadar sil(2 dahil değil)
        }       
    }
    if(sayiOpt2.indexOf("") != -1) // 2 operatör yan yana gelirse
    {
        sayiOpt1=[];        // İşlem başlamadığı için
        sayiOpt2=[""];      // Dışarda tanımlanan tüm değişkenler sıfırlanıyor.
        opt = [];           // Sıfırlanmazsa, fonksiyon çalıştığında
        j=0;                // Eski değerleri de gördüğü için
        z=0;                // Hata veriyor.
        denklem=0;
        alert("2 operatör yan yana gelemez!"); // Tarayıca Bildirim gösterme
    }
    else
    {
        console.log(sayiOpt2);  //Denklemin dizi halini yazdırma
        console.log(denklem);   //Denklemin başlangıç halini yazdırma
        console.log("--------------------------------------------------------");

        while(z != 1) //Denklemin uzunluğu 1 olana kadar dön(her işlemden sonra z güncelleniyor.)
        {
            /*  sayiOpt2.filter(x =>x=="/").length;(Kullanılmadı açıklama altta)
                Dizide hangi elemandan kaç tane olduğunu bulmak için kullanılıyor. */

            sayiOpt2.forEach(islem);    //  sayiOpt2 dizisinin her bir elemanı için islem fonksiyonunu çalıştır.
            function islem(item,index){ //  döngünün olduğu yer(index) ve olduğu yerdeki(index) eleman
                
                if(item == "/")
                {        
                    index = sayiOpt2.indexOf(item); // Bölmede her zaman soldan başlaması için
                                                    // ilk "/" işareti olan yere gidiyor.
                                                    // indexOf metodu soldan ilk gördüğünü alır.
                                                    // sağdan bakması için lastIndexOf() kullanılabilir.

                    console.log("Bölme İşlemi");
                    var s1 = parseFloat(sayiOpt2[index-1]); //Birinci sayının yeri
                    var s2 = parseFloat(sayiOpt2[index+1]); //İkinci  sayının yeri
                    var snc = s1/s2;                        //İşlem

                    sayiOpt2.splice(index-1,3,String(snc)); 
                    //İşlemi yapılan sayıları ve operatörü silip sonucu yazma
                    
                    console.log((index-1)+"." + " ve " + (index+1)+"." + " arasında yapılan işlemin Sonucu :" + index + ". elemana yazıldı");
                    /* Konsol ekranında dizinin eleman yerlerini görebilmek için yazıldı */

                    console.log("    "+"Yapılan İşlem : "+s1+"/"+s2 + " Sonucu :" + snc);
                    /* Konsol ekranında yapılan işlemi daha iyi görebilmek için yazıldı */
                                       
                    console.log(sayiOpt2);
                    /* Konsol ekranında dizinin yeni halini görebilmek için yazıldı */

                    z = sayiOpt2.length; // z nin değerinin güncellenmesi

                    console.log("------------------------");
                } 
                else if(item == "*" && sayiOpt2.indexOf("/") == -1)
                //  Çarpmanın bölmeden önce yapıldığı bazı durumlarda hata veriyor.
                //  indexOf herhangi bir konum bulamazsa "-1" değeri döndürüyor.
                {                         
                    console.log("Çarpma İşlemi");
                    var s1 = parseFloat(sayiOpt2[index-1]); //  Birinci sayının yeri
                    var s2 = parseFloat(sayiOpt2[index+1]); //  İkinci  sayının yeri
                    var snc = s1*s2;                        //  İşlem

                    sayiOpt2.splice(index-1,3,String(snc)); 
                    //  İşlemi yapılan sayıları ve operatörü silip sonucu yazma

                    console.log((index-1)+"." + " ve " + (index+1)+"." + " arasında yapılan işlemin Sonucu :" + index + ". elemana yazıldı");
                    /* Konsol ekranında dizinin eleman yerlerini görebilmek için yazıldı */

                    console.log("    "+"Yapılan İşlem : "+s1+"*"+s2 + " Sonucu :" + snc);
                    /* Konsol ekranında yapılan işlemi daha iyi görebilmek için yazıldı */
              
                    console.log(sayiOpt2);
                    /* Konsol ekranında dizinin yeni halini görebilmek için yazıldı */

                    z = sayiOpt2.length; // z nin değerinin güncellenmesi

                    console.log("------------------------");
                }
                else if(item == "+" && sayiOpt2.indexOf("/") == -1 && sayiOpt2.indexOf("*") == -1)
                //indexOf herhangi bir konum bulamazsa "-1" değeri döndürüyor. Bu yüzden Çarpma ve bölge bitince buna geçiyor.
                {                   
                    console.log("Toplama İşlemi");
                    var s1 = parseFloat(sayiOpt2[index-1]); //Birinci sayının yeri
                    var s2 = parseFloat(sayiOpt2[index+1]); //İkimci  sayının yeri
                    var snc =  s1+s2;                       //İşlem

                    sayiOpt2.splice(index-1,3,String(snc)); 
                    //İşlemi yapılan sayıları ve operatörü silip sonucu yazma

                    console.log((index-1)+"." + " ve " + (index+1)+"." + " arasında yapılan işlemin Sonucu :" + index + ". elemana yazıldı");
                    /* Konsol ekranında dizinin eleman yerlerini görebilmek için yazıldı */

                    console.log("    "+ "Yapılan İşlem : "+s1+"+"+s2 + " Sonucu :" + snc);
                    /* Konsol ekranında yapılan işlemi daha iyi görebilmek için yazıldı */

                    console.log(sayiOpt2);
                    /* Konsol ekranında dizinin yeni halini görebilmek için yazıldı */

                    z = sayiOpt2.length; // z nin değerinin güncellenmesi

                    console.log("------------------------");
                }
                else if(item == "-" && sayiOpt2.indexOf("/") == -1 && sayiOpt2.indexOf("*") == -1)
                //indexOf herhangi bir konum bulamazsa "-1" değeri döndürüyor. Bu yüzden Çarpma ve bölge bitince buna geçiyor.
                {
                    index = sayiOpt2.indexOf(item); //  Çıkarmada her zaman soldan başlaması için
                                                    //  ilk "-" işareti olan yere gidiyor.
                                                    //  indexOf metodu soldan ilk gördüğünü alır.
                                                    //  sağdan bakması için lastIndexOf() kullanılabilir.

                    console.log("Çıkarma İşlemi");
                    var s1 = parseFloat(sayiOpt2[index-1]); //Birinci  sayının yeri
                    var s2 = parseFloat(sayiOpt2[index+1]); //İkinci   sayının yeri
                    var snc =  s1-s2;                       //İşlem
                    
                    sayiOpt2.splice(index-1,3,String(snc)); 
                    //İşlemi yapılan sayıları ve operatörü silip sonucu yazma

                    console.log((index-1)+"." + " ve " + (index+1)+"." + " arasında yapılan işlemin Sonucu :" + index + ". elemana yazıldı");
                    /* Konsol ekranında dizinin eleman yerlerini görebilmek için yazıldı */

                    console.log("    "+ "Yapılan İşlem : "+s1+"-"+s2 + " Sonucu :" + snc);
                    /* Konsol ekranında yapılan işlemi daha iyi görebilmek için yazıldı */

                    console.log(sayiOpt2);
                    /* Konsol ekranında dizinin yeni halini görebilmek için yazıldı */

                    z = sayiOpt2.length; // z nin değerinin güncellenmesi

                    console.log("------------------------");
                }
            }
        }
        // Denklem sonucunun virgülden sonraki 6 basamağını almak için kullanılıyor.
        var num = Number(sayiOpt2[0]);          // The Number() only visualizes the type and is not needed
        var roundedString = num.toFixed(6);
        var rounded = Number(roundedString);    // toFixed() returns a string (often suitable for printing already)
        
        // Konsol ekranını görmek için tarayıcıdayken tıklanıp incele seçilir. Açılan ekrandan "console" seçilir
        console.log("Denklem :" + denklem);                     //  Denklemi konsol ekranında gösteriyor.
        console.log("İşlem Sonucu :"+ sayiOpt2[0]);             //  Sonucun tam halini konsol gösteriyor.
        console.log("Yuvarlanmış hali :"+rounded);              //  Yuvarlanmış halini(virgülden sonra 6 basamak) gösteriyor
        document.getElementById("textview").value = rounded;    //  Sonucu textviwe geri gönderiyor.

        sayiOpt1=[];        //  Birden fazla
        sayiOpt2=[];        //  İşlem için
        opt = [];           //  Denklem
        j=0;                //  Çözüme Ulaşınca
        z =0;               //  Değişkenleri Sıfırlamak
        denklem=0;          //  Gerekiyor
    }
}
function insert(num){ //Her bir butuna tıklandığında yapılacak işlem
    document.form.textview.value = document.form.textview.value + num;
}
function clean(){ // Silme "C" butonuna tıklanınca yapılacak işlem.
    document.form.textview.value="";
    sayiOpt1=[];
    sayiOpt2=[];
    opt = [];
    j=0;
    z =0;
    denklem=0;

}
function back(){ // Geri "<" butonuna tıklanınca yapılacak işlem.
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

//  Yukardaki ayirma() fonksiyonundaki tüm işlemleri bu kod satırı yapabilir :)
//  Çalışması için html dosyasında = butonuna ayirma() yerine equal() yazılmalı
//  ve fonksiyonun alt ve üstündeki /* */ işaretleri kaldırılmalı
/*
function equal(){
    var exp = document.form.textview.value;
    if(exp)
    {
        document.form.textview.value=eval(exp);
    }
}
*/ 
