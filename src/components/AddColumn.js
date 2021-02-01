import {useState} from "react";

function AddColumn({onAdd}) {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Fill in the value')
            return
        }

        onAdd({text})


        setText('')

    }


    return (
        <form action="" onSubmit={onSubmit} className={'addForm'}>
            <label htmlFor="">Column Name: </label>
            <input className={'addInput'} type="text" placeholder={'Add new column'}  value={text} onChange={(e) => setText(e.target.value)}/>
            <br/>
            <input type="submit" value={'Add'} className={'submit'} />
        </form>
    );
}

export default AddColumn;
