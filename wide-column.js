
use('widecolumn_demo')

db.user_profiles.drop();

db.user_profiles.insertMany([
  {
    _id: "row1",
    personal : { first_name: "Ali",   last_name: "Rahman",   gender: "M"          },
    contact  : { email: "ali@example.com",   phone: "0812‑1111‑1111"              },
    stats    : { last_login: new Date("2025‑06‑18"), points: 120, tier: "silver" }
  },
  {
    _id: "row2",
    personal : { first_name: "Budi",  last_name: "Saputra",  birth_year: 2000     },
    contact  : { email: "budi@example.com"                                               },
    stats    : { last_login: new Date("2025‑06‑19"), points: 450, tier: "gold"   }
  },
  {
    _id: "row3",
    personal : { first_name: "Citra", last_name: "Wijaya",   gender: "F"          },
    contact  : { email: "citra@example.com",  phone: "0813‑2222‑2222", city: "Bandung" },
    stats    : { last_login: new Date("2025‑06‑17"), points:  80 }
  },
  {
    _id: "row4",
    personal : { first_name: "Dewi",  last_name: "Indah"                          },
    contact  : { email: "dewi@example.com",   city: "Yogyakarta"                 },
    stats    : { last_login: new Date("2025‑06‑16"), points: 300, tier: "gold"   }
  },
  {
    _id: "row5",
    personal : { first_name: "Eka",   last_name: "Pratama"                        },
    contact  : { email: "eka@example.com",    phone: "0814‑3333‑3333"             },
    stats    : { last_login: new Date("2025‑06‑15"), points:  50                 }
  }
]);

db.user_profiles.find().forEach(doc => printjson(doc));

