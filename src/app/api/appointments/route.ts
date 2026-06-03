import { NextRequest, NextResponse } from 'next/server';

// In-memory store for demo (production would use a real DB)
const appointmentsStore: Record<string, unknown>[] = [];

/**
 * POST /api/appointments — create appointment
 * GET  /api/appointments?userId=1 — list appointments
 * PATCH /api/appointments — update status
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const appt = {
      ...body,
      serverTimestamp: new Date().toISOString(),
      confirmed: true,
    };
    appointmentsStore.push(appt);

    console.log('[APPT] Created:', appt.doctorName, appt.slot);

    return NextResponse.json({
      success: true,
      appointment: appt,
      meetingLink: `https://meet.medireach.in/room/${Math.random().toString(36).slice(2, 10)}`,
      message: `Appointment with ${appt.doctorName} confirmed for ${new Date(appt.slot).toLocaleString('en-IN')}.`,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'userId required' }, { status: 400 });
  }

  const userAppts = appointmentsStore.filter(
    (a: Record<string, unknown>) => String(a.userId) === userId
  );

  return NextResponse.json({ success: true, appointments: userAppts });
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();

    const appt = appointmentsStore.find((a: Record<string, unknown>) => a.id === id);
    if (appt) {
      appt.status = status;
    }

    return NextResponse.json({ success: true, updated: { id, status } });
  } catch (err) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
