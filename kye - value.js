
use('pembeli_keyvalue')

db.pembeli.drop();

db.pembeli.insertMany([
  {
    _id: "P001",
    value: { nama: "Andi",  email: "andi@example.com",  kota: "Jakarta",   saldo: 150000 }
  },
  {
    _id: "P002",
    value: { nama: "Budi",  email: "budi@example.com",  kota: "Surabaya",  saldo: 200000 }
  },
  {
    _id: "P003",
    value: { nama: "Citra", email: "citra@example.com", kota: "Bandung",   saldo: 175000 }
  },
  {
    _id: "P004",
    value: { nama: "Dewi",  email: "dewi@example.com",  kota: "Yogyakarta",saldo: 225000 }
  },
  {
    _id: "P005",
    value: { nama: "Eka",   email: "eka@example.com",   kota: "Medan",     saldo: 190000 }
  }
]);


db.pembeli.find().forEach(doc => printjson(doc));

