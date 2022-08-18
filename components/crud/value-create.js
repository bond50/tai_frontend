import React, {useState} from 'react';
import Alert from "../messages/Alert";
import axiosInstance from "../axios/axios";


const ValueCreate = () => {
    const [values, setValues] = useState({
        error: '',
        success: false,
        loading: false,
        title: '',
        content: '',
    });
    const {title, error, success, content,loading} = values;

    const handleNameChange = (e) => {
        setValues({
            ...values,
            title: e.target.value,
        });
    };

    const handleContent = (e) => {
        setValues({
            ...values,
            content: e.target.value,
        });
    };


    function handleSubmit(e) {
        e.preventDefault()
        setValues({
            ...values,
            loading: true,
            success: false,

        });
        const data = {title, content}
        axiosInstance.post('/core-values', data)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then(r => {
                setValues({
                    ...values,
                    success: true,
                    loading: false,
                    content: '',
                    title: ''
                });
            })
            .catch(e => {
                setValues({
                    ...values,
                    error: e.error,
                    loading: false,
                });
            })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    {success && <Alert msg={'Added successfully'} type="success" label="Success"/>}
                    {error &&  <Alert msg={error} type="danger" label="Danger"/>}
                </div>
                <div className="input-group mb-3">
                    <input
                        value={title}
                        required
                        onChange={handleNameChange}
                        type="text"
                        className="form-control"
                        placeholder="core value"/>
                </div>

                <div className="input-group mb-3">
                    <textarea
                        required
                        value={content}
                        placeholder="explanation"
                        className="form-control"
                        onChange={handleContent}
                        rows='4'
                    />
                </div>
                <button type="submit" className="btn btn-primary">{loading?'Sending':'Submit'}</button>
            </form>
        </>
    );
};

export default ValueCreate;