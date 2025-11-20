import React, { useState, useEffect, useCallback } from 'react';
import { BubbleChat } from 'flowise-embed-react';

export const WrightsvilleChatbot = ({ chatflowId, apiHost }) => {
  const [showChat, setShowChat] = useState(false);

  const openChat = useCallback(() => {
    setShowChat(true);
  }, []);

  const closeChat = () => {
    setShowChat(false);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showChat) closeChat();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showChat]);

  return (
    <>
      {showChat && (
        <BubbleChat
          chatflowid={chatflowId}
          apiHost={apiHost}
          theme={{
            button: {
              backgroundColor: '#1D4ED8',
              right: 24,
              bottom: 24,
              size: 56,
              iconColor: 'white',
            },
            chatWindow: {
              welcomeMessage: "👋 Welcome to Wrightsville Bluewater Group! How can we help with your building maintenance needs today?",
              backgroundColor: '#ffffff',
              height: 600,
              width: 400,
              fontSize: 16,
              poweredByTextColor: '#6B7280',
              botMessage: {
                backgroundColor: '#EFF6FF',
                textColor: '#1F2937',
                showAvatar: true,
                avatarSrc: 'https://ui-avatars.com/api/?name=WBG&background=1D4ED8&color=fff&bold=true',
              },
              userMessage: {
                backgroundColor: '#1D4ED8',
                textColor: '#ffffff',
                showAvatar: false,
              },
              textInput: {
                placeholder: 'Ask about our services...',
                backgroundColor: '#ffffff',
                textColor: '#1F2937',
                sendButtonColor: '#1D4ED8',
                maxChars: 500,
                sendMessageSound: false,
                receiveMessageSound: false,
              },
              feedback: {
                color: '#1F2937',
              },
              footer: {
                textColor: '#6B7280',
                text: 'Wrightsville Bluewater Group',
                company: '24/7 Support',
                companyLink: 'tel:1-800-924-4357',
              },
            },
          }}
        />
      )}

      {/* Custom Chat Button when chat is closed */}
      {!showChat && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          title="Chat with us"
          style={{ width: '56px', height: '56px' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}
    </>
  );
};

