import React from 'react';
import Link from 'next/link'
import classes from '../styles/AltHero.module.css'
import Image from "next/image";

const AltHero = () => {
    return (
        <section className={`${classes.Hero} d-flex align-items-center `}>
            <Image
                src={'/hero2.jpg'}
                layout="fill"
                alt={'hero'}
                priority={true}
                className='img-fluid'
                objectFit="cover"

            />
            <div className={`container   ${classes.container}`} data-aos="zoom-out" data-aos-delay="100">
                <h1>Tai Lifestyle Limited</h1>
                <h2 >We offer professional services and products tailored to serve the interest of our
                    clients. We look forward to opportunities that will give us a room to
                    provide our acquired expertise and experience gained over the years of our operation.
                </h2>
                <div className="d-flex ">
                    <Link href='/about/history'>
                        <a className={classes.btnStart}>Read more about this</a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AltHero;