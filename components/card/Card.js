import Link from 'next/link';
import React, {Fragment} from "react";
import renderHTML from 'html-react-parser';
import dayjs from 'dayjs';
import {API} from '../../config';
import classes from '../../styles/BlogCard.module.css'
import Image from "next/image";


const Card = ({blog, single}) => {
    const showBlogTags = () =>
        blog.tags.map((t, i) => {
            let tagsLink = `/tags/${t.slug}`
            return (
                <li key={i}>
                    <Link href={tagsLink}>
                        <a> {t.name}</a>
                    </Link>
                </li>

            );
        });
    function showCats() {
        return blog.categories.map((c, i) => {
            let catsLink = `/categories/${c.slug}`
            return (
                <li key={i}>
                    <Link href={catsLink}>
                        <a>{c.name}</a>
                    </Link>
                </li>

            );
        })
    }

    let imgSrc = `${API}/blog/photo/${blog.slug}`
    const myLoader = () => {
        return imgSrc;
    }

    return (
        <article className={classes.Entry}>
            <Fragment>
                <div className={classes.Image}>
                    <Image
                        loader={myLoader}
                        className="img-fluid"
                        width={1200}
                        height={700}
                        src={imgSrc}
                        alt={blog.title}
                    />

                </div>
                {/*<h2 className={classes.Title}>*/}
                {/*    <Link href={single ? '' : `/blogs/${blog.slug}`}>*/}
                {/*        <a>*/}
                {/*            {blog.title.toLowerCase()}*/}
                {/*        </a>*/}
                {/*    </Link>*/}
                {/*</h2>*/}
            </Fragment>

            <div className={classes.Meta}>
                <ul className='mark pt-3 pb-3 '>
                    <li className="d-flex align-items-center"><i className="bi bi-person"/>
                        <span className='px-2'> Written by  </span>
                        <Link href={`/profile/${blog.postedBy.username}`}>
                            <a> {blog.postedBy.username}</a>
                        </Link>
                    </li>
                    <li className="d-flex align-items-center">
                        <i className="bi bi-calendar"/>

                        <span> {dayjs(blog.updatedAt).format('ddd, MMM D, YYYY h:mm A')}</span>
                    </li>

                </ul>
            </div>
            <div className={classes.Content}>
                {renderHTML(blog.body)}
                <div className={classes.Footer}>
                    <i className="bi bi-folder"/>
                    <ul className={classes.Cats}>
                        {showCats()}
                    </ul>

                    <i className="bi bi-tags"/>
                    <ul className={classes.Tags}>
                        {showBlogTags()}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default Card;
