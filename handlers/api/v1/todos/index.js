export default async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from todos/index',
    }),
  };

  return response;
};
