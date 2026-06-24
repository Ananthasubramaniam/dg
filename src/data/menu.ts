export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string; // e.g., 'Half Kg', 'Pc', 'Box', 'Loaf'
  description: string;
  image: string;
  isFeatured?: boolean;
}

export const CATEGORIES = [
  { id: 'cakes', name: 'Cakes', icon: '🍰' },
  { id: 'dessert-bites', name: 'Dessert Bites', icon: '🍪' },
  { id: 'muffins', name: 'Muffins', icon: '🧁' },
  { id: 'cupcakes', name: 'Cupcakes', icon: '🧁' },
  { id: 'cookies', name: 'Cookies', icon: '🍪' },
  { id: 'health-treats', name: 'Health Treats', icon: '🌱' },
  { id: 'tea-cakes', name: 'Tea Cakes', icon: '🥮' },
  { id: 'breads', name: 'Breads', icon: '🍞' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' }
] as const;

export const MENU_DATA: MenuItem[] = [
  // --- CAKES ---
  {
    id: 'cake-black-forest',
    name: 'Traditional Black Forest',
    category: 'cakes',
    price: 550,
    unit: 'Half Kg',
    description: 'Layered chocolate sponge soaked in cherry syrup, frosted with fresh whipped cream and rich dark chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-chocolate-ganache',
    name: 'Chocolate Ganache',
    category: 'cakes',
    price: 725,
    unit: 'Half Kg',
    description: 'Decadent dark chocolate sponge layered and glazed with silky, rich Belgian chocolate ganache. A chocolate lover\'s dream.',
    image: '/images/chocolate_cake.png',
    isFeatured: true
  },
  {
    id: 'cake-chocolate-mousse',
    name: 'Chocolate Mousse',
    category: 'cakes',
    price: 650,
    unit: 'Half Kg',
    description: 'Light, airy chocolate mousse layers paired with a moist chocolate sponge, finished with dark cocoa dusting.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-cookie-cream',
    name: 'Cookie Cream',
    category: 'cakes',
    price: 650,
    unit: 'Half Kg',
    description: 'Vanilla and chocolate cake layers loaded with crushed chocolate sandwich cookies and smooth Oreo cream frosting.',
    image: 'https://images.unsplash.com/photo-1588796802095-263d894b9f91?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-chocolate-orange',
    name: 'Chocolate Orange Symphony',
    category: 'cakes',
    price: 650,
    unit: 'Half Kg',
    description: 'A harmonious blend of rich chocolate sponge infused with citrusy orange zest and premium milk chocolate frosting.',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-chocolate-tit-bits',
    name: 'Chocolate Tit Bits',
    category: 'cakes',
    price: 625,
    unit: 'Half Kg',
    description: 'Moist chocolate cake studded with chocolate chips, chocolate chunks, and a drizzle of rich fudge syrup.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-coffee-walnut',
    name: 'Coffee and Walnut',
    category: 'cakes',
    price: 625,
    unit: 'Half Kg',
    description: 'Rich espresso-infused sponge cake layered with coffee buttercream and studded with toasted walnut pieces.',
    image: 'https://images.unsplash.com/photo-1508737804141-4c3b688e2546?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-irish-cream',
    name: 'Chocolate and Irish Cream',
    category: 'cakes',
    price: 725,
    unit: 'Half Kg',
    description: 'Moist chocolate sponge soaked in smooth Irish cream flavor, layered with velvet espresso buttercream.',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=600&auto=format&fit=crop',
    isFeatured: true
  },
  {
    id: 'cake-rose-milk',
    name: 'Rose Milk',
    category: 'cakes',
    price: 550,
    unit: 'Half Kg',
    description: 'Soft cardamom-infused sponge cake soaked in traditional sweet rose milk and topped with edible rose petals.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-gulab-jamun',
    name: 'Gulab Jamun Cake',
    category: 'cakes',
    price: 625,
    unit: 'Half Kg',
    description: 'Fusion dessert cake featuring cardamom sponge, saffron cream, and actual gulab jamun pieces inside.',
    image: '/images/cheesecakes.png',
    isFeatured: true
  },
  {
    id: 'cake-lemon-blueberry',
    name: 'Lemon Blueberry Crumble Cake',
    category: 'cakes',
    price: 625,
    unit: 'Half Kg',
    description: 'Zesty lemon sponge baked with fresh blueberries and topped with a buttery, crispy streusel crumble.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-strawberry',
    name: 'Strawberry Cake',
    category: 'cakes',
    price: 550,
    unit: 'Half Kg',
    description: 'Light, delicate vanilla sponge layered with house-made fresh strawberry compote and whipped cream.',
    image: '/images/seasonal_specials.png',
    isFeatured: false
  },
  {
    id: 'cake-butterscotch',
    name: 'Butterscotch Cake',
    category: 'cakes',
    price: 600,
    unit: 'Half Kg',
    description: 'Classic golden sponge layered with butterscotch cream, praline crunch, and topped with rich butterscotch caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-coffee-crumble',
    name: 'Coffee Crumble Cake',
    category: 'cakes',
    price: 575,
    unit: 'Half Kg',
    description: 'A warm cinnamon and espresso cake finished with a crunchy brown sugar crumble topping.',
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-orange',
    name: 'Orange Cake',
    category: 'cakes',
    price: 575,
    unit: 'Half Kg',
    description: 'Moist citrus cake made with fresh orange juice and orange zest, glazed with a light orange glaze.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cake-pineapple',
    name: 'Pineapple Cake',
    category: 'cakes',
    price: 575,
    unit: 'Half Kg',
    description: 'Soft vanilla sponge layered with juicy pineapple chunks, fresh whipped cream, and cherry toppings.',
    image: 'https://images.unsplash.com/photo-1622896784083-cc051313dbab?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },

  // --- DESSERT BITES ---
  {
    id: 'bite-tart',
    name: 'Mini Chocolate Tart',
    category: 'dessert-bites',
    price: 30,
    unit: 'Pc',
    description: 'Crispy pastry shell filled with silky, smooth Belgian chocolate ganache.',
    image: '/images/dessert_jars.png',
    isFeatured: false
  },
  {
    id: 'bite-brownie',
    name: 'Fudgy Brownie',
    category: 'dessert-bites',
    price: 65,
    unit: 'Pc',
    description: 'Ultra-fudgy brownie loaded with chocolate chunks, featuring a crackly top and moist center.',
    image: '/images/brownies.png',
    isFeatured: true
  },
  {
    id: 'bite-apple-pie',
    name: 'Apple Pie with Streusel',
    category: 'dessert-bites',
    price: 110,
    unit: 'Pc',
    description: 'Classic mini pie filled with spiced apples and topped with a sweet, buttery streusel crumble.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },

  // --- MUFFINS ---
  {
    id: 'muffin-coffee-walnut',
    name: 'Coffee Walnut Streusel Muffin',
    category: 'muffins',
    price: 55,
    unit: 'Pc',
    description: 'Espresso muffin topped with toasted walnuts and a crunchy cinnamon streusel.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'muffin-choc-hazelnut',
    name: 'Chocolate Hazelnut Crumb Muffin',
    category: 'muffins',
    price: 55,
    unit: 'Pc',
    description: 'Rich chocolate muffin with a nutella core, topped with hazelnut crumbs.',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'muffin-double-choc',
    name: 'Double Chocolate Chip Muffin',
    category: 'muffins',
    price: 55,
    unit: 'Pc',
    description: 'Decadent chocolate muffin loaded with both dark and milk chocolate chips.',
    image: 'https://images.unsplash.com/photo-1587974928442-77ad9e2db5ad?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'muffin-blueberry',
    name: 'Blueberry Muffin',
    category: 'muffins',
    price: 50,
    unit: 'Pc',
    description: 'Soft and moist bakery-style muffin bursting with fresh sweet blueberries.',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop',
    isFeatured: true
  },
  {
    id: 'muffin-banana-choc',
    name: 'Banana Chocolate Chip Muffin',
    category: 'muffins',
    price: 50,
    unit: 'Pc',
    description: 'Sweet banana muffin loaded with chocolate chips, incredibly moist and flavorful.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },

  // --- CUPCAKES ---
  {
    id: 'cupcake-chocolate',
    name: 'Chocolate Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Rich chocolate sponge topped with a velvety chocolate buttercream swirl.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cupcake-espresso',
    name: 'Espresso Coffee Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Moist coffee sponge topped with a rich, aromatic espresso buttercream frosting.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cupcake-vanilla',
    name: 'Vanilla Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Classic Madagascar vanilla bean cupcake topped with fluffy vanilla buttercream.',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cupcake-butterscotch',
    name: 'Butterscotch Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Golden caramel cupcake topped with butterscotch frosting and home-made praline crunch.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cupcake-lemon-blue',
    name: 'Lemon Blueberry Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Tangy lemon cupcake filled with fresh blueberry jam and topped with zesty frosting.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cupcake-red-velvet',
    name: 'Red Velvet Cream Cheese Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Classic red velvet cupcake topped with a generous swirl of sweet and tangy cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?q=80&w=600&auto=format&fit=crop',
    isFeatured: true
  },

  // --- COOKIES ---
  {
    id: 'cookie-rose-walnut',
    name: 'Rose Walnut Biscuit',
    category: 'cookies',
    price: 12,
    unit: 'Pc',
    description: 'Delicate buttery biscuit flavored with fragrant rose water and studded with crunchy walnut bits.',
    image: '/images/cookies.png',
    isFeatured: false
  },
  {
    id: 'cookie-choc-chip',
    name: 'Chocolate Chip Cookie',
    category: 'cookies',
    price: 30,
    unit: 'Pc',
    description: 'Classic crispy-edged, chewy-centered cookie loaded with premium semi-sweet chocolate chips.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
    isFeatured: true
  },
  {
    id: 'cookie-butter',
    name: 'Butter Cookie',
    category: 'cookies',
    price: 10,
    unit: 'Pc',
    description: 'Melt-in-your-mouth shortbread cookie made with premium high-fat butter.',
    image: 'https://images.unsplash.com/photo-1558961309-db6f1a3ec609?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cookie-nan-khatta',
    name: 'Desi Nan Khattai',
    category: 'cookies',
    price: 10,
    unit: 'Pc',
    description: 'Traditional Indian cardamom shortbread biscuit with a crumbly, melt-in-your-mouth texture.',
    image: 'https://images.unsplash.com/photo-1558961309-db6f1a3ec609?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'cookie-shrewsbury',
    name: 'Shrewsbury Biscuit',
    category: 'cookies',
    price: 12,
    unit: 'Pc',
    description: 'Famous buttery and sweet British-style biscuit with a hint of lemon and nutmeg.',
    image: 'https://images.unsplash.com/photo-1558961309-db6f1a3ec609?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },

  // --- HEALTH TREATS ---
  {
    id: 'health-ragi-jaggery',
    name: 'Sprouted Ragi Whole Wheat Jaggery',
    category: 'health-treats',
    price: 200,
    unit: 'Loaf',
    description: 'Nutritious cake baked with organic sprouted ragi, whole wheat flour, and sweetened naturally with iron-rich jaggery.',
    image: 'https://images.unsplash.com/photo-1598214886806-c87b2a370944?q=80&w=600&auto=format&fit=crop',
    isFeatured: true
  },
  {
    id: 'health-double-choc',
    name: 'Double Chocolate Whole Wheat Cookie',
    category: 'health-treats',
    price: 200,
    unit: 'Box',
    description: 'Healthy cookies made from 100% whole wheat flour, rich cocoa powder, and dark chocolate chips.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'health-coconut',
    name: 'Whole Wheat Coconut Cookie',
    category: 'health-treats',
    price: 150,
    unit: 'Box',
    description: 'Crispy whole wheat cookies loaded with toasted coconut flakes, sweet and aromatic.',
    image: 'https://images.unsplash.com/photo-1558961309-db6f1a3ec609?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'health-gf-cranberry',
    name: 'Gluten-Free Cranberry Chocochip Coconut',
    category: 'health-treats',
    price: 210,
    unit: 'Box',
    description: 'A allergen-friendly powerhouse packed with tart cranberries, dark chocolate chips, and shredded coconut.',
    image: 'https://images.unsplash.com/photo-1598214886806-c87b2a370944?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },

  // --- TEA CAKES ---
  {
    id: 'tea-parsi-mawa',
    name: 'Parsi Mawa',
    category: 'tea-cakes',
    price: 375,
    unit: 'Loaf',
    description: 'Rich, dense, and moist traditional tea cake made with caramelized milk solids (mawa) and cardamom.',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=600&auto=format&fit=crop',
    isFeatured: true
  },
  {
    id: 'tea-banana-choc',
    name: 'Banana Chocolate Chip',
    category: 'tea-cakes',
    price: 300,
    unit: 'Loaf',
    description: 'Perfectly sweet, moist banana loaf loaded with dark chocolate chips. Ideal with afternoon tea.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'tea-zebra',
    name: 'Zebra Tea Cake',
    category: 'tea-cakes',
    price: 300,
    unit: 'Loaf',
    description: 'Elegantly striped marble cake with alternating layers of vanilla and chocolate sponge.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'tea-madeira',
    name: 'Madeira Cake',
    category: 'tea-cakes',
    price: 375,
    unit: 'Loaf',
    description: 'Classic British sponge cake with a firm yet light texture, subtly flavored with lemon zest.',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },

  // --- BREADS ---
  {
    id: 'bread-whole-wheat',
    name: 'Whole Wheat Bread',
    category: 'breads',
    price: 90,
    unit: 'Loaf',
    description: 'Soft and healthy daily loaf baked with 100% stoneground whole wheat flour. No preservatives.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop',
    isFeatured: true
  },
  {
    id: 'bread-burger-buns',
    name: 'Burger Buns',
    category: 'breads',
    price: 25,
    unit: 'Pack of 2',
    description: 'Soft, brioche-style sesame burger buns, baked fresh daily.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'bread-milk-buns',
    name: 'Milk Buns',
    category: 'breads',
    price: 12,
    unit: 'Pc',
    description: 'Super soft, fluffy, sweet Japanese-style milk buns.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'bread-pita',
    name: 'Pita Bread',
    category: 'breads',
    price: 15,
    unit: 'Pc',
    description: 'Authentic stone-baked pocket pita bread, perfect for falafels and wraps.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'bread-focaccia-topped',
    name: 'Focaccia with Toppings',
    category: 'breads',
    price: 150,
    unit: 'Loaf',
    description: 'Ligurian-style flatbread topped with cherry tomatoes, kalamata olives, rosemary, and sea salt.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'bread-focaccia-herbs',
    name: 'Focaccia Herbs (Overnight Fermented)',
    category: 'breads',
    price: 170,
    unit: 'Loaf',
    description: 'Overnight fermented flatbread with deep flavor bubbles, infused with olive oil and Italian herbs.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'bread-braided-stuffed',
    name: 'Braided Bread with Stuffings',
    category: 'breads',
    price: 150,
    unit: 'Loaf',
    description: 'Beautifully braided soft bread loaf filled with savory cheese, garlic, and fresh herb stuffing.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },

  // --- PIZZA ---
  {
    id: 'pizza-small',
    name: 'Small (8 inch)',
    category: 'pizza',
    price: 260,
    unit: '8 inch',
    description: 'Individual 8-inch fresh dough pizza base topped with gourmet marinara sauce and premium mozzarella.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  },
  {
    id: 'pizza-medium',
    name: 'Medium (10 inch)',
    category: 'pizza',
    price: 330,
    unit: '10 inch',
    description: 'Classic 10-inch shareable fresh dough pizza base topped with gourmet marinara sauce and premium mozzarella.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
    isFeatured: true
  },
  {
    id: 'pizza-large',
    name: 'Large (12 inch)',
    category: 'pizza',
    price: 400,
    unit: '12 inch',
    description: 'Family-size 12-inch fresh dough pizza base topped with gourmet marinara sauce and premium mozzarella.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
    isFeatured: false
  }
];
