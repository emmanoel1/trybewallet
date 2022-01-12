const apiAll = async () => {
  const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
  const promise = await fetch(ENDPOINT);
  const response = promise.json();
  return response;
};

export default apiAll;
