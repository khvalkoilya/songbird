export async function getBirdsDataImage (name) {
  // const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9be0dd895f903ce713ffc70a8c69d1af&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags="
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'https://www.xeno-canto.org/api/2/recordings?query='
  const response = await fetch(`${url}${name}`);
  const data = await response.json();
  console.log(data)
  // console.log(data.photos.photo[5].url_m);
  // console.log(data.photos.photo[6].url_m);
  // console.log(data.photos.photo[7].url_m);
  // console.log(data.photos.photo[8].url_m);
  // console.log(data.photos.photo[9].url_m);
  //www.xeno-canto.org/api/2/recordings?query=BIRD NAME
}