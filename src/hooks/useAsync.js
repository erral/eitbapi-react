import { useCallback, useState } from 'react';

const useAsync = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const triggerFunction = useCallback(
    async (requestFunction, ...rest) => {
      if (!requestFunction) return;
      setLoading(true);
      setLoaded(false);
      try {
        await requestFunction(...rest).then(
          (data) => {
            setData(data);
            setLoading(false);
            setLoaded(true);
          },
          (err) => {
            setError(err);
            setLoading(false);
            setLoaded(false);
          },
        );
      } catch (e) {
        setError(e);
        setLoading(false);
        setLoaded(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    data,
    loading,
    loaded,
    error,
    triggerFunction,
  };
};

export default useAsync;
