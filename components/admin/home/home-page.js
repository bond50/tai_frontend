
import ApprovedPosts from "./approved-posts";
import ApprovedPages from "./approved-pages";
import {isAuth} from "../../../actions/auth";


const HomePage = () => {
    if (!isAuth()) {
        return null
    } else {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    {/*<PendingPosts/>*/}
                    <ApprovedPages/>
                    <ApprovedPosts/>
                    {/*<RejectedPosts data={data}/>*/}
                </div>
            </div>
        );
    }
};

export default HomePage;