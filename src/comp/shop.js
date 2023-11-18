import React, {useState} from 'react';
import './shop.css';
import {AiFillHeart,AiFillEye,AiOutlineClose} from 'react-icons/ai';


const Shop = ({shop,Filter,allocatefilter,addtocart})=> {
//Toggle Product  Detail............
const [showDetail,setShowDetail] = useState(false)
//Detail page data..........
const [detail,setDetail]=useState([])


//showing Detail box................

const detailpage=(product)=>
{
    const detaildata=([{product}])
    const productdetail=detaildata[0]['product']
   // console.log(productdetail)
    setDetail(productdetail)
    setShowDetail(true)
}

const closedetail=()=>
{
    setShowDetail(false)
}
  return (
   <>
   {
    showDetail ?
    <>
    <div className='product_detail'>
          <button className='close_btn' onClick={closedetail}><AiOutlineClose/></button>
          <div className='container'>
          <div className='img_box'>
          <img src={detail.image} alt=''></img>
    </div>
             <div className='info'>
             <h4># {detail.cat}</h4>
             <h2>{detail.Name}</h2>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit laboriosam facilis vero aliquid magnam, facere molliti</p>
             <h3>${detail.price}</h3>
            <button  onClick={() =>addtocart (detail)}>Add To Cart </button>
     </div>
  </div>
</div>
    </> 
    : null
   }
   
   <div className='shop'>
    <h2># shop</h2>
    <p>Home . shop</p>
    <div className='container'>
        <div className='left_box'>
            <div className='category'>
                <div className='header' >
                    <h3>all categories</h3>
                    </div>  
                    <div className='box'>
                        <ul>
                            <li onClick={()=> allocatefilter  }>#All</li>
                            <li onClick={()=> Filter ("Tv")}># Tv</li>
                            <li onClick={()=> Filter ("Laptop")}># Laptop</li>
                            <li onClick={()=> Filter ("Watch")}># Watch</li>
                            <li onClick={()=> Filter ("speaker")}># speaker</li>
                            <li onClick={()=> Filter ("Smartphone")}># Smartphone</li>
                            <li onClick={()=> Filter ("Electronics")}># Electronics</li>
                            <li onClick={()=> Filter ("Headphone")}># Headphone</li>
                        </ul>
                        </div>        
                 </div>
                 <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_left.avif' alt=''></img>
                    </div>
                 </div>
        </div>
        <div className='right_box'>
        
        <div className='product_box'>
            <h2>Shop Product</h2>
            <div className='product_container'>
     {
        shop.map((curElm) =>
        {
        return(
            <>
               <div className='box'>
                <div className='img_box'>
                    <img src={curElm.image} alt=''></img>
                    < div className='icon'>
                    <li><AiFillHeart/></li>
                   <li onClick={()=>detailpage (curElm)}><AiFillEye/></li>
                   </div>
                 </div>
                 <div className='detail'>
                    <h3>{curElm.Name}</h3>
                    <p> $ {curElm.price}</p>
                    <button onClick={() =>addtocart (curElm)}>Add To Cart</button>
                 </div>
               </div>
            </>
        )
        })
     }
  
            </div>
        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Shop