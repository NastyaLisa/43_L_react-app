import React, {useState} from "react";
import Product from "./components/Product";
import Add from "./components/Add";
import {v4 as uuid} from 'uuid';

function App () {

  const productsList = [
  {name: 'Iphone', price: 800},
  {name: 'Watch', price: 100},
  ];
  const [products, setProducts] = useState(productsList);
  const [newProducts, setNewProducts] = useState({name: '', price: ''});
  const [inputValid, setInputValid] = useState(true);

  const changeName = (e)=>{
   setNewProducts((prev)=>({...prev, name: e.target.value}));
   setInputValid(true);
  }

  const changePrice = (e)=>{
    setNewProducts((prev)=>({...prev, price: e.target.value}));
    setInputValid(true);
  }

  const addProducts = () => {
    if(newProducts.name.trim().length > 1 && +newProducts.price > 0 ){
      setProducts((prev) => ([...prev, {...newProducts, id: uuid()}]))
    setNewProducts({name: '', price: ''})
    setInputValid(false)
   
  }
}

  const removeProduct = (id) => {
    const newList =  products.filter(product => product.id !== id);
    setProducts(newList);
  }

  const handleNameBlur = () => {
    if (newProducts.name.trim().length === 0)  {
      setNewProducts((prev) => ({ 
        ...prev,
         name: ''}));
         setInputValid(false)
    }
  };

  const handlePriceBlur = () => {
    if (+newProducts.price === 0) {
      setNewProducts((prev) => ({ 
        ...prev, 
        price: ''}));
        setInputValid(false)
    }
  };

return (
<div className="wrapper">
  <Add 
  name={newProducts.name} 
  price={newProducts.price}
   changeName={changeName}
  changePrice={changePrice}
  handleNameBlur={handleNameBlur}
  handlePriceBlur={handlePriceBlur}
  addProducts={addProducts} 
  inputValid={inputValid}
  />

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

