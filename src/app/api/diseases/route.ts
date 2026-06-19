import { NextResponse } from 'next/server';
import { KNOWLEDGE_BASE } from '@/lib/knowledgeBase';
import { EXPANDED_DISEASES } from '@/lib/seeds/diseases';

/**
 * GET /api/diseases
 * Serves the complete list of base + expanded diseases for over-the-air catalog updates.
 */
export async function GET() {
  // Ensure every disease has a catalog version (default to 1 if not specified)
  const baseWithVersion = KNOWLEDGE_BASE.map(d => ({ ...d, catalogVersion: 1 }));
  const expandedWithVersion = EXPANDED_DISEASES.map(d => ({ ...d, catalogVersion: d.catalogVersion || 1 }));
  
  const allDiseases = [...baseWithVersion, ...expandedWithVersion];

  return NextResponse.json({
    success: true,
    version: 1, // Current global catalog version
    count: allDiseases.length,
    diseases: allDiseases,
  });
}
