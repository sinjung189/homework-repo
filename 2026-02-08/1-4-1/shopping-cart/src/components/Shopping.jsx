import { useState } from "react";

export default function Shopping() {
  const products = [
    { id: 1, name: "노트북", price: 1200000 },
    { id: 2, name: "마우스", price: 50000 },
    { id: 3, name: "키보드", price: 80000 },
  ];

  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    setCart(prev => [...prev, product]);
  };

  const handleDelete = (index) => {
    setCart(prev => prev.filter((_,i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {/* 상품 목록 */}
      <ul className="todo-list">
        {products.map((product) => (
          <li
            key={product.id}
            className="todo-box"
            onClick={() => handleAdd(product)}
          >
            {/* 120만원 느낌으로 */}
            {product.name} ({product.price / 10000}만원)
          </li>
        ))}
      </ul>

      {/* 장바구니 */}
      
      <ul className="todo-cart">
        {cart.map((item,index) => (
          <li
            key={index}
            className="cart"
            onClick={() => handleDelete(index)}
          >
            
            {item.name} ({item.price / 10000}만원) 
          </li>
        ))}
      </ul>

      <h3>Total: {totalPrice / 10000}만원</h3>
    </div>
  );
}
