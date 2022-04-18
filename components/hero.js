import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import Link from "next/link";
import renderHTML from 'react-render-html';
import {trim} from "./reusables/functions/trim";
import useSWR from "swr";
import {fetcher} from "./axios/axios";

function BlogCarousel() {

    const [index, setIndex] = useState(0);
    const [nextIcon] = useState(<span className="carousel-control-next-icon bi bi-caret-right-fill"
                                      aria-hidden="true"/>);
    const [prevIcon] = useState(<span className="carousel-control-prev-icon bi bi-caret-left-fill"
                                      aria-hidden="true"/>);
    const {data:heroData, error} = useSWR({url: `/featured-services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!heroData) return <div id='preloader'/>


    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const renderCarouselItem = () => {
        return heroData && heroData.map((d, i) => {
            return <Carousel.Item key={i}>
                <div className="carousel-container">
                    <div className="carousel-content ">
                        <h2 className="animate__animated animate__zoomIn ">{d.title.toLowerCase()}</h2>
                        <div className='animate__animated animate__zoomIn'> {renderHTML(trim(d.excerpt, 250))}</div>
                        <Link href={`/tai/${d.slug}`}>
                            <a className="btn-get-started animate__animated animate__zoomIn ">Read more
                                about {d.title}</a>
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
        })

    }


    return (
        <section id='hero' className='d-flex justify-content-center align-items-center'>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect} fade
                nextLabel=''
                prevLabel=''
                nextIcon={heroData.length && heroData.length > 1 && nextIcon}
                prevIcon={heroData.length && heroData.length > 1 && prevIcon}>
                {renderCarouselItem()}
            </Carousel>
        </section>
    );
}

export default BlogCarousel