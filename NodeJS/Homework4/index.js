const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Arin", "age": 6}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("VERİ OLUŞTURULDU")
});


fs.readFile('employees.json', 'utf8', (err, data) => { 
    if (err) console.log(err);
    console.log("DOSYA  OKUNDU")
    console.log(data); 

}) 

                                
fs.appendFile('employees.json', '\n {"name": "Employee 2 Name", "salary": 3000} ', 'utf8', (err) => {
    if (err) console.log(err);
    console.log("YENİ VERİ OLUŞTURULDU")
});

//  fs.unlink('employees.json', (err) => {
//      if (err) console.log(err)
//      console.log("DOSYA  SİLİNDİ")
//  });