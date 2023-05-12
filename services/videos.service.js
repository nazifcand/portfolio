import axios from 'axios'

export const fetchVideos = () => {
  const { API_KEY, CHANNEL_ID } = process.env;
  return axios
    .get(`https://youtube.googleapis.com/youtube/v3/search?channelId=${CHANNEL_ID}&type=video&part=snippet&order=date&key=${API_KEY}`)
    .then(res => [null, res.data])
    .catch(err => [err])
}