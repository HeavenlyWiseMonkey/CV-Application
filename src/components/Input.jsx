import '../styles/InputArea.css'

export default function Input({name, type="text"}) {
    const max = (type === 'date') ? new Date().toISOString().split("T")[0] : null;
    return <div className="inputArea">
        <label htmlFor={name}>{name} </label>
        <input type={type} id={name} max={max}></input>
    </div>
}