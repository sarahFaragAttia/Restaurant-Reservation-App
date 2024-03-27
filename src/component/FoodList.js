import { useSelector, useDispatch } from "react-redux";
import { removeItemFood } from "../ReduxStore/foodListSlice"



const FoodList = ({ index }) => {
    const dispatch = useDispatch()
    const NameFoodList = (useSelector((state) => state.foodList.value))
    const handleClick = (index) => {
        dispatch(removeItemFood(index))
    }
    return (

        <div className="overflow-x-auto w-50">
            {NameFoodList.map((item, i) => { return i === index && item.food.map((el, i) => <p key={i} className="d-inline m-1" onClick={() => handleClick(i)}>{el}</p>) }

            )}
        </div>
    )
}

export default FoodList;