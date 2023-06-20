import { HttpMethod } from "../../../common/enums/http-methods";

export const cloudinaryUpload = async file => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'zput0jah');
  data.append('cloud_name', 'dwucnl8j3');

  return await fetch('https://api.cloudinary.com/v1_1/dwucnl8j3/upload', {
    method: HttpMethod.POST,
    body: data
  })
  .then(res => res.json())
  .then(data => {
    return data.secure_url;
  })
  .catch(err => {
    console.log(err);
  });
}