export async function getBirdsDataImage (name) {
  const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9be0dd895f903ce713ffc70a8c69d1af&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags="
  const response = await fetch(`${url}${name}`);
  const data = await response.json();
  console.log(data.photos.photo[3].url_m);
}