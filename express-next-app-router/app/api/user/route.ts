import { baseRouter } from "@/app/_middlewares";
import { NextRequest, NextResponse } from "next/server";

const router = baseRouter();

interface RequestContext {
  params: {
    id: string;
  };
}

const mockUsers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

router.get((req, ctx) => {
  try {
    return NextResponse.json(
      {
        data: mockUsers,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
});

router.post(async (req, ctx) => {
  try {
    const newUser = await req.formData();
    console.log({ newUser });

    mockUsers.push(newUser);
    return NextResponse.json(
      {
        data: mockUsers,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
});

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
