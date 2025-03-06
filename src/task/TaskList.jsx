export default function TaskList({items = []}) {
    return (
        <div>
            <h1>List</h1>
            <ul>
                {items.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}
