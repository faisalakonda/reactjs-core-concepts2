import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products=[
    {name: 'Apple', price: '2300'},
    {name: 'Apple1', price: '2333'},
    {name: 'Apple2', price: '2330'},
    {name: 'Apple3', price: '21200'},
    {name: 'Apple4', price: '2200'},
    {name: 'Apple5', price: '4400'},
  ]
  return (
    <div className="App">
      {
        <Counter></Counter>
      }
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Apple" price="200"></Product>
      <Product name="Lenevo" price="100"></Product>
      <Product name="Samsung" price="400"></Product>
      <Product name="Butterfly" price="300"></Product> */}
    </div>
  );
}
function Product(props){
  return(
    <div className='product'>
      <h1>Product Name: {props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount]= useState(0)
  const increseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


export default App;
