import { Button } from "antd";
import { useState } from "react";

const Comp1 = () => {
  const [newName, setNewName] = useState("");
  const [user, setUser] = useState({
    name: "Alexandra",
    age: 15,
    isActive: true,
  });

  const changeActive = () => {
    setUser((user) => ({
      ...user,
      isActive: !user.isActive,
    }));
  };

  const changeAge = () => {
    setUser((user) => ({
      ...user,
      age: user.age + 1,
    }));
  };

  const newNamefunc = (event) => {
    setNewName(event.target.value);
  };

  const changeName = () => {
    setUser((user) => ({
      ...user,
      name: newName,
    }));
    setNewName("");
  };

  return (
    <div className="container">
      <h1>Профиль пользователя</h1>
      <p>Имя: {user.name}</p>
      <input
        type="text"
        placeholder="Новое имя"
        value={newName}
        onChange={newNamefunc}
      />
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "Yes" : "No"}</p>
      <Button onClick={changeName}>Сменить имя</Button>
      <Button onClick={changeAge}>Увеличить возраст</Button>
      <Button onClick={changeActive}>Переключить активность</Button>
    </div>
  );
};

export { Comp1 };
