import { useEffect, useState } from "react";
import React from "react";

export const ByteToFloat = () => {
  const buffer = new ArrayBuffer(4);
  const f32 = new Float32Array(buffer);
  const ui8 = new Uint8Array(buffer);

  interface BytesInterface {
    [key: string]: string
  }
  
 
  const [byteArray, setByteArray] = useState({
    'first_byte': '0',
    'second_byte': '0',
    'third_byte': '20',
    'fourth_byte': '41'
  })
  let [floatNumber, setFloatNumber] = useState('')
  let [isFloat, setIsFloat] = useState(false) 


  useEffect( () => {
    if(isFloat) {
      setBytesFromFloat()
    }
  }, [floatNumber])

  useEffect( () => {
    if(!isFloat) {
      calculateFloat(byteArray)
    }
  }, [byteArray])


// **********************************

  function setBytes(e: React.ChangeEvent<HTMLInputElement>) {
    setIsFloat(false)
    setByteArray({
      ...byteArray,
      [e.target.id]: (e.target.value)
    })
  }

  function calculateFloat(byteArray: BytesInterface) {
    Object.keys(byteArray).forEach( (item, i) => {
      ui8[i] =  parseInt(byteArray[item], 16)
    })
    let floatNumber = (+f32[0].toString(10)).toFixed(3)
    setFloatNumber(floatNumber)
  } 

  // *********************************

  function setFloat(e:  React.ChangeEvent<HTMLInputElement>) {
    setIsFloat(true)
    setFloatNumber(e.target.value) 
    setBytesFromFloat()
  }

  function setBytesFromFloat() {
    f32[0] = parseFloat(floatNumber)
    setByteArray({
      'first_byte': ui8[0].toString(16),
      'second_byte': ui8[1].toString(16),
      'third_byte': ui8[2].toString(16),
      'fourth_byte': ui8[3].toString(16),
    })
  }
 
   // *********************************


  return (
    <>
      <h4 className="center">Перевод byte во float</h4>
      <div className="row">
        <form action="" className="col s12 m9 offset-m2">
          <div className="col s6 m6">
            <p>Bytes(HEX):</p>
            <input
              placeholder="First byte HEX"
              id="first_byte"
              type="text"
              className="validate col s12"
              onChange = {setBytes}
              value = {byteArray["first_byte"]}
            ></input>
            <input
              placeholder="Second byte HEX"
              id="second_byte"
              type="text"
              className="validate col s12"
              onChange = {setBytes}
              value = {byteArray["second_byte"]}
            ></input>
            <input
              placeholder="Third byte HEX"
              id="third_byte"
              type="text"
              className="validate col s12"
              onChange = {setBytes}
              value = {byteArray["third_byte"]}
            ></input>
            <input
              placeholder="Fourth byte HEX"
              id="fourth_byte"
              type="text"
              className="validate col s12"
              onChange = {setBytes}
              value = {byteArray["fourth_byte"]}
            ></input>
          </div>
          <div className="col s6">
            <p>Float number: </p>
            <input
              placeholder="Float number"
              id="float_number"
              type="text"
              className="validate col s12"
              value={floatNumber}
              onChange={setFloat}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};
