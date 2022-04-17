import {listSingle} from "../../actions/team";
import Link from "next/link";
import classes from '../../styles/Userprofile.module.css'
import Head from "next/head";
import {API, APP_NAME, DOMAIN} from "../../config";
import ContactForm from "../../components/form/ContactForm";
import Image from "next/image";
import React from "react";
import Layout from "../../components/layout";


const UserName = ({user, query}) => {

    const head = () => (
        <Head>
            <title>
                {user.username} | {APP_NAME}
            </title>
            <meta name="description" content={`Articles  by ${user.username}`}/>
            <link rel="canonical" href={`${DOMAIN}/team/${query.username}`}/>
            <meta property="og:title" content={`${user.username}| ${APP_NAME}`}/>
            <meta property="og:description" content={`Contact ${user.username}`}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/team/${query.username}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>

            <meta property="og:image"
                  content={`/herp.jpg`}/>
            <meta property="og:image:secure_url"
                  content={`/herp.jpg`}/>
            <meta property="og:image:type" content="image/png"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}

        </Head>
    );


    const photoLink = `${API}/member/photo/${user.username}`
    const myLoader = () => {
        return photoLink;
    }

    return (
        <>
            {head()}
            <Layout simple title={`Contact ${user.name}`}>
                <section >
                    <div className="container ">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className={`card ${classes.Card} `}>
                                    <Image
                                        loader={myLoader}
                                        src={photoLink}
                                        width={620}
                                        height={480}
                                        layout="responsive"
                                        className="card-img-top" alt="..."/>
                                    <div
                                        className={`card-body ${classes.CardBody}  d-flex flex-column align-items-center`}>
                                        <h2>{user.name}</h2>
                                        <h3>{user.companyRole ? user.companyRole : "Company Role not available"}</h3>


                                        <div className={`${classes.Links} mt-2`}>
                                            {user.twitter &&
                                            <Link href={user.twitter}>
                                                <a className="twitter"><i className="bi bi-twitter"/></a>
                                            </Link>
                                            }
                                            {
                                                user.facebook &&
                                                <Link href={user.facebook}>
                                                    <a className="facebook"><i className="bi bi-facebook"/></a>
                                                </Link>

                                            }
                                            {
                                                user.instagram &&
                                                <Link href={user.instagram}>
                                                    <a className="instagram"><i
                                                        className="bi bi-instagram"/>
                                                    </a>
                                                </Link>
                                            }
                                            {user.linkedIn &&
                                            <Link href={user.linkedIn}>
                                                <a className="linkedin"><i className="bi bi-linkedin"/></a>
                                            </Link>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                {user.about && <div className={`card ${classes.Card}`}>
                                    <div className={`card-body ${classes.CardBody}`}>
                                        <h5 className={classes.CardTitle}>About {user.name}</h5>
                                        <p>{user.about}</p>
                                    </div>
                                </div>}
                                 <ContactForm
                                    authorEmail={user.email}/>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
        ;
};
export const getServerSideProps = (
    {
        query
    }
) => {

    return listSingle(query.username).then(data => {

        if (data.error) {
            console.log(data.error)
        } else {
            return {
                props: {user: data.user, query}
            }
        }
    })
}

export default UserName;