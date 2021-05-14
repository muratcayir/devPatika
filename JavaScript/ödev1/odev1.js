const name = ()=>
{

    let name=prompt("Adınızı giriniz :")

    let sorgu = document.getElementById("name")
    
    sorgu.innerHTML=`${name}`
}

name()


const day = () => {

    var days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    
    document.getElementById("date").innerHTML = days[new Date().getDay()-1];
}

day();

let saat = ()=>
{
    let simdi = new Date().toLocaleTimeString()

    let saatSimdi =document.getElementById("clock")
    
    saatSimdi.innerHTML=`${simdi}`;
}

setInterval(saat,1000);