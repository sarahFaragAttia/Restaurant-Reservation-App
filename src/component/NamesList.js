

import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from "../ReduxStore/clientsNameSlice"
import { useEffect } from 'react'
import { addName } from "../ReduxStore/foodListSlice"
const NamesList = () => {

  const clients = useSelector((state) => state.clients.value)
  const NameFoodList = useSelector((state) => state.foodList.value)
  const dispatch = useDispatch();

  useEffect(() => localStorage.setItem('foodList', JSON.stringify(NameFoodList)), [NameFoodList])


  const handleClick = (index) => {
    dispatch(addName({ name: clients[index], food: [] }))

    dispatch(removeItem(index))
  }
  return (
    clients.map((item, index) =>

      <div key={index} onClick={() => handleClick(index)} className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">{item}</div>
    )
  )
}

export default NamesList;




