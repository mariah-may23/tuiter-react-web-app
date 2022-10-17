import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                   <div class="col-11">
                        <div class="position-relative">
                            <input class=" ps-5 form-control rounded-pill wd-search-bar mb-2" placeholder="Search Tuiter"/>
                            <span class="position-absolute wd-search-tuiter  ">
                                <i class='fas fa-search'></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-1">
                        <i class="fa fa-cog fa-2x" style="color: white; float: right" ></i>
                    </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                       <li class="nav-item">
                        <a class="nav-link list-group-item-action active wd-nav-tabs" href="#">
                            For You
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-tabs" href="#">
                            Trending
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-tabs" href="#">
                            News
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav-tabs" href="#">
                            Sports
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block" href="#" tabindex="-1">
                            Entertainment
                        </a>
                    </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative mb-2">
                    <img  src="../../starship.jpeg" width="100%" /> <!-- takes up width of the parent-->

                    
                    <h3 class="position-absolute bottom-0 left-0 text-white fw-bolder" >
                        SpaceX Starship
                    </h3>

                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
