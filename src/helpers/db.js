import path from "path";
import fs from "fs";

const datap = path.join(process.cwd(), "/src/database/db.json");

export const getDataFromDB = () => {
  try {
    const db = fs.readFileSync(datap, "utf-8");
    const datafromDB = JSON.parse(db);
    console.log("===> db", db);
    return datafromDB;
  } catch (error) {
    throw new Error(error);
  }
};

export const writeDataFromDB = (userData) => {
  try {
    const currentData = getDataFromDB();
    const updatedData = JSON.parse(JSON.stringify(currentData));
    updatedData.users.push(userData);

    fs.writeFileSync(datap, JSON.stringify(updatedData, null, 4));

    return updatedData;
  } catch (error) {
    throw new Error(error);
  }
};

export const findDataInDB = (query) => {
  try {
    const currenData = getDataFromDB();
    return currenData.users.find((x) => {
      if (x.title == query) {
        return true;
      } else if (x.description == query) {
        return true;
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};
