const database = 'NURHIDAYANTI';
const collection = 'UAS';


use(database);


db.createCollection(collection);

db.createCollection("pelanggan", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "email"],
      properties: {
        nama: {
          bsonType: "string",
          description: "harus string dan wajib"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description: "harus format email"
        }
      }
    }
  }
});
