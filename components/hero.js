import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import Image from "next/image";

import renderHTML from "react-render-html";
import Link from "next/link";
import {API} from "../config";
import useSWR from "swr";
import {fetcher} from "../../../../tai_last/frontend/components/axios/axios";

function BlogCarousel() {
    const [index, setIndex] = useState(0);
    const [nextIcon] = useState(<span className="carousel-control-next-icon bi bi-chevron-right"
                                      aria-hidden="true"/>);
    const [prevIcon] = useState(<span className="carousel-control-next-icon bi bi-chevron-left"
                                      aria-hidden="true"/>);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const {data: blogs, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!blogs) return <div id='preloader'/>


    const renderCarouselItem = () => {
        return blogs && blogs.map(d => {
            const myLoader = () => {
                return photoLink;
            }

            const photoLink = `${API}/blog/photo/${d.slug}`
            return <Carousel.Item key={d._id} className='carousel-item'>
                <Image
                    src={photoLink}
                    loader={myLoader}
                    layout="fill"
                    alt={d.title}
                    className='img-fluid'
                    objectFit="cover"
                />
                <div className="carousel-container ">
                    <div className="container">
                        <h2 className="animate__animated animate__fadeInDown"><span>{d.title.toLowerCase()}</span></h2>
                         {renderHTML(d.excerpt)}


                          <Link href={`/blogs/${d.slug}`}>
                                <a className="btn-get-started animate__animated animate__fadeInUp">Read
                                    More
                                </a>
                            </Link>
                    </div>
                </div>
            </Carousel.Item>
        })

    }

    return (
        <section id="hero">
            <Carousel
                activeIndex={index} onSelect={handleSelect} fade
                nextLabel=''
                prevLabel=''
                nextIcon={blogs.length && blogs.length > 1 && nextIcon}
                prevIcon={blogs.length && blogs.length > 1 && prevIcon}>
                {renderCarouselItem()}
            </Carousel>
        </section>
    );
}

export default BlogCarousel