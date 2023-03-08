import React from "react";


const  Add =  ({
  name,
  price,
  changeName, 
  changePrice, 
  handleNameBlur, 
  handlePriceBlur,
addProducts, 
inputValid
}) =>{

    return (
         <div className="add">
    <label>Product name</label>
    <input 
    onInput={changeName} 
    onBlur={handleNameBlur}
    type="text" 
    value={name} 
    />
    <label>Product price</label>
    <input 
    onInput={changePrice} 
    onBlur={handlePriceBlur}
    type="number" 
    value={price}
    />
    <button 
    onClick={addProducts} 
    type="button"
    disabled={!inputValid}
    >
      Add
      </button>
  </div>
    )
}

export default Add;