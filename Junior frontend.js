// Description: Найти сумму объектов у которых прайс цена 80 и  количество меньше 7

const food = [
  {
    name: "Паста Болоньезе",
    weight: 350,
    price: 68,
    quantity: 10,
  },
  {
    name: "Спагетти с овощами",
    weight: 350,
    price: 56,
    quantity: 8,
  },
  {
    name: "Пене с куриным филе",
    weight: 400,
    price: 68,
    quantity: 16,
  },
  {
    name: "Курица с ананасами",
    weight: 675,
    price: 139,
    quantity: 30,
  },
  {
    name: "Четыре сезона",
    weight: 1600,
    price: 339,
    quantity: 8,
  },
  {
    name: "Итальяни",
    weight: 740,
    price: 159,
    quantity: 1,
  },
  {
    name: "Джантон с семгой",
    weight: 230,
    price: 77,
    quantity: 4,
  },
  {
    name: "Цезарь с креветкой",
    weight: 230,
    price: 89,
    quantity: 5,
  },
];

const totalWeight = (food) => {
  return food.reduce((acc, item) => 
  (item.price > 80 && item.quantity < 7)? acc + (item.weight * item.quantity) : acc + 0,0 )
};


console.log(totalWeight(food));
