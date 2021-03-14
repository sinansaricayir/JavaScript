let saniyestring=prompt(" İstediğiniz saniyeyi girin ve kaç dk kaç saniye olduğunu görün ", 100);

let saniye=parseInt(saniyestring);

let dakika=parseInt((saniye / 60),10);

let kalanSaniye=saniye % 60;

console.log(`Girdiğiniz rakama göre kalan dakika : ${dakika} ve kalan saniye : ${kalanSaniye}'dir.`);







