import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import {QuillFormats, QuillModules} from '/..../../helpers/quill';

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

const CreateForm = ({onSubmit, btnCapture,iconValue, updating, handleChange, handleBody, bodyValue, titleValue}) => {
    const form = () => {
        return (
            <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                    <label className="text-muted">Title</label>
                    <input
                        type="text"
                        name='title'
                        className="form-control"
                        value={titleValue}
                        onChange={handleChange('title')}/>
                </div>
                {updating && <div className="form-group mb-3">
                    <label className="text-muted">Icon from boxicons </label>
                    <input
                        type="text"
                        placeholder='e.g bx bx-user'
                        name='icon'
                        className="form-control"
                        value={iconValue}
                        onChange={handleChange('icon')}/>
                </div>
                }

                <div className="form-group mb-3">
                    <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={bodyValue}
                        placeholder="Write something amazing..."
                        onChange={handleBody}
                    />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">
                        {btnCapture}
                    </button>
                </div>
            </form>
        );
    };


    return (<>
            {form()}
        </>
    );
};

export default CreateForm;