import React, { useState } from 'react';
import { Shield, Heart } from 'lucide-react';
import { questions } from './data/questions';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResult } from './components/QuizResult';
import { ImageCarousel } from './components/ImageCarousel';
import { QuizAnswer, Option } from './types';
import { analyzeProfile } from './utils/profileAnalyzer';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedOption
    };

    const updatedAnswers = [...answers];
    const existingAnswerIndex = updatedAnswers.findIndex(a => a.questionId === currentQuestion.id);
    
    if (existingAnswerIndex >= 0) {
      updatedAnswers[existingAnswerIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }

    setAnswers(updatedAnswers);

    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Check if we have an answer for the next question
      const nextQuestionAnswer = updatedAnswers.find(a => a.questionId === questions[currentQuestionIndex + 1].id);
      setSelectedOption(nextQuestionAnswer?.selectedOption || null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevQuestionAnswer = answers.find(a => a.questionId === questions[currentQuestionIndex - 1].id);
      setSelectedOption(prevQuestionAnswer?.selectedOption || null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  // Imagens do carrossel - você pode substituir por suas próprias imagens
  const carouselImages = [
    'https://i.imgur.com/pRCR15w.png',
    'https://i.imgur.com/MkpRJMq.png',
    'https://i.imgur.com/PHx59UJ.png'
  ];
  if (showResult) {
    const profile = analyzeProfile(answers);
    return (
      <QuizResult profile={profile} onRestart={handleRestart} />
    );
  }

  if (!quizStarted) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://i.imgur.com/fMojOrH.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-[#2D2419]/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6">
            <h1 className="text-3xl font-bold text-white mb-3">
              Quiz Espiritual
            </h1>
            <h2 className="text-xl text-[#8B6B47] mb-4">
              Quaresma de São Miguel Arcanjo
            </h2>
            
            {/* Image Carousel */}
            <ImageCarousel images={carouselImages} />
            
            <p className="text-base text-white mb-6 leading-relaxed">
              receba orientações personalizadas para uma 
              Quaresma mais profunda e transformadora com a proteção do Arcanjo Miguel e receba um bônus especial por participar desse desafio
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-[#B8472F]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg font-bold text-[#B8472F]">15</span>
                </div>
                <p className="text-xs text-[#8B6B47] font-medium">Perguntas Simples</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#B8472F]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg font-bold text-[#B8472F]">5-7</span>
                </div>
                <p className="text-xs text-[#8B6B47] font-medium">Minutos</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#B8472F]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-5 h-5 text-[#B8472F]" />
                </div>
                <p className="text-xs text-[#8B6B47] font-medium">Bônus Especial</p>
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="bg-[#B8472F] hover:bg-[#A03B26] text-white font-bold text-base px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Começar Desafio
            </button>
          </div>

          <p className="text-sm text-white/80 italic backdrop-blur-sm bg-black/20 rounded-lg px-4 py-2">
            "São Miguel Arcanjo, defendei-nos no combate..."
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen py-8 px-4"
      style={{
        backgroundImage: 'url(https://i.imgur.com/fMojOrH.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <QuizQuestion
        question={currentQuestion}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

export default App;