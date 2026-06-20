import { KNOWLEDGE_BASE, analyzeSymptoms } from './src/lib/knowledgeBase'; 

async function test() { 
  const desc = 'I am having high fever from past 2 days and severe body pain. My skin has also become rashes has come. I am feeling very tired fatigue'; 
  const res = await analyzeSymptoms(desc, [], 'Low'); 
  // We need to temporarily export score in analyzeSymptoms, or just log the whole object
  console.log(res.map((r: any) => r.name)); 
  process.exit(0);
} 
test();
