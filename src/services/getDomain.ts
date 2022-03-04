export const getDomain = (url: string) => {
  const receivedUrl = new URL(url);
  return receivedUrl.host;
};
