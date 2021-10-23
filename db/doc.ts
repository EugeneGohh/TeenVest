import { Db } from "mongodb";
import { nanoid } from "nanoid";

export const getOneFile = async (db: Db, id: string) => {
  return db.collection("docs").findOne({ id: id });
};

export const createFile = async (
  db: Db,
  doc: { createdBy: string; folder: string; name: string; content?: any }
) => {
  const newDoc = await db
    .collection("folders")
    .insertOne({
      id: nanoid(12),
      ...doc,
      createdAt: new Date().toDateString(),
    })
    .then(({ ops }: any) => ops);

  return newDoc;
};
