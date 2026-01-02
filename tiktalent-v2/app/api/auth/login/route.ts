import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Demo users - vervang later met database
const DEMO_USERS = [
  {
    id: '1',
    email: 'demo@tiktalent.nl',
    password: 'demo123',
    name: 'Demo Bedrijf',
    company: 'Demo BV',
  },
  {
    id: '2', 
    email: 'tim@tiktalent.nl',
    password: 'admin123',
    name: 'Tim',
    company: 'TikTalent',
    isAdmin: true,
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Find user
    const user = DEMO_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: 'Ongeldige inloggegevens' },
        { status: 401 }
      );
    }

    // Create session token (simple version - use JWT in production)
    const sessionData = {
      id: user.id,
      email: user.email,
      name: user.name,
      company: user.company,
      isAdmin: user.isAdmin || false,
    };

    const sessionToken = Buffer.from(JSON.stringify(sessionData)).toString('base64');

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        company: user.company,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis' },
      { status: 500 }
    );
  }
}
