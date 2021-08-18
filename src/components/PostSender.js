import axios from 'axios'
import { AUTH_TOKEN } from '../helper';

let PostSender = (title, content) => {

    const user = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    // console.log(user.token)
    // console.log(title)
    // console.log(content)
    const url = "https://ota.toekomst.school/wp-json/wp/v2/codeprojects"

    const config = {
        headers: { Authorization: `Bearer ${user.token}` },
        mode: "no-cors"
    };
    
    //wordpress attribute : content attibute

    const bodyParameters = {
       title: title,
       content: content
    };
    
    axios.post( 
      url,
      bodyParameters,
      config
    ).then(console.log).catch(console.log);
}

export default PostSender;