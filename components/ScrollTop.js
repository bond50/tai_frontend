import {useEffect, useState, useCallback} from 'react';
import classes from '../styles/BackTop.module.css'

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    const scrollToTop = useCallback(() => window.scrollTo({
        top: 0,
        behavior: "smooth"
    }), [])

    useEffect(() => {
        function toggleVisibility() {
            if (window.pageYOffset > 50) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [scrollToTop]);


    let assignedClasses = [`${classes.backTop} d-flex align-items-center justify-content-center`];
    if (visible) {
        assignedClasses.push(`${classes.active}`);
    }

    return (
        <div onClick={scrollToTop} className={assignedClasses.join(' ')}><i
            className="bi bi-arrow-up-short"/>
        </div>
    );
};

export default ScrollTop;