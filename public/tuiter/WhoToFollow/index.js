import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"


const WhoToFollowList = () => {
    return (`
            <div class="list-group wd-border-start ">
                    <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
                       class="list-group-item list-group-item-action fw-bolder wd-follow">
                        Who to follow
                    </a>
                     ${
                            who.map(whos => {
                                return(WhoToFollowListItem(whos));
                            }).join('')
                        }

              
                     <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
                       class="list-group-item list-group-item-action fw-bolder wd-follow wd-border-end"
                       style="color: rgb(29,161,242)">
                        Show more
                    </a>
             

`); }

export default WhoToFollowList;