import Link from 'next/link';
import React from "react";
import renderHTML from 'html-react-parser';
import dayjs from 'dayjs';
import {API} from '../../config';
import classes from '../../styles/BlogCard.module.css'
import Image from "next/image";


const Card = ({blog}) => {
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
            <div className={classes.Image}>
                {blog.imgWidth && blog.imgHeight && <Image
                    loader={myLoader}
                    className="img-fluid"
                    layout="responsive"
                    width={blog.imgWidth}
                    height={blog.imgHeight}
                    src={imgSrc}
                    alt={blog.title}
                />}
            </div>
            <h2 className={classes.Title}>
                {blog.title.toLowerCase()}
            </h2>

            <div className={classes.Meta}>
                <ul>

                    <li className="d-flex align-items-center">
                        <i className="bi bi-person"/>
                        <span
                        >{blog.postedBy.username}</span>
                    </li>

                    <li className="d-flex align-items-center">
                        <i className="bi bi-calendar"/>
                        <span>{dayjs(blog.updatedAt).format('ddd, MMM D, YYYY h:mm A')} </span>
                    </li>
                </ul>
            </div>
            <div className={classes.Content}>
                <div className={classes.Body}>
                    {renderHTML(blog.body)}
                </div>
            </div>
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
        </article>
    );
};

export default Card;
