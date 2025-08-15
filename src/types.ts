export interface Question {
  id: number;
  title: string;
  question: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  weight: number;
  category: 'protection' | 'faith' | 'peace' | 'growth';
}

export interface QuizAnswer {
  questionId: number;
  selectedOption: Option;
}

export interface SpiritualProfile {
  primaryNeed: 'protection' | 'faith' | 'peace' | 'growth';
  secondaryNeed: 'protection' | 'faith' | 'peace' | 'growth';
  spiritualLevel: 'iniciante' | 'praticante' | 'avançado';
  commitment: 'baixo' | 'medio' | 'alto';
}