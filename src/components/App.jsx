import React, { useState } from 'react';
import Navbar from './Navbar'; 
import './App.css';

function App() {
  const [user, setUser] = useState({
    name: "charlesacieia@gmail.com",
    isLoggedIn: true,
  });
const [menu, setMenu] = useState("Breakfast")
const breakfastMenu = {
  food: ["Pancakes", "Waffles", "Eggs"],
  drinks: ["Coffee", "Orange Juice"],
};

const lunchMenu = {
  food: ["Burger", "Salad", "Sandwich"],
  drinks: ["Soda", "Water"],
};

const dinnerMenu = {
  food: ["Steak", "Pasta", "Pizza"],
  drinks: ["Wine", "Beer"],
};

const handleMenuChange = (selectedMenu) => {
  setMenu(selectedMenu);
};

const renderMenu = () => {
  let currentMenu;
  switch (menu) {
    case "Breakfast":
      currentMenu = breakfastMenu;
      break;
    case "Lunch":
      currentMenu = lunchMenu;
      break;
    case "Dinner":
      currentMenu = dinnerMenu;
      break;
    default:
      currentMenu = breakfastMenu;
  }

  return (
    <div>
      <h3>{menu} Menu</h3>
      <ul>
        {currentMenu.food.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {currentMenu.drinks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

return (
  <div className="App">
    <Navbar currentUser={user.name} />

    <div className="menu-container">
      <button onClick={() => handleMenuChange('Breakfast')}>Breakfast</button>
      <button onClick={() => handleMenuChange('Lunch')}>Lunch</button>
      <button onClick={() => handleMenuChange('Dinner')}>Dinner</button>
    </div>

    {renderMenu()}

    <div className="user-info">
      <p>Currently Logged In: {user.name}</p>
      <button onClick={() => console.log('Logging out...')}>Log Out</button>
    </div>
    <footer>
      <nav>
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </footer>
  </div>
);
}

export default App;
