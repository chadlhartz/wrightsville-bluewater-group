import { useEffect } from 'react';

export const WrightsvilleChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fetchpointai-dev.com/widget.js';
    script.setAttribute('data-agent-id', 'cmlsckhwd00032dfioafcmpyy');
    script.setAttribute('data-app-url', 'https://fetchpointai-dev.com');
    script.setAttribute('data-accent-color', '#1e3a8a');
    script.setAttribute('data-accent-hover-color', '#1e40af');
    script.setAttribute('data-theme', 'light');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};
