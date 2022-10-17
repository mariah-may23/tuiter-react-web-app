import PostItem from "./PostItem.js";
import post from "./post.js"


const PostSummaryItemList = () => {
    return (`
          <ul class="list-group">
                     ${
        post.map(posts => {
            return(PostItem(posts));
        }).join('')
    }

          
              </ul>



`); }

export default PostSummaryItemList;