import "./Input.css";

export default function Input({ inputValue, onChange, placeholder }){
    return <input 
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}/> 
    
}

