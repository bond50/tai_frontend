import React from 'react';
import UploadForm from "../../components/reusables/forms/upload-form";
import useUpload from "../../hooks/useUpload";
import SideCatTags from "../../components/reusables/forms/side-cat-tags";


const UploadFiles = () => {
    const {
        loading,
        successMessage,
        error,
        title,
        loadedTags,
        handleTagsToggle,
        handleChange,
        multipleFileChange,
        uploadMultipleFiles
    } = useUpload('documents', 'document-tags', '/files-upload')


    const showTags = () => {
        return (
            loadedTags && loadedTags.map((t, i) => (
                <label key={i} className="list-group-item border-0">
                    <input onChange={() => handleTagsToggle(t._id)} type="checkbox"
                           className="form-check-input me-1"/>
                    {t.name}
                </label>
            ))
        );
    };


    return (

        <div className="container-fluid m-5">
            <div className="row">
                <div className="col-md-8">
                    <p>Files uploaded hear will appear under <strong>Downloads section</strong></p>
                    <p>Only pdf files are supported</p>
                    <UploadForm
                        title={title}
                        handleChange={handleChange}
                        error={error}
                        successMessage={successMessage}
                        btnClick={uploadMultipleFiles}
                        handleMultipleFile={multipleFileChange}
                        loading={loading}/>
                </div>
                <div className="col-md-4">
                    <SideCatTags
                        tags={showTags}/>
                </div>
            </div>
        </div>

    );
};

export default UploadFiles;