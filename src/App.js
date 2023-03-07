import React, {useState} from "react";
import Product from "./components/Product";
import {v4 as uuid} from 'uuid';

function App () {

  const productsList = [
  {name: 'Iphone', price: 800},
  {name: 'Watch', price: 100},
  ];
  const [products, setProducts] = useState(productsList)
  const [newProducts, setNewProducts] = useState({name: '', price: ''})

  const changeName = (e)=>{
   setNewProducts((prev)=>({...prev, name: e.target.value}))
  }

  const changePrice = (e)=>{
    setNewProducts((prev)=>({...prev, price: e.target.value}))
  }

  const addProducts = () => {
    if(newProducts.name.trim() && newProducts.price){
      setProducts((prev) => ([...prev, {...newProducts, id: uuid()}]))
    setNewProducts({name: '', price: ''})
   
  }}

  const removeProduct = (id) => {
    const newList =  products.filter(product => product.id !== id);
    setProducts(newList);
  }

return (
<div className="wrapper">
  <div className="add">
    <label>Product name</label>
    <input onInput={changeName} type="text" />
    <label>Product price</label>
    <input onInput={changePrice} type="number" />
    <button onClick={addProducts} type="button">Add</button>
  </div>
  <div className="list">
    {products.map(product => {

    return(
    <Product 
    onRemove={removeProduct} 
    key={uuid()} 
    id={product.id} 
    name={product.name} 
    price={`${product.price} $`} 
    />)
    })}
    
  </div>
</div> 
);
}

export default App;