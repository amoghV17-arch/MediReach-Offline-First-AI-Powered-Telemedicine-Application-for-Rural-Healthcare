import { KNOWLEDGE_BASE, analyzeSymptoms } from './src/lib/knowledgeBase'; 
import { db } from './src/lib/db';

async function test() { 
  const res = await analyzeSymptoms('high fever, joint pain, muscle aches, behind eyes pain, nausea, rash', [], 'Low'); 
  console.log(res.map((r: any) => r.name)); 
  process.exit(0);
} 
test();
