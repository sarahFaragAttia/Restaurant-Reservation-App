// import function we wanna apply on the array from the slice
import { addName } from '../ReduxStore/clientsNameSlice'
// import useselector & dispatch(which enable us to apply method or function ) and rootstate(state which array)
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'


const InputNames = () => {

  const [nameValue, setNameValue] = useState("")
  const clients = useSelector((state) => state.clients.value)
  useEffect(() => localStorage.setItem("nameList", JSON.stringify(clients)), [clients])


  console.log(clients)
  const dispatch = useDispatch()


  const handleClientName = () => {
    if (!nameValue) return;
    dispatch(addName(nameValue));
    setNameValue("")
    console.log(clients)

    // return nameValue && dispatch(addName(nameValue))
  };
  return (



    <div className='inputName  name position-fixed bottom-0 input-group mb-3   '>
      <input autoFocus={true} value={nameValue} onChange={(e) => setNameValue(e.target.value)} className=" border border-1 form-control  " type="text" placeholder="Client's Name" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClientName}>Add</button>
    </div>

  )
}

export default InputNames;