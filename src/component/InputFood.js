import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../ReduxStore/foodListSlice"
import {useState,useRef} from "react"
const InputFood = ({ index }) => {

    const [foodValue, setFoodValue] = useState("")

    const AutoFocus = useRef()

    const NameFoodList = (useSelector((state) => state.foodList.value))
    const dispatch = useDispatch()

    const handleClick = () => {
        if (!foodValue) return
        dispatch(addItem({ index, foodValue }))
        console.log(NameFoodList)
        setFoodValue("")
        AutoFocus.current.focus()

    }

    return (
        <>
            <div className='inputName foodList position-absolute input-group  mb-3 m-1 end-0 bottom-0'>
                <input ref={AutoFocus} value={foodValue} className=" border border-1 form-control  " type="text" onChange={(e) => setFoodValue(e.target.value)} placeholder="Food List" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick} >Add</button>
            </div>

        </>
    )


}
export default InputFood;