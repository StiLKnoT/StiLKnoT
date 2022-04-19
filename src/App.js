import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Card from './components/Card';
import './App.scss';
import 'macro-css'
import Header from './components/header';
import Drawer from './components/Drawer';
import axios from 'axios';
import Home from './pages/home';





function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([ ]);
  const [favorites, setFavorites] = React.useState([ ]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = useState(false)

  React.useEffect(()=>{
    axios.get('https://62373d82f5f6e28a154abef5.mockapi.io/items')
    .then((res)=>{
      setItems(res.data)
    });
    axios.get('https://62373d82f5f6e28a154abef5.mockapi.io/cart')
    .then((res)=>{
      setCartItems(res.data)
    });
  },[]);

  const onAddToCart = (obj)=>{
    axios.post('https://62373d82f5f6e28a154abef5.mockapi.io/cart', obj);
    setCartItems(prev=>[...prev, obj]);
  }

  const onRemoveItem = (id)=>{
    axios.delete(`https://62373d82f5f6e28a154abef5.mockapi.io/cart/${id}`);
    setCartItems(prev=>prev.filter((item)=>item.id!==id));

  }

  const onAddFavorite = (obj)=>{
    axios.post('https://62373d82f5f6e28a154abef5.mockapi.io/favorites', obj);
    setFavorites(prev=>[...prev, obj]);
  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }


  return (
    <div className="wrapper clear">
    
    {cartOpened ? <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/> : null}

      
    {/* header */}
    <Header onClickCart={()=>setCartOpened(true)}/>

      <Route path="/" exact>
        <Home 
          items={items} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput} 
          onAddFavorite={onAddFavorite} 
          onAddToCart={onAddToCart}/>
      </Route>
     

    </div>
  );
}

export default App;






