let girilenDerece=parseInt(prompt("Lütfen dönüştürmek istediğiniz fahrenheit derecesini giriniz ","100"));

let celciusDerece= (5/9) * (girilenDerece-32);

console.log("Verdiğiniz bilgilere göre girilen Fahrenheit'in : "+ girilenDerece +" Celcius değeri : " + celciusDerece.toFixed(2) +"'dir." );