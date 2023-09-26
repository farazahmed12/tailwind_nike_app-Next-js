import { NextResponse } from "next/server";
import { getDataFromDB, writeDataFromDB } from "../../../helpers/db";

export const POST = async (req) => {
  const data = await req.json();
  const userData = writeDataFromDB(data);

  const res = NextResponse.json({ userData });
  return res;
};
