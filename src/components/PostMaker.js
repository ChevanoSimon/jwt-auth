import React, { useReducer, useState } from 'react';
import PostSender from './PostSender';

const formReducer = (state, event) => {

    if(event.reset) {
        return {
            //blogTitle: '',
            //postText: '',
        }
    }

    return {
      ...state,
      [event.name]: event.value
    }
   }

const PostMaker = () => {

    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        // alert('You have submitted the form');
        setSubmitting(true);

        PostSender(formData.blogTitle, formData.postText);

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
              })
        }, 3000)
    }

    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }

    return (
        <div>
            <form onSubmit = { handleSubmit }>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Set your Blog Title</p>
                        <input name="blogTitle" onChange={ handleChange }/>
                    </label><br/>

                    <label>
                        <p>Enter text</p>
                        <textarea name="postText" onChange={ handleChange } />
                    </label><br/>

                    <button type="submit">Submit</button>
                    {submitting && 
                        <div>
                            You are submitting the following:
                            <ul>
                                {Object.entries(formData).map(([name, value]) => (
                                    <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                                ))}
                            </ul>
                        </div>
                    }
                </fieldset>
            </form>
        </div>
    )
}

export default PostMaker

// Source code : https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react