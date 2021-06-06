import axios from 'axios';

const KEY = 'AIzaSyBqJBOYT--TG763MDW8BBF6bsn-cHK8WO8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});