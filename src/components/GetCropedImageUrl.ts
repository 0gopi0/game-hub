import noImage from "../assets/noImage.jpg";
const GetCropedImageUrls = (url: string) => {
  if (!url) return noImage;
  let size = "crop/600/400/";
  return url.replace("/media/", `/media/${size}`);
};
export default GetCropedImageUrls;
