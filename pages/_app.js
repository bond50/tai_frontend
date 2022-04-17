import '../styles/globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";


function MyApp({Component, pageProps}) {

    useEffect(() => {
        AOS.init(
            {duration: 1500, once: true},
        )
    },)


    return <Component {...pageProps}/>
}

export default MyApp
