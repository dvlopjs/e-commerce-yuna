import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcrypt";
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const findName = await db.user.findUnique({
      where: {
        name: data.name,
      },
    });

    const findEmail = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (findName) {
      return NextResponse.json(
        {
          error: "Ya existe un usuario creado con ese nombre.",
        },
        { status: 400 }
      );
    }

    if (findEmail) {
      return NextResponse.json(
        {
          error: "Ya existe un usuario creado con ese email.",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });
    const { password: _, ...user } = newUser;

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ocurrió un error al registrar al usuario" },
      { status: 500 }
    );
  }
}
