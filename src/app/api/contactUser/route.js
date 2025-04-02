import { dbConnect } from "../../../lib/dbConnect";
import { Message } from "../../../lib/models/Message";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect(); // Connect to DB

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}