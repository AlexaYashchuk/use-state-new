import { Button } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Comp3 = () => {
  const [cart, setCart] = useState([
    { id: uuidv4(), title: "Футболка", count: 1 },
    { id: uuidv4(), title: "Кепка", count: 2 },
    { id: uuidv4(), title: "Футболка2", count: 1 },
    { id: uuidv4(), title: "Кепка2", count: 2 },
    { id: uuidv4(), title: "Футболка3", count: 1 },
    { id: uuidv4(), title: "Кепка3", count: 2 },
    { id: uuidv4(), title: "Футболка4", count: 1 },
    { id: uuidv4(), title: "Кепка4", count: 2 },
  ]);

  const count = (id) => {
    const newArr = [...cart];
    const res = newArr.map((item) => {
      if (item.id == id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(res);
  };

  const deleteTask = (id) => {
    const newArr = cart.filter((item) => item.id !== id);
    setCart(newArr);
  };

  const deleteAll = () => {
    setCart([]);
  };
  return (
    <div className="container">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} (Количество={item.count})
            <Button onClick={() => count(item.id)}>+1</Button>
            <Button onClick={() => deleteTask(item.id)}>Удалить</Button>
          </li>
        ))}
      </ul>
      <Button onClick={deleteAll}>Очистить корзину</Button>
    </div>
  );
};

export { Comp3 };
