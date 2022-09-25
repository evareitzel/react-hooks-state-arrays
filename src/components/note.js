// Eva's notes

setFoods([...foods, newFood])

<li onClick={() => onClickRemoveFood} key={food.id}>
  {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
</li>


// Course notes

// delete food LI
function handleLiClick(id){
  const newFoodArray = foods.filter(food => food.id !== id)
  setFoods(newFoodArray)
}