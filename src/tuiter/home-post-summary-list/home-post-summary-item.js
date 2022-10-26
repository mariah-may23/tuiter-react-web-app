import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../home/index.css";
const PostSummaryItem = (
    {
        post = {
            "retweetedBy": "Elon Musk Retweeted",
            "topic": "Space",
            retweeted: true,
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "spacexlogo.jpeg",
            "chat": 595,
            "retweet": "1,168",
            "heart": "11.1K",
            "link": "spacex.com/updates",
            "thread":  true,
            "postlines": "",
            "postimg": "",
            "posttitle": "",
            "postat": "",
            "posttime": ""
        }


    }


) => {



    return(



        <li className="list-group-item">

            <div className="row fw-semibold text-secondary">
                <span>
                    {post.retweeted ?
                      <i className="bi bi-recycle text-secondary fw-semibold"/> : ''}
                    {post.retweetedBy}

                </span>
            </div>

            <div className="row">
                <div className="text-secondary">
                    <img className="rounded-circle" height={48} src={`/images/${post.avataricon}`} alt={""}/>
                    <span className="fw-bolder text-black">&nbsp;{post.topic}</span>
                    &nbsp;{post.userName}
                    <i className="bi bi-patch-check text-bg-primary rounded-circle"/>
                    &nbsp;-{post.time}

                    <i className="bi bi-three-dots float-end"/>
                </div>

            </div>
            <div className="row mt-1">
                <div>{post.title}
                {post.linked ?
                     <span className="wd-blue">
                     {post.link}
                         </span>
                  : ''}
                </div>
            </div>
            <div className="row">
                {post.thread ?  <img width={70} className="float-end rounded-5 mb-3 mt-3" src={`/images/${post.image}`} alt={""}/> : ""}
            </div>

            {post.thread ? "" :
             <div className="row border rounded mt-2 mb-3">
                 <div className="text-secondary">
                     <img className="rounded-circle" height={48} src={`/images/${post.postimg}`} alt={""}/>
                     <span className="fw-bolder text-black">&nbsp;{post.posttitle}</span>
                     &nbsp;{post.postat}
                     <i className="bi bi-patch-check text-bg-primary rounded-circle"/>
                     &nbsp;-{post.posttime}


                 </div>
                 <div>
                     {post.postlines}
                 </div>

             </div>}





            <div className="row">

                    <div className="col wd-unselected">

                            <i  className="bi bi-chat"/>
                            {post.chat}

                    </div>
                    <div className="col wd-unselected">

                        <i className="bi bi-recycle"/>
                        {post.retweet}

                    </div>
                    <div className="col wd-unselected">

                        <i className="bi bi-heart"/>
                        {post.heart}

                    </div>
                    <div className="col wd-unselected">

                        <i className="bi bi-box-arrow-up"/>

                    </div>
                {post.thread ?
                 <div className="mt-3">
                     <span className="wd-blue">
                     Show this thread
                         </span>
                 </div> : ''}





            </div>
        </li>
    );
};
export default PostSummaryItem;
