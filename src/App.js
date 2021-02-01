import './index.css';
import Header from "./components/Header";
import Table from "./components/Table";
import {useState} from "react";
import SearchBar from "./components/SearchBar";


function App() {
    const [showEdit, setShowEdit] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [columns, setColumns] = useState([{
        id: 1,
        text: 'Id'
    }, {
        id: 2,
        text: 'Name'
    },
    ])


    const addColumn = (name) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newColumn = {id, ...name}
        setColumns([...columns, newColumn])
    }


    return (
        <div className="app">
            <Header/>
            <SearchBar onShow={() => setShowEdit(!showEdit)} showEdit={showEdit}/>
            <Table onShow={() => setShowAdd(!showAdd)} showAdd={showAdd} onAdd={addColumn} columns={columns}/>
        </div>
    );
}

export default App;
