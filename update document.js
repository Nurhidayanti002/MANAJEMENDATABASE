const database = 'NURHIDAYANTI';
const collection = 'UAS';


use(database);


db.createCollection(collection);

db.produk.updateOne(
    { nama: "Pulpen" },
    { $set: { harga: 3500 } }
);
