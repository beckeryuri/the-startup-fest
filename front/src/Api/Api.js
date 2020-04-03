import axios from 'axios';

export default class Api{

    getStartups = () => axios.get("https://startups-project-mytvsxrgeb.now.sh/?query=%7B%0A%20%20allStartups%20%7B%0A%20%20%20%20segment_id%0A%20%20%20%20name%0A%20%20%20%20imageUrl%0A%20%20%20%20description%0A%20%20%7D%0A%7D%0A")
    
}