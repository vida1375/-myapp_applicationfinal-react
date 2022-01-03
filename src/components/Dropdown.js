import react ,{useState , useEffect,useRef}from "react";
const Dropdown = ({options,label}) =>{
    const[color,setColor] = useState('red');
    const myRef = useRef();
    const renderoptions = () =>{
        return options.map(({value , title}) => {
            return <option key={value} value={value}>{title}</option>
        })
    }
    useEffect(() =>{
        myRef.current.style.color=color;
    },[color])
    return(
        <section>
            <label>{label}</label>
            <br />
            <select onChange={(e)=> setColor(e.target.value)}>
                {renderoptions()}
            </select>
            <p ref={myRef}>this is {color} </p>
        </section>
    )
}
export default Dropdown;