import React from 'react';
import { Question, Option } from '../types';
import { Shield } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  selectedOption: Option | null;
  onSelectOption: (option: Option) => void;
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function QuizQuestion({ 
  question, 
  selectedOption, 
  onSelectOption, 
  currentQuestion, 
  totalQuestions,
  onNext,
  onPrevious
}: QuizQuestionProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="max-w-lg mx-auto bg-[#2D2419]/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 transition-all duration-500 ease-in-out">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[#8B6B47] font-medium">
            Pergunta {currentQuestion} de {totalQuestions}
          </span>
          <span className="text-sm text-[#8B6B47] font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-black/20 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-[#B8472F] to-[#D4634A] h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Header */}
      <div className="text-center mb-6">
        <h2 className="text-sm uppercase tracking-wider text-[#8B6B47] font-medium mb-2">
          {question.title}
        </h2>
        <h3 className="text-xl font-bold text-white leading-tight">
          {question.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-2 mb-6">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option)}
            className={`w-full p-3 text-left rounded-lg border-2 transition-all duration-200 ${
              selectedOption?.id === option.id
                ? 'border-[#B8472F] bg-[#B8472F]/20 shadow-md'
                : 'border-[#8B6B47]/30 hover:border-[#B8472F]/50 hover:bg-[#B8472F]/10'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border-2 mr-4 flex-shrink-0 ${
                selectedOption?.id === option.id
                  ? 'border-[#B8472F] bg-[#B8472F]'
                  : 'border-[#8B6B47]'
              }`}>
                {selectedOption?.id === option.id && (
                  <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                )}
              </div>
              <span className="text-white font-medium text-sm">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          disabled={currentQuestion === 1}
          className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            currentQuestion === 1
              ? 'bg-black/20 text-[#8B6B47] cursor-not-allowed'
              : 'bg-[#8B6B47] text-white hover:bg-[#756049]'
          }`}
        >
          Anterior
        </button>
        
        <button
          onClick={onNext}
          disabled={!selectedOption}
          className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            selectedOption
              ? 'bg-[#B8472F] text-white hover:bg-[#A03B26] shadow-md'
              : 'bg-black/20 text-[#8B6B47] cursor-not-allowed'
          }`}
        >
          {currentQuestion === totalQuestions ? 'Ver Resultado' : 'Próxima'}
        </button>
      </div>
    </div>
  );
}