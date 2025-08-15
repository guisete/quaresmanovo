import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    title: "Maior Desejo Espiritual",
    question: "Qual é o seu maior desejo espiritual neste momento?",
    options: [
      { id: "1a", text: "Ter mais proteção espiritual", weight: 4, category: "protection" },
      { id: "1b", text: "Me sentir mais próximo(a) de Deus", weight: 4, category: "faith" },
      { id: "1c", text: "Vencer desafios e provações", weight: 3, category: "growth" },
      { id: "1d", text: "Ter paz interior todos os dias", weight: 4, category: "peace" }
    ]
  },
  {
    id: 2,
    title: "Vida de Oração",
    question: "Com qual frequência você reza ou medita?",
    options: [
      { id: "2a", text: "Todos os dias", weight: 4, category: "faith" },
      { id: "2b", text: "Algumas vezes por semana", weight: 3, category: "growth" },
      { id: "2c", text: "Raramente", weight: 1, category: "growth" },
      { id: "2d", text: "Apenas em momentos difíceis", weight: 2, category: "protection" }
    ]
  },
  {
    id: 3,
    title: "Experiência com Quaresmas",
    question: "Você já participou de alguma Quaresma?",
    options: [
      { id: "3a", text: "Sim, várias vezes e sempre completo", weight: 4, category: "faith" },
      { id: "3b", text: "Sim, algumas vezes mas nem sempre termino", weight: 3, category: "growth" },
      { id: "3c", text: "Sim, mas foi há muito tempo", weight: 2, category: "growth" },
      { id: "3d", text: "Não, esta será minha primeira vez", weight: 1, category: "growth" }
    ]
  },
  {
    id: 4,
    title: "Promessa Pessoal",
    question: "Qual promessa você gostaria de fazer a si mesmo(a) nestes 40 dias?",
    options: [
      { id: "4a", text: "Orar todos os dias sem exceção", weight: 4, category: "faith" },
      { id: "4b", text: "Ser mais caridoso(a) com as pessoas", weight: 3, category: "growth" },
      { id: "4c", text: "Vencer um vício ou mau hábito", weight: 3, category: "growth" },
      { id: "4d", text: "Dedicar mais tempo ao crescimento espiritual", weight: 4, category: "peace" }
    ]
  },
  {
    id: 5,
    title: "Obstáculos Espirituais",
    question: "O que mais te impede de manter uma vida espiritual constante?",
    options: [
      { id: "5a", text: "Falta de tempo na rotina", weight: 2, category: "growth" },
      { id: "5b", text: "Distrações e dispersão mental", weight: 3, category: "peace" },
      { id: "5c", text: "Desânimo e falta de motivação", weight: 3, category: "faith" },
      { id: "5d", text: "Não sei por onde começar", weight: 2, category: "growth" }
    ]
  },
  {
    id: 6,
    title: "Fé na Proteção Angelical",
    question: "Você acredita que o Arcanjo Miguel pode ajudar em momentos de luta espiritual?",
    options: [
      { id: "6a", text: "Sim, tenho certeza absoluta", weight: 4, category: "protection" },
      { id: "6b", text: "Sim, acredito mas às vezes duvido", weight: 3, category: "faith" },
      { id: "6c", text: "Quero acreditar mas tenho dúvidas", weight: 2, category: "faith" },
      { id: "6d", text: "Não tenho certeza sobre isso", weight: 1, category: "growth" }
    ]
  },
  {
    id: 7,
    title: "Graça Desejada",
    question: "Qual graça você mais deseja alcançar ao final da Quaresma?",
    options: [
      { id: "7a", text: "Paz interior profunda e duradoura", weight: 4, category: "peace" },
      { id: "7b", text: "Fé mais sólida e inabalável", weight: 4, category: "faith" },
      { id: "7c", text: "Proteção espiritual constante", weight: 4, category: "protection" },
      { id: "7d", text: "Proximidade maior com Deus", weight: 4, category: "faith" }
    ]
  },
  {
    id: 8,
    title: "Virtude a Cultivar",
    question: "Qual dessas virtudes você mais deseja cultivar na Quaresma?",
    options: [
      { id: "8a", text: "Coragem", weight: 3, category: "protection" },
      { id: "8b", text: "Fé Inabalável", weight: 4, category: "faith" },
      { id: "8c", text: "Paz Interior", weight: 4, category: "peace" },
      { id: "8d", text: "Perseverança", weight: 3, category: "growth" }
    ]
  },
  {
    id: 9,
    title: "Reação às Dificuldades",
    question: "Quando enfrenta dificuldades, qual é sua primeira reação?",
    options: [
      { id: "9a", text: "Rezo imediatamente pedindo ajuda", weight: 4, category: "faith" },
      { id: "9b", text: "Busco força na fé e depois ajo", weight: 4, category: "protection" },
      { id: "9c", text: "Busco soluções práticas primeiro", weight: 2, category: "growth" },
      { id: "9d", text: "Fico preocupado(a) e ansioso(a)", weight: 1, category: "peace" }
    ]
  },
  {
    id: 10,
    title: "Participação na Missa",
    question: "Com que frequência participa da Santa Missa?",
    options: [
      { id: "10a", text: "Diariamente ou várias vezes na semana", weight: 4, category: "faith" },
      { id: "10b", text: "Todos os domingos e dias santos", weight: 3, category: "faith" },
      { id: "10c", text: "Algumas vezes por mês", weight: 2, category: "growth" },
      { id: "10d", text: "Apenas em ocasiões especiais", weight: 1, category: "growth" }
    ]
  },
  {
    id: 11,
    title: "Proximidade com Deus",
    question: "Como você se sente em relação à sua proximidade com Deus?",
    options: [
      { id: "11a", text: "Muito próximo(a) e confiante", weight: 4, category: "faith" },
      { id: "11b", text: "Próximo(a) na maior parte do tempo", weight: 3, category: "peace" },
      { id: "11c", text: "Gostaria de estar mais próximo(a)", weight: 2, category: "growth" },
      { id: "11d", text: "Sinto-me frequentemente distante", weight: 1, category: "growth" }
    ]
  },
  {
    id: 12,
    title: "Confiança na Providência",
    question: "Como você lida com a incerteza do futuro?",
    options: [
      { id: "12a", text: "Confio plenamente na Providência Divina", weight: 4, category: "faith" },
      { id: "12b", text: "Busco equilibrar confiança em Deus com planejamento", weight: 3, category: "peace" },
      { id: "12c", text: "Fico preocupado(a) mas tento ter fé", weight: 2, category: "peace" },
      { id: "12d", text: "Sinto muita ansiedade sobre o futuro", weight: 1, category: "peace" }
    ]
  },
  {
    id: 13,
    title: "Perdão e Reconciliação",
    question: "Como você lida com ofensas e mágoas?",
    options: [
      { id: "13a", text: "Perdoo rapidamente e oro por quem me ofendeu", weight: 4, category: "peace" },
      { id: "13b", text: "Tento perdoar mas demoro um pouco", weight: 3, category: "growth" },
      { id: "13c", text: "Tenho dificuldade para perdoar", weight: 2, category: "growth" },
      { id: "13d", text: "Guardo mágoas por muito tempo", weight: 1, category: "peace" }
    ]
  },
  {
    id: 14,
    title: "Caridade com o Próximo",
    question: "Com que frequência pratica atos de caridade (ajuda, doação, etc.)?",
    options: [
      { id: "14a", text: "Regularmente, é parte da minha rotina", weight: 4, category: "growth" },
      { id: "14b", text: "Algumas vezes por mês", weight: 3, category: "growth" },
      { id: "14c", text: "Ocasionalmente, quando me lembro", weight: 2, category: "growth" },
      { id: "14d", text: "Raramente encontro oportunidades", weight: 1, category: "growth" }
    ]
  },
  {
    id: 15,
    title: "Compromisso Espiritual",
    question: "Você está disposto(a) a intensificar sua vida espiritual nos próximos 40 dias?",
    options: [
      { id: "15a", text: "Sim, estou totalmente comprometido(a)", weight: 4, category: "faith" },
      { id: "15b", text: "Sim, vou me esforçar bastante", weight: 3, category: "growth" },
      { id: "15c", text: "Vou tentar, mas sei que é desafiador", weight: 2, category: "growth" },
      { id: "15d", text: "Gostaria, mas tenho dúvidas sobre minha constância", weight: 1, category: "growth" }
    ]
  }
];