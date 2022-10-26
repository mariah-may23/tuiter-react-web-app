import React from "react";
import postsArray from './posts.json';
import HomePostSummaryItem from "./home-post-summary-item";

const HomePostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <HomePostSummaryItem
                                       key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default HomePostSummaryList;