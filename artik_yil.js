let girilenYil = parseInt( prompt ( "Artık yıl olup olmadığını öğrenmek istediğiniz yılı giriniz ..." , "2020" ) );

let artikYilMi =  ( ( (girilenYil % 400) == 0 ) || (girilenYil %4 == 0 && girilenYil % 100 != 0 ) );

console.log("Girdiğiniz yıl " + girilenYil + " Ve artik mı değil mi sorusuna ise yanıt : " + artikYilMi );