import React,{useState} from 'react'
import HashGenFunc from '../HashGenFunc';
import './HashGen.css'

const HashGenerator = () => {
    const [result, setResult] = useState("");
    const [key, setKey] = useState("");
    const [payload, setPayload] = useState("");

    const generate=async ()=>{
        const res = await HashGenFunc(key, payload);
        console.log(res)
        setResult(res)
    }
    const handleChange=(e) =>{
        if(e.target.name === "payload"){
            setPayload(e.target.value);
        }else if(e.target.name === "key"){
            setKey(e.target.value)
        }
    }
  return (
    <div>
       <div className='maindiv'>
            <div className='payload'>Payload</div>
            <div className="input">
            <textarea className='text' onChange={handleChange} name="payload"></textarea>
            </div>
            <div className='key'>Key</div>
            <div className="input"><textarea className='text' onChange={handleChange} name="key"></textarea></div>
            <div className='output1'>Output</div>
            <div className="input"><textarea className='output' readOnly value={result}></textarea></div>
            <div className='input'><button className='btn' onClick={generate}>Generate</button></div>
        </div>
    </div>
  )
}

export default HashGenerator
