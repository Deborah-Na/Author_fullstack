import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Create = (props) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const addAuthor = (e) => {
        e.preventDefault();
        console.log(name)

        const newAuthor = {
            name: name
        }
        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then(res => {
                console.log(res.data);
                history.push("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            {/* {JSON.stringify(name)} */}
            <h4>Add a new Author:</h4>
            <form onSubmit={addAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
                <button>Cancel </button>
                <button>Create </button>
            </form>
        </div>
    )

}

export default Create;