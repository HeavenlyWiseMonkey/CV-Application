import '../styles/InputArea.css'

export default function Input({name, type="text", value, onChange, index}) {
    let inputType;
    const id = name + ' ' + index;
    (type==="text") ? inputType = <input id={id} value={value} onChange={onChange} ></input>:
    inputType = <textarea id={id} value={value} onChange={onChange} ></textarea>;
    return <div className="inputArea">
        <label htmlFor={id}>{name} </label>
        {inputType}
    </div>
}