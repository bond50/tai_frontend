import classes from '../../../styles/Backdrop.module.css';

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}/> : null
);

export default Backdrop;