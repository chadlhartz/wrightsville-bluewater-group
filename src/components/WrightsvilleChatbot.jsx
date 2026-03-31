import { useEffect } from 'react';

export const WrightsvilleChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fetchpointai.com/widget.js';
    script.setAttribute('data-agent-id', 'cmmmfvb3e0001tkj34m4uwnxd');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};
