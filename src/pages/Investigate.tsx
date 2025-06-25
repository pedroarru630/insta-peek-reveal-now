import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Investigate = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/loading');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300">
        <div className="h-full bg-orange-500 w-1/3"></div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-md mx-auto p-4">
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
            {/* Detective Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="text-white text-2xl">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 20C8 20 12 16 20 16C28 16 32 20 32 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="15" cy="20" r="3" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="25" cy="20" r="3" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M10 12C10 12 14 8 20 8C26 8 30 12 30 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Descubra agora
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-center mb-8 text-sm leading-relaxed">
              Tudo que acontece no instagram<br />
              de outras pessoas
            </p>

            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-3">
                Digite o instagram dele(a) abaixo:
              </label>
              <input
                type="text"
                placeholder="@afelopes"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-2">
                Dados seguros, não é necessário sua senha
              </p>
            </div>

            {/* Warning Block */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6">
              <p className="text-orange-600 text-sm font-medium">
                ⚠️ Atenção: Limite de apenas 1 PESQUISA por dispositivo
              </p>
            </div>

            {/* Main Button */}
            <button 
              onClick={handleContinue}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-2xl mb-4 transition-colors"
            >
              Continuar
            </button>

            {/* Back Button */}
            <button 
              onClick={handleBack}
              className="w-full flex items-center justify-center gap-2 text-gray-600 py-2"
            >
              <ArrowLeft size={16} />
              <span>Voltar</span>
            </button>
          </div>

          {/* Feedbacks Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
              FeedBacks
            </h2>
            
            {/* Feedback Cards */}
            <div className="space-y-4">
              {/* Feedback 1 - Luzianne */}
              <div className="border border-gray-200 rounded-2xl p-4">
                <div className="flex items-start gap-3 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b332c48d?w=40&h=40&fit=crop&crop=face"
                    alt="Luzianne"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-800">Luzianne</span>
                      <span className="text-gray-500">@andrealuizita4</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">7min</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Eu jureiva que era golpe gente KKKK Mas por aqui deu certo tem! Recebi meu relatório segundos depois de finalizar o pagamento.
                </p>
              </div>

              {/* Feedback 2 - Brenda */}
              <div className="border border-gray-200 rounded-2xl p-4">
                <div className="flex items-start gap-3 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                    alt="Brenda"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-800">Brenda</span>
                      <span className="text-gray-500">@brendaflorlr</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">1min</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  MMN bem!!! Meu caçula começou a usar rede social e percebi que ele estaria me omitindo por segurança. Pra ver com quem ele conversava, e funciona msm. Graças a Deus não encontrei nada de mais
                </p>
              </div>

              {/* Feedback 3 - Andreia */}
              <div className="border border-gray-200 rounded-2xl p-4">
                <div className="flex items-start gap-3 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face"
                    alt="Andreia"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-800">Andreia</span>
                      <span className="text-gray-500">@andreaelf</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">7 horas</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  MENINAS DO CEU!!! Toma cuidado com o marido de vcs, eles curt todos os posts da Iscxsah de vcs dele, pra q isso??!??
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {/* Dashboard - Disabled */}
          <div className="flex flex-col items-center py-2 opacity-50">
            <div className="w-6 h-6 mb-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xs text-gray-400">Painel</span>
          </div>

          {/* Spy - Active */}
          <div className="flex flex-col items-center py-2">
            <div className="w-6 h-6 mb-1 text-orange-500">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xs text-orange-500 font-medium">Espionar</span>
          </div>

          {/* Prints - Disabled */}
          <div className="flex flex-col items-center py-2 opacity-50">
            <div className="w-6 h-6 mb-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 10C16 11.1046 15.1046 12 14 12H10C8.89543 12 8 11.1046 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xs text-gray-400">Prints</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investigate;
