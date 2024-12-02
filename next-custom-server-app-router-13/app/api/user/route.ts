import { baseRouter } from "@/app/_middlewares";
import { userService } from "@/server/services";
import { NextRequest, NextResponse } from "next/server";

const router = baseRouter();

router.get(async (req, ctx) => {
  try {
    const user = await userService.getUsers();
    return NextResponse.json(
      {
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
});

router.post(async (req, ctx) => {
  try {
    const newUser = await req.json();

    const user = await userService.createUser(newUser);
    return NextResponse.json(
      {
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
});

export async function GET(request: NextRequest, ctx) {
  return router.run(request, ctx);
}

export async function POST(request: NextRequest, ctx) {
  return router.run(request, ctx);
}
