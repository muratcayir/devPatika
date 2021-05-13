let name=prompt("Adınızı giriniz :")

let sorgu = document.querySelector("#myName")

sorgu.innerHTML=` ${name}`


function saatFunc()
{
    var sonuc = new Array(3);
    var simdi = new Date();
    
    sonuc[0] = simdi.getHours();
    sonuc[1] = simdi.getMinutes();
    sonuc[2] = simdi.getSeconds();

    for(i = 0;i < 3;i++)
        sonuc[i] = sonuc[i] < 10 ? '0' + sonuc[i] : sonuc[i];
    
    return sonuc;  
}

function saatGoster()
{
    saat = saatFunc();
    document.write("saatFunc : " + saat[0] + "/" + saat[1] + "/" + saat[2] + "<br/>");
    var saat = document.getElementById("myClock");
	saat.innerHTML = verSaat();
}

saatGoster();

setInterval("saatGoster()", 1000);


