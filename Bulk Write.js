const database = 'NURHIDAYANTI';
const collection = 'UAS';


use(database);


db.createCollection(collection);

db.produk.bulkWrite([
  { insertOne: { document: { nama: "Penghapus", harga: 2000, stok: 50 } } },
  { updateOne: { filter: { nama: "Buku Tulis" }, update: { $inc: { stok: 20 } } } },
  { deleteOne: { filter: { nama: "Pulpen" } } }
]);
