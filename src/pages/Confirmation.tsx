
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/results');
  };

  const handleCorrect = () => {
    navigate('/investigate');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300">
        <div className="h-full bg-orange-500 w-3/4"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md mx-auto">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b332c48d?w=120&h=120&fit=crop&crop=face"
              alt="Fernanda"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          {/* Name and Handle */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-1">
              Fernanda
            </h1>
            <p className="text-orange-500 text-sm">
              @afelopes
            </p>
          </div>

          {/* Question */}
          <p className="text-gray-700 text-center mb-8 font-medium">
            O instagram está correto?
          </p>

          {/* Main Button */}
          <button 
            onClick={handleContinue}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-2xl mb-4 transition-colors"
          >
            Continuar, está correto!
          </button>

          {/* Correction Link */}
          <button 
            onClick={handleCorrect}
            className="w-full flex items-center justify-center gap-2 text-gray-600 py-2"
          >
            <ArrowLeft size={16} />
            <span>Corrigir</span>
          </button>
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

export default Confirmation;
