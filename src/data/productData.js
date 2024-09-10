
const products = [
    {
      id: 1,
      title: "Spread collar casual shirt",
      category: "Men's Clothing",
      description: "A great product for your needs.",
      price: 299.99,
      image: "/assets/images/product1.jpg",
      rating: { rate: 4.5 },
    },
    {
      id: 2,
      title: "Black Formal Shirt",
      category: "Men's Clothing",
      description: "Trendy and stylish.",
      price: 149.99,
      image: "/assets/images/product2.jpg",
      rating: { rate: 4.7 },
    },
    {
        id: 3,
        title: "Slim Fit Black Jeans",
        category: "Men's Clothing",
        description: "Black dark wash 5-pocket mid-rise jeans.",
        price: 349.99,
        image: "/assets/images/product3.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 4,
        title: "Men Smart Olive Green Tapered Fit Cargos",
        category: "Men's Clothing",
        description: "Featuring multiple pockets, with a variety of outfits.",
        price: 559.99,
        image: "/assets/images/product4.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 5,
        title: "Printed Shirt Collar Tunic",
        category: "Women's Clothing",
        description: "Turquoise blue and white printed tunic",
        price: 179.99,
        image: "/assets/images/product5.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 6,
        title: "Pure Cotton Kurta with Palazzos",
        category: "Women's Clothing",
        description: "Teal printed Kurta with Palazzos",
        price: 169.99,
        image: "/assets/images/product6.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 7,
        title: "Pink Paisley Printed Kurta",
        category: "Women's Clothing",
        description: "Pink printed Kurta with Trousers with dupatta",
        price: 449.99,
        image: "/assets/images/product7.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 8,
        title: "Cotton Parallel Trousers",
        category: "Women's Clothing",
        description: "Maroon knitted parallel trouser",
        price: 139.99,
        image: "/assets/images/product8.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 9,
        title: "Gold Plated Pink Sapphire",
        category: "Jewellery",
        description: "Rose gold-plated and pink CZ-stone and emerald embellished necklace",
        price: 567,
        image: "/assets/images/product9.jpg",
        rating: { rate: 4.1 },
      },
      {
        id: 10,
        title: "Jewellery Set With Maangtikka",
        category: "Jewellery",
        description: "Gold-toned choker necklace has white kundan-studded and pearl-beaded detailsr",
        price: 675,
        image: "/assets/images/product10.jpg",
        rating: { rate: 3.9 },
      },
      {
        id: 11,
        title: "Enamelled Bangles",
        category: "Jewellery",
        description: "Gold-plated green enamelled bangle, has red stones-studded details Secured with a slip-on closure",
        price: 339.99,
        image: "/assets/images/product11.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 12,
        title: "Antique Drop Earrings",
        category: "Jewellery",
        description: "Gold-Plated Stone Studded Classic Antique Drop Earrings",
        price: 139.99,
        image: "/assets/images/product12.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 13,
        title: "Pad Go",
        category: "Electronics",
        description: "RAM: 8 GB Awesome Audio: OnePlus omnibearing sound with Dolby Atmos Quad Speakers",
        price: 139.99,
        image: "/assets/images/product13.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 14,
        title: "Camera",
        category: "Electronics",
        description: "Self-Timer, Type C and Mini HDMI, 9 Auto Focus Points, 3x Optical Zoom",
        price: 139.99,
        image: "/assets/images/product014.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 15,
        title: "Headphone",
        category: "Electronics",
        description: "40mm Drivers, Fast Charging, 50H Battery, Rubber Finish",
        price: 139.99,
        image: "/assets/images/headphone.jpg",
        rating: { rate: 4.7 },
      },
      {
        id: 16,
        title: "Digital Watch",
        category: "Electronics",
        description: "Designed for the younger generation",
        price: 139.99,
        image: "/assets/images/product016.jpg",
        rating: { rate: 4.7 },
      }
  ];

  const shuffledProducts = products.sort(() => Math.random() - 0.5);
  
  export default shuffledProducts;
  