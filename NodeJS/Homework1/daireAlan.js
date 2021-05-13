let yariCap=window.prompt("Dairenin yarıçapını giriniz...")
const pi=Math.PI
let hesap=(yariCap*yariCap)*pi;

var sonuc =hesap.toFixed(2);

console.log(`Yarıçapı ${yariCap } olan dairenin alanı: ${sonuc}`)