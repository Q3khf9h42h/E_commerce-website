import React, {useState} from 'react';
import Nav from './comp/nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './comp/rout';
import Footer from './comp/footer';
import Homeproduct from './comp/home_product';
const App = () => {
  //Add to cart
  const [cart,setCart]=useState([])
  //shop page product
  const [shop,setShop]=useState(Homeproduct)
  //shop search Filter
  const [search,setSearch]=useState('')
 
  //Shop category filter
  
  const Filter=(x)=>
  {
     const catefilter=Homeproduct.filter((product) =>
     {
    return product.cat === x
     })
     setShop(catefilter)
  }
  const allocatefilter =()=> 
  {
    setShop(Homeproduct)
  }
  //shop search Filter
  const searchlength=(search || []).length === 0
  const searchproduct=()=>
  {
 if(searchlength)
  {
    alert("please search something !")
    setShop(Homeproduct)
  }
  else{
   const searchfilter=Homeproduct.filter((x)=>
      {
          return x.cat === search
      })
      setShop(searchfilter)
  }

  }
  //Add to cart
  
  const addtocart=(product)=>
  {
    const exist=cart.find((x) =>{
      return x.id === product.id
    })
    if(exist)
    {
      alert("This product is already added in cart")
    }
    else{
      setCart([...cart,{...product,qty:1}])
      alert("Added To Cart")
    }
     }
  console.log(cart)
  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout setCart={setCart} cart={cart}  shop={shop} Filter={Filter} alloctefilter={allocatefilter} addtocart={addtocart} />
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App