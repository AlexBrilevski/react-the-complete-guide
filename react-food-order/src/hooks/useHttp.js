import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const respData = await response.json();

  if (!response.ok) {
    throw new Error(respData.message || 'Something went wrong. Failed fetch data.');
  }

  return respData;
}

export default function useHttp(url, config, initData) {
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(async function (data) {
    setIsLoading(true);
    try {
      const respData = await sendHttpRequest(url, { ...config, body: data });
      setData(respData);
    } catch (error) {
      setError(error.message || 'Something went wrong.');
    }
    setIsLoading(false);
  }, [url, config]);

  const clearData = () => {
    setData(initData);
  };

  useEffect(() => {
    if (!config || (config && (!config.method || config.method === 'GET'))) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
