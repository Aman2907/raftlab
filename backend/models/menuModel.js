let menu = [
  {
    id: 1,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 299,
    rating: 4.8,
    description: "Loaded with extra cheese, fresh veggies cheesy flavor in every bite.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 2,
    name: "Veg Pizza",
    category: "Pizza",
    price: 249,
    rating: 4.9,
    description: "Fresh veggie pizza with cheese delicious toppings on a crispy golden crust.",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 349,
    rating: 4.7,
    description: "Farm fresh vegetables with cheese toppings on a crispy golden crust.",
    image:
      "https://plus.unsplash.com/premium_photo-1675451537385-e76cd7e78087?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Burger
  {
    id: 4,
    name: "Chicken Burger",
    category: "Burger",
    price: 199,
    rating: 4.8,
    description: "Crispy chicken burger loaded with fresh lettuce and creamy mayo, soft toasted buns soft toasted buns for a juicy.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },

  {
    id: 5,
    name: "Zinger Burger",
    category: "Burger",
    price: 229,
    rating: 4.7,
    description: "Spicy crispy zinger burger loaded with crunchy lettuce, creamy mayo, soft toasted buns, and juicy chicken for a fiery and flavorful bite.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 6,
    name: "Veg Burger",
    category: "Burger",
    price: 179,
    rating: 4.5,
    description: "Healthy veg burger loaded with fresh veggies and creamy sauces inside soft toasted buns for a tasty and satisfying bite.",
    image:
      "https://images.unsplash.com/photo-1692737349870-e3bfc704ebf9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Sandwich
  {
    id: 7,
    name: "Club Sandwich",
    category: "Sandwich",
    price: 149,
    rating: 4.6,
    description: "Loaded sandwich with fresh veggies, crunchy lettuce, creamy sauces.",
    image:
      "https://plus.unsplash.com/premium_photo-1738802845911-809a01acfa50?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 8,
    name: "Chicken Sandwich",
    category: "Sandwich",
    price: 189,
    rating: 4.7,
    description: "A delicious loaded sandwich filled with juicy chicken, fresh veggies, creamy sauces, and perfectly toasted bread for a flavorful and satisfying meal.",
    image:
      "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df",
  },

  {
    id: 9,
    name: "Veg Sandwich",
    category: "Sandwich",
    price: 139,
    rating: 4.5,
    description: "Fresh and tasty vegetable sandwich filled filled with juicy veggies and Creamy sauces.",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Fries
  {
    id: 10,
    name: "French Fries",
    category: "Fries",
    price: 149,
    rating: 4.6,
    description: "Crispy golden fries seasoned to perfection, served hot and crunchy with a delicious salty flavor in every bite.",
    image:
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 11,
    name: "Peri Peri Fries",
    category: "Fries",
    price: 169,
    rating: 4.7,
    description: "Crispy golden fries tossed in spicy peri peri seasoning, served hot with a bold, flavorful, and crunchy taste in every bite.",
    image:
      "https://images.unsplash.com/photo-1630431341636-999a7e047f3b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 12,
    name: "Cheese Fries",
    category: "Fries",
    price: 199,
    rating: 4.8,
    description: "Cheesy loaded fries topped with melted cheese and fries served hot for the perfect snack experience.",
    image:
      "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Drinks
  {
    id: 13,
    name: "Coca Cola",
    category: "Drinks",
    price: 99,
    rating: 4.5,
    description: "Chilled soft drink served ice-cold with a fizzy, refreshing taste that perfectly complements your meal.",
    image:
      "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 14,
    name: "Orange Juice",
    category: "Drinks",
    price: 129,
    rating: 4.6,
    description: "Fresh orange juice made with juicy oranges, packed with refreshing citrus flavor and natural freshness.",
    image:
      "https://images.unsplash.com/photo-1607690506833-498e04ab3ffa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 15,
    name: "Cold Coffee",
    category: "Drinks",
    price: 149,
    rating: 4.8,
    description: "Refreshing cold coffee blended with rich coffee, creamy milk, and ice for a smooth café-style taste.",
    image:
      "https://images.unsplash.com/photo-1527156231393-7023794f363c?q=80&w=411&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


module.exports = menu;