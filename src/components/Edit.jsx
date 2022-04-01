import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Update = (props) => {

    const history = useHistory();

    const { id } = useParams();
    console.log(id);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);

            })
            .catch(err => {
                console.log(err)
                history.push('/authors/error')
            })

    }, [id])

    const updateAuthor = (e) => {
        e.preventDefault();

        const updateAuthor = {
            name: name
        }
        axios.put(`http://localhost:8000/api/authors/${id}`, updateAuthor)
            .then(res => {
                console.log(res.data);
                history.push("/")
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
            <h1>Update</h1>
            <h4>Edit this Author</h4>
            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <h3>Name:</h3>
                <input onChange={e => setName(e.target.value)} value={name} /> <br />


                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Update;