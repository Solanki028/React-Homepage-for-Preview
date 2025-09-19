// Dummy data for products/dishes that can work for both restaurant and e-commerce
export const products = [
  {
    id: 1,
    title: "Gourmet Burger Deluxe",
    description: "A premium beef burger with artisanal cheese, fresh lettuce, tomatoes, and our signature sauce on a brioche bun. Served with hand-cut fries.",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
    category: "Main Course",
    featured: true,
    seo: {
      title: "Gourmet Burger Deluxe - Premium Dining Experience",
      description: "Indulge in our signature Gourmet Burger Deluxe featuring premium beef, artisanal cheese, and fresh ingredients. Perfect for food lovers seeking quality.",
      keywords: "gourmet burger, premium beef, artisanal cheese, fine dining"
    }
  },
  {
    id: 2,
    title: "Truffle Pasta Primavera",
    description: "Fresh pasta tossed with seasonal vegetables, truffle oil, parmesan cheese, and herbs. A vegetarian delight that doesn't compromise on flavor.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=400&fit=crop",
    category: "Pasta",
    featured: true,
    seo: {
      title: "Truffle Pasta Primavera - Vegetarian Fine Dining",
      description: "Savor our exquisite Truffle Pasta Primavera with fresh seasonal vegetables, premium truffle oil, and authentic parmesan cheese.",
      keywords: "truffle pasta, vegetarian, primavera, seasonal vegetables, fine dining"
    }
  },
  {
    id: 3,
    title: "Grilled Salmon Supreme",
    description: "Atlantic salmon grilled to perfection, served with roasted vegetables, quinoa pilaf, and lemon herb butter sauce.",
    price: "$28.99",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop",
    category: "Seafood",
    featured: true,
    seo: {
      title: "Grilled Salmon Supreme - Fresh Atlantic Seafood",
      description: "Experience our perfectly grilled Atlantic salmon with roasted vegetables and quinoa pilaf. A healthy and delicious choice.",
      keywords: "grilled salmon, atlantic salmon, seafood, healthy dining, quinoa"
    }
  },
  {
    id: 4,
    title: "Artisan Pizza Margherita",
    description: "Wood-fired pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil on our signature sourdough crust.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop",
    category: "Pizza",
    featured: false,
    seo: {
      title: "Artisan Pizza Margherita - Wood-Fired Perfection",
      description: "Authentic wood-fired Pizza Margherita with San Marzano tomatoes, fresh mozzarella, and basil on sourdough crust.",
      keywords: "pizza margherita, wood-fired, san marzano, fresh mozzarella, artisan"
    }
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a molten center, served warm with vanilla ice cream and fresh berries.",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop",
    category: "Dessert",
    featured: false,
    seo: {
      title: "Chocolate Lava Cake - Decadent Dessert Experience",
      description: "Indulge in our signature Chocolate Lava Cake with molten center, vanilla ice cream, and fresh berries. The perfect sweet ending.",
      keywords: "chocolate lava cake, molten chocolate, dessert, vanilla ice cream"
    }
  }
];

export const getFeaturedProducts = () => products.filter(product => product.featured);

export const getProductById = (id) => products.find(product => product.id === parseInt(id));

export const getProductsByCategory = (category) => products.filter(product => product.category === category);
