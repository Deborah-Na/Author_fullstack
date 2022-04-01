import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const divider = {
    height: "auto",
    display: "flex",
    flexDirection: "row"
}

const Main = (props) => {
    const [authors, setAuthors] = useState([]);


    useEffect(() => {
        //this is to match the routes from the routes.js in the backend
        axios.get('http://localhost:8000/api/authors')
            //axios wraps everything in .data
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
            })

            .catch(err => console.log(err))

    }, [])

    const deleteAuthor = (deleteId) => {
        console.log(deleteId); //checkpont here too
        if (window.confirm("really??")) {
            //make a request to the DB to delete:
            axios.delete("http://localhost:8000/api/authors/" + deleteId)
                .then(res => {
                    console.log(res.data);

                    //remove from the DOM after a successful delete and show right away use filter: 
                    setAuthors(authors.filter((author) => author._id !== deleteId))

                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <p>We have quotes by: </p>
            <table className="table table-warning table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                {/* // {JSON.stringify(authors)} */}
                <tbody>
                    {
                        authors.map((author, index) => {
                            return (




                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button className="btn-dark me-3" ><Link className="text-light" to={"/authors/update/" + author._id}>edit</Link></button> 


                                        <button className="btn-danger" onClick={() => deleteAuthor(author._id)}>delete</button>
                                    </td>

                                </tr>


                            )
                        }
                        )
                    }
                </tbody>
            </table >

        </div >

    )
}

export default Main;