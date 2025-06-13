const database = 'NURHIDAYANTI';
const collection = 'UAS';


use(database);


db.createCollection(collection);
db.produk.deleteOne({ nama: "Pulpen" });
