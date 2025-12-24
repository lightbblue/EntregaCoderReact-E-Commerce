const products = [
  // Celulares
  { 
    id: '1', 
    name: 'iPhone 15 Pro', 
    price: 1200, 
    category: 'celulares', 
    img: 'https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/09/pbi-iphone-15-pro-max.png', 
    stock: 25, 
    description: 'El futuro en tus manos.'
  },
  { 
    id: '2', 
    name: 'Samsung Galaxy S24 Ultra', 
    price: 1150, 
    category: 'celulares', 
    img: 'https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2024/01/pbi-samsung-galaxy-s24-ultra.png', 
    stock: 15, 
    description: 'Inteligencia artificial y zoom extremo.'
  },
  { 
    id: '3', 
    name: 'Google Pixel 8 Pro', 
    price: 999, 
    category: 'celulares', 
    img: 'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/pixel-8pro.png', 
    stock: 10, 
    description: 'La experiencia Android más pura.'
  },
  { 
    id: '4', 
    name: 'Xiaomi 14', 
    price: 850, 
    category: 'celulares', 
    img: 'https://files.tecnoblog.net/wp-content/uploads/2025/01/Redmi-14-Pro-5G-Verde-coral.png', 
    stock: 30, 
    description: 'Lentes Leica y alto rendimiento.'
  },
  { 
    id: '5', 
    name: 'Motorola Edge 50', 
    price: 600, 
    category: 'celulares', 
    img: 'https://m.media-amazon.com/images/I/71XZP2Hm+5L.jpg', 
    stock: 20, 
    description: 'Diseño elegante y carga rápida.'
  },

  //Tablets
  { 
    id: '6', 
    name: 'iPad Air', 
    price: 800, 
    category: 'tablets', 
    img: 'https://i5.walmartimages.com/seo/2024-Apple-13-inch-iPad-Air-M2-Wi-Fi-128GB-Blue_1512612b-3f81-4661-9b5a-b6e30501ff99.2caff370b34b2a95cde52509e02f68b9.jpeg', 
    stock: 10, 
    description: 'Potencia y ligereza.'
  },
  { 
    id: '7', 
    name: 'Samsung Galaxy Tab S9', 
    price: 900, 
    category: 'tablets', 
    img: 'https://image-us.samsung.com/SamsungUS/home/mobile/tablets/all-tablets/092923/s9-fe/gray/1.jpg', 
    stock: 8, 
    description: 'Pantalla AMOLED increíble.'
  },
  { 
    id: '8', 
    name: 'Lenovo Tab P12', 
    price: 400, 
    category: 'tablets', 
    img: 'https://m.media-amazon.com/images/I/616SXS5m0eL._AC_SL1500_.jpg', 
    stock: 12, 
    description: 'Ideal para estudiar y multimedia.'
  },
  { 
    id: '9', 
    name: 'Xiaomi Pad 6', 
    price: 350, 
    category: 'tablets', 
    img: 'https://xiaomistore.com.gt/wp-content/uploads/Xiaomi20Pad206-2.webp', 
    stock: 18, 
    description: 'Gran relación calidad-precio.'
  },

  // Notebooks
  { 
    id: '10', 
    name: 'MacBook Pro', 
    price: 2500, 
    category: 'notebooks', 
    img: 'https://sugbo.ph/wp-content/uploads/2020/05/Apple_macbook_pro-13-inch-retina.jpg', 
    stock: 5, 
    description: 'Para profesionales creativos.'
  },
  { 
    id: '11', 
    name: 'Dell XPS 15', 
    price: 1800, 
    category: 'notebooks', 
    img: 'https://laptopmedia.com/wp-content/uploads/2022/04/3-14-scaled.jpg', 
    stock: 7, 
    description: 'Pantalla InfinityEdge impresionante.'
  },
  { 
    id: '12', 
    name: 'Asus Zenbook Duo', 
    price: 1600, 
    category: 'notebooks', 
    img: 'https://m.media-amazon.com/images/I/71xZUkl5dyL.jpg', 
    stock: 4, 
    description: 'Doble pantalla para multitarea.'
  },

  // Accesorios
  { 
    id: '13', 
    name: 'AirPods Pro 2', 
    price: 250, 
    category: 'accesorios', 
    img: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/09/Apple-AirPods-Pro-2.jpeg', 
    stock: 50, 
    description: 'Cancelación de ruido activa.'
  },
  { 
    id: '14', 
    name: 'Logitech MX Master 3S', 
    price: 100, 
    category: 'accesorios', 
    img: 'https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg', 
    stock: 35, 
    description: 'Ergonomía y precisión máxima.'
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 1000);
  });
};