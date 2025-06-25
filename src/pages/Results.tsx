
import React from 'react';
import { Check, Lock, Eye, Users, MessageCircle, Heart, AlertTriangle, Camera } from 'lucide-react';

const Results = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300">
        <div className="h-full bg-orange-500 w-full"></div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-md mx-auto p-4 space-y-6">
          
          {/* SECTION 1 - Principais atividades */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 text-center mb-6">
              Principais atividades<br />detectadas essa semana
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { handle: "@m*********", action: "Apagou as mensagens da DM" },
                { handle: "@f*********", action: "Colocou nos melhores amigos" },
                { handle: "@l*********", action: "Bloqueou e denunciou esse perfil" },
                { handle: "@d*********", action: "Passou +52m em chamada de vídeo com fernanda" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-4 text-center relative">
                  <div className="absolute top-2 right-2">
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 blur-sm"></div>
                  <p className="text-sm font-medium text-gray-800 mb-2">{item.handle}</p>
                  <p className="text-xs text-gray-600">{item.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2 - Prints recuperados */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-center mb-2">
              <span className="text-orange-500">Prints</span> recuperados
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              Nossa inteligência artificial procurou por todo o Instagram atrás de conversas no Direct de @afelopes
            </p>
            
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">4 Prints extraídos</h3>
              <p className="text-orange-500">na DM de <span className="font-semibold">@afelopes</span></p>
              <p className="text-sm text-gray-600 mt-2">
                Detectamos várias mensagens com cunho sexual e nudez explícita
              </p>
            </div>

            {/* Sample DM Screenshot */}
            <div className="bg-gray-900 rounded-2xl p-4 mb-4 relative">
              <div className="flex items-center gap-2 mb-3 text-white">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <span className="text-sm">Enviou a story de @afelopes</span>
              </div>
              <div className="bg-gray-700 rounded-lg p-3 mb-3">
                <div className="w-full h-32 bg-gray-600 rounded-lg blur-sm"></div>
              </div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm inline-block">
                Respondeu
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 mb-2">
              ...e mais 3 prints semelhantes
            </p>
            <p className="text-center text-sm text-red-500 mb-4">
              Veja tudo sem censura no relatório completo
            </p>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-colors">
              <Lock className="w-4 h-4" />
              Desbloquear prints
            </button>
          </div>

          {/* SECTION 3 - Dados extras */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">... e mais:</h3>
            
            <div className="space-y-3 mb-6">
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-800">10</span>
                <p className="text-sm text-gray-700">
                  Seguidores de <span className="font-semibold">fernanda</span> possuem interesses sexual ❤️
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-800">6</span>
                <p className="text-sm text-gray-700">
                  Conversas de <span className="font-semibold">fernanda</span> no Direct contêm Nudez 🔥
                </p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <p className="text-sm text-gray-700">
                  Perfis foram <span className="font-semibold">restringidos</span> nos stories e posts de <span className="font-semibold">fernanda</span> 🚫
                </p>
              </div>
            </div>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-colors">
              <Lock className="w-4 h-4" />
              Descobrir stalkers
            </button>
          </div>

          {/* SECTION 4 - Atividade nos Stories */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
              Atividade nos Stories<br />de <span className="text-orange-500">@afelopes</span>
            </h2>
            
            {/* Stories Preview */}
            <div className="flex gap-3 mb-4 justify-center">
              {[
                { viewers: "5", text: "viram esse story" },
                { viewers: "3", text: "pausaram por +13s" },
                { viewers: "2", text: "reagiram" }
              ].map((story, index) => (
                <div key={index} className="relative">
                  <div className="w-20 h-28 bg-gray-300 rounded-xl relative overflow-hidden">
                    <div className="absolute bottom-2 left-2 text-white text-xs font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
                      {story.viewers}
                    </div>
                  </div>
                  <p className="text-xs text-center mt-1 text-gray-600">{story.text}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-600 text-center mb-4">
              Veja tudo que acontece nos stories de @afelopes no relatório completo
            </p>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl mb-6 transition-colors">
              Revelar perseguidores
            </button>
            
            <h3 className="text-sm font-bold text-gray-800 text-center mb-4">
              Visitaram esse perfil essa semana<br />de 2 à 7 vezes:
            </h3>
            
            <div className="flex gap-3 justify-center">
              {[
                { name: "Já***", handle: "jp.********" },
                { name: "M****", handle: "m.********" },
                { name: "D***", handle: "d.*******" }
              ].map((profile, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
                  <p className="text-xs font-semibold text-gray-800">{profile.name}</p>
                  <p className="text-xs text-gray-600">{profile.handle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5 - Análise Concluída */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            {/* Profile Section */}
            <div className="text-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b332c48d?w=120&h=120&fit=crop&crop=face"
                alt="Fernanda"
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
              />
              <h1 className="text-lg font-bold text-gray-800">Fernanda</h1>
              <p className="text-orange-500 text-sm">@afelopes</p>
            </div>
            
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
              Análise Concluída!
            </h2>
            
            <div className="space-y-4 mb-6">
              {/* Green Block */}
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">6</span> perfis de <span className="font-semibold">São Paulo</span> estão acessando esse perfil agora
                  </p>
                </div>
              </div>
              
              {/* Orange Block */}
              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">10</span> Stalker's identificados na última semana
                  </p>
                </div>
              </div>
              
              {/* Red Block */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <p className="text-sm font-bold text-gray-800">
                    🏆1 Super Stalker, encontrado!
                  </p>
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  @afelopes tem um fã no perfil
                </p>
                <p className="text-xs text-red-600 font-semibold mb-3">
                  Isso não é só mais um stalker!
                </p>
                
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>Esse Super Stalker visitou o perfil de fernanda por 11 dias consecutivos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>3 conversas com chamada de vídeo foram apagadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>Algumas conversas possuem um teor sexual</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-2xl p-3 mb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <p className="text-sm text-red-600 font-semibold">
                  Não saia dessa página.
                </p>
              </div>
            </div>
            
            <p className="text-xs text-gray-600 text-center mb-2">
              Liberamos apenas UMA PRÉVIA por aparelho.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <span>Última semana</span>
            </div>
            <p className="text-xs text-gray-500 text-center">
              18/06 - 25/06
            </p>
          </div>

          {/* SECTION 6 - Close Friends */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-800">Close Friends</h2>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">@f*******</span> e outras 4 pessoas adicionou esse perfil nos <span className="font-semibold">melhores amigos</span>
              </p>
              <button className="text-orange-500 text-sm mt-2">
                Ver Pessoas &gt;
              </button>
            </div>
            
            {/* Stories with green indicators */}
            <div className="flex gap-3 mb-4 justify-center">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="relative">
                  <div className="w-20 h-28 bg-gray-300 rounded-xl relative overflow-hidden">
                    <div className="absolute top-2 left-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <Users className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-600 text-center mb-2">
              ...e outras 2 pessoas que não seguem fernanda
            </p>
            
            <p className="text-sm text-red-500 text-center mb-4">
              Tenha acesso a tudo isso sem censuras no relatório completo
            </p>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-colors">
              <Eye className="w-4 h-4" />
              Ver relatório completo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2 fixed bottom-0 left-0 right-0">
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

export default Results;
