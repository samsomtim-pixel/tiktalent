import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('session');

    if (!session) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const userData = JSON.parse(Buffer.from(session.value, 'base64').toString());

    return NextResponse.json({ user: userData });
  } catch (error) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
