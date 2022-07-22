import classes from '../../../styles/downloads.module.css'
import React, {Fragment, useEffect, useState} from 'react';
import dayjs from "dayjs";
import axios from "axios";

import {API} from "../../../config";
import Filters from "./filters";

const DownloadList = ({files}) => {
    const [downloads, setLoadedDownloads] = useState(files)
    const [buttons, setButtons] = useState([])
    const [active, setActive] = useState('8&03ubvgfd7b4e36e0f12d44')


    const loadButtons = () => {
        let myArr = [{_id: '8&03ubvgfd7b4e36e0f12d44', name: 'All'}]
        axios.get(`${API}/document-tags`)
            .then(res => {
                res.data.map(({_id, name}) => {
                    myArr.push({_id, name})
                })
                setButtons(myArr)
            })
    }

    useEffect(() => {
        loadButtons()
    }, [])

    function filterTags(id) {
        setActive(id)

        if (id === '8&03ubvgfd7b4e36e0f12d44') {
            setLoadedDownloads(files)
        } else {
            let filteredArr = files.filter((d) => {
                const tags = [d.tags];
                return tags.some(f => f.includes(id))

            });
            setLoadedDownloads(filteredArr)
        }


    }


    function handleDownload(file, id) {
        axios.get(file, {
            responseType: "blob",
        }).then(function (response) {

            const url = window.URL.createObjectURL(
                new Blob([response.data], {
                    type: response.headers["content-type"],
                })
            );

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", id);
            document.body.appendChild(link);
            link.click();

        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <Fragment>
            {/*<GeneralPageHeader*/}
            {/*    title='Downloads'>*/}
            {/*</GeneralPageHeader>*/}

            <section className={classes.Download}>
                <Filters
                    buttons={buttons}
                    active={active}
                    handleTagFilter={filterTags}/>

                <div className={classes.DownloadWrapper} data-aos="slide-up" data-aos-delay="100">
                    {downloads.map(file => {
                        return <div className={classes.Wrapper} key={file._id}>
                            <div className={classes.Header}>
                                <i className="bi bi-file-earmark-pdf-fill"
                                   style={{backgroundColor: 'inherit', color: '#f03c02'}}/>
                                <span>{file.title}</span>
                            </div>
                            <div className="d-flex align-items-center flex-column m-2">
                                <div className={classes.Date}>Uploaded
                                    on <span>{dayjs(file.createdAt).format("ddd, MMM D, YYYY h:mm A")}</span></div>
                                <div className={classes.Size}>File size :<span>{file.fileSize}</span></div>
                            </div>
                            <div className={`${classes.Btn} text-center`}
                                 onClick={() => handleDownload(file.filePath, file._id)}>
                                <span className="align-middle">Download</span>
                            </div>
                        </div>
                    })}
                </div>


            </section>


        </Fragment>


    );
};

export default DownloadList;


//https://stackoverflow.com/questions/61621451/filtering-js-array-of-objects-based-on-tags
