const database = 'NURHIDAYANTI';
const collection = 'UAS';


use(database);


db.createCollection(collection);

db.produk.find({ harga: { $gt: 4000 } }); // Produk dengan harga lebih dari 4000
