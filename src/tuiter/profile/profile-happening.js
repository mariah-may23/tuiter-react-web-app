import React from "react";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const ProfileHappening = (
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




        return (

        <div >
            <div>
                <h2>{prof.firstName + " " + prof.lastName}</h2>


            </div>
            <div className="row">
            <img src="/images/twitterprof.jpeg" className="w-100 position-relative" alt={""}/>

                <span>
                    <a href="/tuiter/edit-profile"><button className="btn btn-outline-secondary rounded-pill float-end text-black mt-1">Edit Profile</button></a>
            <img  src="/images/nasa.jpeg" className="w-25 position-relative wd-nudge-up " alt={""}>
                </img>

                </span>
            </div>

            <div className="row wd-nudge-up mb-3">
                <h2>{prof.firstName + " " + prof.lastName}</h2>
                <h3 className="text-secondary">{prof.handle}</h3>
                <p>{prof.bio}</p>
            </div>
            <div className="row mb-2">
            <div className="col wd-unselected">

                <i className="bi bi-geo-alt"></i>
                {prof.location}


            </div>
            <div className="col wd-unselected">

                <i className="bi bi-balloon"></i>
                Born {prof.dateOfBirth}


            </div>
            <div className="col wd-unselected">

                <i className="bi bi-calendar"></i>
                 Joined {prof.dateJoined}

            </div>

            </div>
            <div className="row">
                <div className="col text-black">

                    {prof.followingCount}<span className="text-secondary"> Following </span>


                </div>
                <div className="col text-black">

                    {prof.followersCount}<span className="text-secondary"> Followers </span>

                </div>

            </div>
        </div>


    );
}
export default ProfileHappening;
