import React from 'react';

const SideCatTags = ({handleChange, categories, tags}) => {
    return (
        <>
            {handleChange &&
            <div className="form-group mb-3">
                <h5>Featured image</h5>
                <hr/>
                <small className="text-muted">Max size: 2mb</small>
                <br/>
                <label className="btn btn-primary btn-sm ">
                    Upload featured image
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden/>
                </label>
            </div>
            }

            {categories && <div className='mb-3'>
                <h5>Categories</h5>
                <hr/>
                <div style={{maxHeight: '200px', overflowY: 'auto'}}
                     className='list-group list-group-flush'>{categories()}</div>
            </div>}
            {tags && <div>
                <h5>Tags</h5>
                <hr/>
                <div style={{maxHeight: '200px', overflowY: 'auto'}}
                     className='list-group list-group-flush'>{tags()}
                </div>
            </div>
            }
        </>
    )

}

export default SideCatTags;