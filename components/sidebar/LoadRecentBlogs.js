import classes from '../../styles/LoadRecent.module.css'
import dayjs from 'dayjs';
import Link from "next/link";

const LoadRecentBlogs = ({blogs}) => {
    const recent = () => {
        return blogs && blogs.map((blog, index) => {
            return <div className={`${classes.Item}`} key={index}>
                <div className={classes.wrapper}>
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
            {recent()}
        </div>


    )
        ;
};

export default LoadRecentBlogs;