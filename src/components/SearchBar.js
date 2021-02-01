import Button from "./Button";
import {useState} from "react";

function SearchBar({showEdit, onShow}) {
    const [text, setText] = useState('Search')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please enter value')
            return
        }

    }


    return (
        <div className={`searchBar ${showEdit ? 'searchBarLg' : ''}`} >
            <div className="search">
                <label htmlFor="">{text}</label>
                <input type="text" placeholder={'Search item'}/>
            </div>
            <div className="editBtnBox">
            <Button text={showEdit ? 'Close' : 'Edit Label'} style={'editBtn'} onClick={onShow}/>
            </div>
            {showEdit && <div className="editFormBox">
                <form action="" onSubmit={onSubmit} className={'editForm'} >
                    <label htmlFor="">Set label text:</label>
                    <br/>
                    <input type="text" placeholder={text} className={'editInput'}
                           onChange={(e) => setText(e.target.value)}/>
                    <input type="submit" value={'Save'} onClick={onShow} className={'editFormBtn'}/>
                </form>
            </div>}
        </div>
    );
}

export default SearchBar;
