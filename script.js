let foodInfo = [
    { name: 'Pizza', price: 5 },
    { name: 'Burger', price: 5 },
    { name: 'Momo', price: 5 },
    { name: 'Hotdog', price: 5 },
    { name: 'Chicken-Burger', price: 5 },
    { name: 'Chicken-Pizza', price: 5 },
    { name: 'Dominos', price: 5 },
    { name: 'McDonald-Special', price: 5 },
  ];
  
  let showPrice = (arr) => {
    let priceForEachItem = arr.map((arrItem) => arrItem.price);
    console.log(priceForEachItem);
  };
  
  showPrice(foodInfo);
  