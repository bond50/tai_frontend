import classes from '../../styles/LoadRecent.module.css'
import dayjs from 'dayjs';
import Link from "next/link";
import {API} from "../../config";

const LoadRecentBlogs = ({blogs}) => {
    const recent = () => {
        return blogs && blogs.map((blog, index) => {
            return <div className={`${classes.Item}`} key={index}>
                <img src={`${API}/blog/photo/${blog.slug}`} alt="" className="flex-shrink-0"/>
               <div>
                    <h4>
                    <Link href={`/blogs/${blog.slug}`} key={index}>
                        <a> {blog.title.toLowerCase()}</a>
                    </Link>
                </h4>
                <div className={classes.Time}>
                    {dayjs(blog.createdAt).format("ddd, MMM D, YYYY h:mm A")}
                </div>
               </div>
            </div>
        })
    }


    return (
        <div className={classes.Recent}>
            <div className='mt-3'>
                {recent()}
            </div>
        </div>


    )
        ;
};

export default LoadRecentBlogs;