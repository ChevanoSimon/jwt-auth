import axios from "axios";
import { AUTH_TOKEN } from '../helper';

let token = localStorage.getItem(AUTH_TOKEN)
console.log(token)

axios( '/wp-json/wp/v2/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'New Blog Post'
    }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
} ).then( res => {
  console.log(res);
})