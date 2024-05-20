export default (url: string) => {
  let size = "crop/600/400/";
  return url.replace("/media/", `/media/${size}`);
};
