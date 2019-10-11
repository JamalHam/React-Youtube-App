import axios from 'axios';


const KEY = 'AIzaSyBe9iS1F_CRfCqv6qos2PvDLcU7kU1MRXU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});