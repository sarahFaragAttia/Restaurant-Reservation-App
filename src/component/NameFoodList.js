import { useSelector, useDispatch } from "react-redux"
import InputFood from './InputFood'
import FoodList from "./FoodList"
import { removeItem } from "../ReduxStore/foodListSlice"
const NameFoodList = () => {


    const NameFoodList = (useSelector((state) => state.foodList.value))

    const dispatch = useDispatch()
    const handleClick = (index) => {
        dispatch(removeItem(NameFoodList[index]))
    }

    return (

        NameFoodList.map((item, index) =>
            <div key={index} className="shadow-lg position-relative h-25 p-3 mb-5 bg-body-tertiary rounded">
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-inline ">{item.name}</div>
                    <button type="button" onClick={() => handleClick(index)} class="btn btn-dark">Delete</button>
                </div>
                <div>
                    <FoodList index={index} />
                    <InputFood index={index} />
                </div>

            </div>

        )



    )
}

export default NameFoodList;