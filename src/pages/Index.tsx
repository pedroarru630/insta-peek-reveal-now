
import React from 'react';
import { User, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300">
        <div className="h-full bg-orange-500 w-1/4"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md mx-auto">
          {/* Detective Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="text-white text-2xl">
                {/* Hat and glasses icon representation */}
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
            Descubra em 1 minuto
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
            Todas as informações que<br />
            o instagram esconde de você.
          </p>

          {/* Question */}
          <p className="text-gray-700 text-center mb-6 font-medium">
            Qual perfil você quer investigar?
          </p>

          {/* Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-colors">
              <User size={20} />
              Meu próprio perfil
            </button>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-colors">
              <Users size={20} />
              Perfil de outras pessoas
            </button>
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

export default Index;
