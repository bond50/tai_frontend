import PendingPosts from "./pending-posts";
import ApprovedPosts from "./approved-posts";
import ApprovedPages from "./approved-pages";


const HomePage = () => {
    return (
        <div className='row'>
            <div className='col-md-12'>
                <PendingPosts/>
                <ApprovedPages/>
                <ApprovedPosts/>

                {/*<RejectedPosts data={data}/>*/}
            </div>


        </div>
    );
};

export default HomePage;