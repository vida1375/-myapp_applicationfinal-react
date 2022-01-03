import React ,{useState,useEffect} from "react";
import axios from "axios";
const Translat = () => {
    const[text,setText] = useState('');
    const[result,setResult] = useState('');
    useEffect(()=>{
        axios.post(
            'https://translation.googleapis.com/language/translate/v2',
            {},
            {
              params: {
                q: text,
                target: 'fa',
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
              },
            }
          )
          .then((response) =>{
              setResult(response.data.data.translations[0].translatedText)
          })
          .catch((error) =>{
              console.log(error)
          })
    } , [text])
    return(
        <section>
            <input type="text" value={text} onChange={(e) =>setText(e.target.value) } />
            <p>{result}</p>
        </section>
    )
}
export default Translat;