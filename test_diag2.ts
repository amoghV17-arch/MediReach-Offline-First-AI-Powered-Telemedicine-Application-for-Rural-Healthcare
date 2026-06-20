import { KNOWLEDGE_BASE, analyzeSymptoms } from './src/lib/knowledgeBase'; 

async function test() { 
  const res1 = await analyzeSymptoms('i have high fever', [], 'Low'); 
  console.log('fever:', res1.map((r: any) => r.name)); 

  const res2 = await analyzeSymptoms('my stomach hurts', [], 'Low'); 
  console.log('stomach:', res2.map((r: any) => r.name)); 
  
  process.exit(0);
} 
test();
