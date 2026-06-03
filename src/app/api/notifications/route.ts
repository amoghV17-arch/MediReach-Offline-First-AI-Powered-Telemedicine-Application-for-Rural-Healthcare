import { NextRequest, NextResponse } from 'next/server';

/**
 * GET  /api/notifications?userId=1 — fetch notifications
 * PATCH /api/notifications — mark as read
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'userId required' }, { status: 400 });
  }

  // In production: fetch from DB. Here we return empty (client reads from Dexie directly)
  return NextResponse.json({ success: true, notifications: [] });
}

export async function PATCH(req: NextRequest) {
  try {
    const { id } = await req.json();
    return NextResponse.json({ success: true, marked: id });
  } catch {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
