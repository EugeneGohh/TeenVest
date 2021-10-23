import { Db, MongoClient } from "mongodb";

let uri: any = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

let cachedClient;
let cachedDb;

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
};

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

export async function connectToDB() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, config);
  const db: Db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
