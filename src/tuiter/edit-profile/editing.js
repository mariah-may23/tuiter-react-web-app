import React, {useState} from "react";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {createProf} from "../profile/profile-reducer";
import {useDispatch} from "react-redux";




const Edits = (
    {
        prof = {
            "firstName": "Jose",
            "lastName": "Annunziato",
            "handle": "@jannunzi",
            "profilePicture": "jose.png",
            "bannerPicture": "polyglot.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "7/7/1968",
            "dateJoined": "4/2009",
            "followingCount": 340,
            "followersCount": 223
        }

    }
) => {

    let [Edits, setEdits] = useState('');
    const dispatch = useDispatch();
    const editsClickHandler = () => {
        const newProf = {
            profile: Edits
        }
        dispatch(createProf(newProf));

    }


    return (

        <div >
            <div className="row">
                <h2 className="col-10">Edit profile</h2>
                <a href="./profile">
                    <button className="btn btn-dark rounded-pill float-end text-white mt-1 mb-2 col-2"
                            onClick={editsClickHandler}
                    >
                    Save
                </button>
                </a>
            </div>
            <div className="row">
                <img src="../images/twitterprof.jpeg" className="w-100 position-relative wd-grey" alt={""}/>
                <i  className="bi bi-camera position-absolute wd-nudge "   />
                <i className="bi bi-x-circle-fill position-absolute wd-nudge2"/>
                <span>

            <img
                src="/images/nasa.jpeg" className="w-25 position-relative wd-nudge-up wd-grey " alt={""}>

            </img>
                           <i  className="bi bi-camera position-absolute wd-nudge3 "   />
                </span>
            </div>

            <div className="row wd-nudge-up mb-3">
                <label htmlFor="name" className="text-secondary">Name</label>
                <textarea placeholder={prof.firstName + " " + prof.lastName}
                          className="form-control border-2"
                          onChange={(event) => setEdits(event.target.value)}>
                </textarea>


                <label className="text-secondary" >Bio</label>
                <textarea placeholder={prof.bio}
                          className="form-control border-2"
                          onChange={(event) => setEdits(event.target.value)}>
                </textarea>

                <label className="text-secondary" >Location</label>

                <textarea placeholder={prof.location}
                          className="form-control border-2"
                          onChange={(event) => setEdits(event.target.value)}>
                </textarea>

                <label className="text-secondary" >Website</label>
                <textarea placeholder={prof.website}
                          className="form-control border-2"
                          onChange={(event) => setEdits(event.target.value)}>
                </textarea>

                <label className="text-secondary" >Date of Birth</label>
                <textarea placeholder={prof.dateOfBirth}
                          className="form-control border-2"
                          onChange={(event) => setEdits(event.target.value)}>
                </textarea>


                <div className="row">
                    <div className="col-11" >
                    Switch to professional
                    </div>
                    <div className="col-1">

                     >

                    </div>
                </div>





            </div>



        </div>


    );
}
export default Edits;
