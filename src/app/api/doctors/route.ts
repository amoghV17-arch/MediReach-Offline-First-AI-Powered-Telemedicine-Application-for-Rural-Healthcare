import { NextRequest, NextResponse } from 'next/server';
import { searchDoctors } from '@/lib/doctors';

/**
 * GET /api/doctors?specialty=Cardiologist&city=Mumbai
 * Returns filtered list of available doctors.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const specialty = searchParams.get('specialty') ?? undefined;
  const city = searchParams.get('city') ?? undefined;

  const doctors = searchDoctors(specialty, city);

  return NextResponse.json({
    success: true,
    count: doctors.length,
    doctors,
  });
}
