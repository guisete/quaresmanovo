import { QuizAnswer, SpiritualProfile } from '../types';

export function analyzeProfile(answers: QuizAnswer[]): SpiritualProfile {
  const categoryScores = {
    protection: 0,
    faith: 0,
    peace: 0,
    growth: 0
  };

  let totalScore = 0;
  let commitmentScore = 0;

  answers.forEach((answer, index) => {
    const weight = answer.selectedOption.weight;
    const category = answer.selectedOption.category;
    
    categoryScores[category] += weight;
    totalScore += weight;

    // Questions 2, 3, 10, 15 são mais relacionadas ao compromisso
    if ([2, 3, 10, 15].includes(index + 1)) {
      commitmentScore += weight;
    }
  });

  // Determinar necessidade primária e secundária
  const sortedCategories = Object.entries(categoryScores)
    .sort(([,a], [,b]) => b - a)
    .map(([category]) => category as keyof typeof categoryScores);

  const primaryNeed = sortedCategories[0];
  const secondaryNeed = sortedCategories[1];

  // Determinar nível espiritual baseado na pontuação total
  const averageScore = totalScore / answers.length;
  let spiritualLevel: 'iniciante' | 'praticante' | 'avançado';
  
  if (averageScore >= 3.5) {
    spiritualLevel = 'avançado';
  } else if (averageScore >= 2.5) {
    spiritualLevel = 'praticante';
  } else {
    spiritualLevel = 'iniciante';
  }

  // Determinar nível de compromisso
  const averageCommitment = commitmentScore / 4;
  let commitment: 'baixo' | 'medio' | 'alto';
  
  if (averageCommitment >= 3.5) {
    commitment = 'alto';
  } else if (averageCommitment >= 2.5) {
    commitment = 'medio';
  } else {
    commitment = 'baixo';
  }

  return {
    primaryNeed,
    secondaryNeed,
    spiritualLevel,
    commitment
  };
}