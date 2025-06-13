const database = 'NURHIDAYANTI';
const collection = 'UAS';


use(database);


db.createCollection(collection);
db.produk.aggregate([
  { $match: { harga: { $gte: 3000 } } },
  { $group: { _id: null, totalStok: { $sum: "$stok" } } }
]);
