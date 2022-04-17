import React from 'react';
import Image from "./reusables/lazy/Image";
import Link from "next/link";
import {API} from "../config";

const Team = ({members}) => {


    return (
        <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
            <div className="container">
                <div className="row">
                    {members && members.map(({
                                                 _id,
                                                 companyRole,
                                                 photoDimensions,
                                                 username,
                                                 facebook,
                                                 instagram,
                                                 name,
                                                 twitter
                                             }, i) => {
                        const imgSrc = `${API}/member/photo/${username}`
                        return < div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up"
                                     data-aos-delay={`${i + 1}00`} key={_id}>
                            <div className="member">
                                <div className="member-img">
                                    {
                                        photoDimensions && username && <Image
                                            width={photoDimensions.width}
                                            height={photoDimensions.height}
                                            src={imgSrc}

                                            className="img-fluid"
                                            alt="user profile"
                                        />
                                    }
                                    <div className="social">
                                        {twitter && <Link href={twitter}>
                                            <a> <i className="bi bi-twitter"/></a>
                                        </Link>
                                        }
                                        {facebook &&
                                        <Link href={facebook}>
                                            <a><i className="bi bi-facebook"/></a>
                                        </Link>
                                        }
                                        {instagram && <Link href={instagram}>
                                            <a><i className="bi bi-instagram"/></a>
                                        </Link>}
                                    </div>

                                </div>
                                <div className="member-info">
                                    <h4>{name}</h4>
                                    <span>{companyRole}</span>
                                        Contact
                                        <Link href={`/team/${username}`}>
                                        <a> {name}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;