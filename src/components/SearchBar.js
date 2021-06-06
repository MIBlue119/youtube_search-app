import React, { useState } from 'react';


const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        // TODO : Make sure we call
        // callback from parent component
        props.onFormSubmit(term)
    }
    return (
        <div className="search-bar ui segment">
            <form
                onSubmit={onFormSubmit}
                className="ui form"
            >
                <div className="field">
                    <label>Video Search For Youtube</label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange}
                        placeholder="Youtube URL"
                    />
                    {/* {console.log(term)} */}
                </div>
            </form>
        </div>
    );
};


export default SearchBar;