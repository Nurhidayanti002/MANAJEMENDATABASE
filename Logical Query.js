const database = 'NURHIDAYANTI';
const collection = 'UAS';


use(database);


db.createCollection(collection);

db.produk.find({
  $and: [
    { harga: { $gt: 3000 } },
    { stok: { $lte: 150 } }
  ]
});
