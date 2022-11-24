import { useEffect } from 'react';

const useScript = (url, ref) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    if (ref.current) {
      ref?.current?.appendChild(script);
    }

    return () => {
      try {
        ref?.current?.removeChild(script);
        // eslint-disable-next-line no-empty
      } catch (err) {}
    };
  }, [url, ref]);
};

export default useScript;
