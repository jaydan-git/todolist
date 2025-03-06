import {useState} from "react";

export default function TaskForm({setItems}) {
    const [item, setItem] = useState("");

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setItems((draft) => {
            draft.push(item);
        })
        setItem("");
    }

    return (
        <div>
            <h1>Buat TodoList</h1>
            <form>
                <input value={item} onChange={handleChange}/>
                <button onClick={handleClick}>Tambahkan</button>
            </form>
        </div>
    )
}
