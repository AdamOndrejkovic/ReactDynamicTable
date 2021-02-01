import Button from "./Button";
import AddColumn from "./AddColumn";
import Column from "./Column";



function Table({showAdd, onShow, onAdd, columns}) {
    const tableData = [{
        id: 1,
        name: 'Mark'
    }, {
        id: 2,
        name: 'Paul'
    },

    ]

    return (
        <div className='tableContainer'>
            <div className="add">
                <Button text={showAdd ? 'Close' : 'Add'}  onClick={onShow} showAdd={showAdd} style={'addBtn'}/>
            </div>
            {showAdd && <AddColumn onAdd={onAdd} onShow={onShow}/>}
            <table>
                <thead>
                <tr>{columns.map((column) => (<Column key={column.id} column={column.text}/>))}</tr>
                </thead>
                <tbody>
                {tableData.map((data) => <tr key={data.id}><td>{data.id}</td><td>{data.name}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
