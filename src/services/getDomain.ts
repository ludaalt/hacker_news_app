export const getDomain = (url: string) => {
  try {
    const receivedUrl = new URL(url);
    return receivedUrl.host;
  } catch (e) {
    return url;
  }
};
