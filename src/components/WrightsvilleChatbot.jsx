import React from 'react';
import { BubbleChat } from 'flowise-embed-react';

export const WrightsvilleChatbot = ({ chatflowId, apiHost }) => {
  return (
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
  );
};

