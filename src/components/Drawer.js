import React from 'react'
import '../App.scss'

function Drawer({ onClose, onRemove, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className='d-flex justify-between mb-30'>Корзина
          <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Close" />
        </h2>
        
        {
          items.length>0 ?
          <div className="items">
          {items.map((obj,index)=>(
            <div key="index" className="cartItem d-flex align-center mb-20">
              {/* <div
                style={{backgroundImage: 'url(${obj.imageUrl})'}} className="cartItemImg">


              </div>  */}
                <img  className="cartItemImg" src={obj.imageUrl} alt='img33'/>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} сум</b>
              </div>
              <img onClick={()=> onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
              
            </div>
            
          ))}
                  {/* Basket-cart */}
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>277.000 сум</b>
            </li>
            <li>
              <span>Налог: 5%</span>
              <div></div>
              <b>13.850 сум </b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Arrow" /></button>
         
        </div>
        </div>:
                <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                <img class="mb-20" width="120px" height="120px" src="./img/empty-cart.jpg" alt="empty-cart"/>
                <h2>Корзина пустая</h2>
                <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button onClick={onClose} className="greenButton">
                  <img src="./img/arrow.svg" alt="arrow"/>Вернуться назад
                </button>
              </div>
      
        }



  
        




      </div>
    </div>
  )
}

export default Drawer
