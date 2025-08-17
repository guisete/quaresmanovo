import React from 'react';
import { SpiritualProfile } from '../types';

interface QuizResultProps {
  profile: SpiritualProfile;
  onRestart: () => void;
}

export function QuizResult({ profile, onRestart }: QuizResultProps) {
  // Carregar o script do player apenas quando este componente for montado
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/eb579881-cd3f-4188-ab9e-e6a7a2bb9f69/players/689e5ebb94343208504f1b5f/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup: remover o script quando o componente for desmontado
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Função para trackear o InitiateCheckout
  const handleCheckoutClick = () => {
    // Disparar evento de InitiateCheckout para o Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Quaresma São Miguel Arcanjo',
        content_category: 'Produto Espiritual',
        value: 97.00,
        currency: 'BRL'
      });
    }
    
    // Abrir o link de checkout
    window.open('https://checkout.vendeagora.com/api/public/shopify?product=917541223684&store=9175', '_blank');
  };
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
      <div className="max-w-lg mx-auto bg-[#2D2419]/95 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        {/* Header de Agradecimento */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-3">
            BÔNUS: Você ganhou um presente
          </h1>
          <p className="text-[#8B6B47] text-base leading-relaxed">
            Sua jornada espiritual com São Miguel Arcanjo está apenas começando. 
            Assista ao vídeo abaixo para receber um presente especial que guardamos pra você!
          </p>
        </div>

        {/* Player Incorporado */}
        <div className="mb-6">
          <div className="bg-black/20 rounded-xl p-4">
            <div className="rounded-lg">
              <vturb-smartplayer id="vid-689e5ebb94343208504f1b5f" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
            </div>
          </div>
        </div>

        {/* Mensagem Inspiradora */}
        <div className="bg-gradient-to-r from-[#B8472F]/20 to-[#D4634A]/20 rounded-xl p-4 border-l-4 border-[#B8472F] mb-6">
          <p className="text-white italic text-center leading-relaxed">
            "São Miguel Arcanjo, defendei-nos no combate e sede nosso refúgio 
            contra a maldade e as ciladas do demônio."
          </p>
        </div>

        {/* Botão de Ação */}
        <div className="text-center">
          <button
            onClick={handleCheckoutClick}
            className="bg-[#B8472F] hover:bg-[#A03B26] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Adquirir meu presente
          </button>
        </div>
      </div>
    </div>
  );
}