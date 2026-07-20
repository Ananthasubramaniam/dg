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
    image: '/images/cake_black_forest.jpeg',
    isFeatured: true
  },
  {
    id: 'cake-chocolate-ganache',
    name: 'Chocolate Ganache',
    category: 'cakes',
    price: 725,
    unit: 'Half Kg',
    description: 'Decadent dark chocolate sponge layered and glazed with silky, rich Belgian chocolate ganache. A chocolate lover\'s dream.',
    image: '/images/cake_chocolate_ganache.jpeg',
    isFeatured: true
  },
  {
    id: 'cake-chocolate-mousse',
    name: 'Chocolate Mousse',
    category: 'cakes',
    price: 650,
    unit: 'Half Kg',
    description: 'Light, airy chocolate mousse layers paired with a moist chocolate sponge, finished with dark cocoa dusting.',
    image: '/images/cake_chocolate_mousse.jpeg',
    isFeatured: false
  },
  {
    id: 'cake-cookie-cream',
    name: 'Cookie Cream',
    category: 'cakes',
    price: 650,
    unit: 'Half Kg',
    description: 'Vanilla and chocolate cake layers loaded with crushed chocolate sandwich cookies and smooth Oreo cream frosting.',
    image: '/images/cake_cookie_cream.jpeg',
    isFeatured: false
  },
  {
    id: 'cake-chocolate-orange',
    name: 'Chocolate Orange Symphony',
    category: 'cakes',
    price: 650,
    unit: 'Half Kg',
    description: 'A harmonious blend of rich chocolate sponge infused with citrusy orange zest and premium milk chocolate frosting.',
    image: '/images/cake_chocolate_orange.jpeg',
    isFeatured: false
  },
  {
    id: 'cake-chocolate-tit-bits',
    name: 'Chocolate Tit Bits',
    category: 'cakes',
    price: 625,
    unit: 'Half Kg',
    description: 'Moist chocolate cake studded with chocolate chips, chocolate chunks, and a drizzle of rich fudge syrup.',
    image: '/images/cake_chocolate_tit_bits.jpeg',
    isFeatured: false
  },
  {
    id: 'cake-coffee-walnut',
    name: 'Coffee and Walnut',
    category: 'cakes',
    price: 625,
    unit: 'Half Kg',
    description: 'Rich espresso-infused sponge cake layered with coffee buttercream and studded with toasted walnut pieces.',
    image: '/images/cake_coffee_walnut.jpeg',
    isFeatured: false
  },
  {
    id: 'cake-irish-cream',
    name: 'Chocolate and Irish Cream',
    category: 'cakes',
    price: 725,
    unit: 'Half Kg',
    description: 'Moist chocolate sponge soaked in smooth Irish cream flavor, layered with velvet espresso buttercream.',
    image: '/images/cake_chocolate_gold.jpeg',
    isFeatured: true
  },
  {
    id: 'cake-rose-milk',
    name: 'Rose Milk',
    category: 'cakes',
    price: 550,
    unit: 'Half Kg',
    description: 'Soft cardamom-infused sponge cake soaked in traditional sweet rose milk and topped with edible rose petals.',
    image: '/images/cake_rose_milk.jpeg',
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
    isFeatured: false
  },
  {
    id: 'cake-lemon-blueberry',
    name: 'Lemon Blueberry Crumble Cake',
    category: 'cakes',
    price: 625,
    unit: 'Half Kg',
    description: 'Zesty lemon sponge baked with fresh blueberries and topped with a buttery, crispy streusel crumble.',
    image: '/images/cake_lemon_blueberry.jpeg',
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
    image: '/images/cake_butterscotch.jpeg',
    isFeatured: false
  },
  {
    id: 'cake-coffee-crumble',
    name: 'Coffee Crumble Cake',
    category: 'cakes',
    price: 575,
    unit: 'Half Kg',
    description: 'A warm cinnamon and espresso cake finished with a crunchy brown sugar crumble topping.',
    image: '/images/cake_coffee_crumble.jpeg',
    isFeatured: false
  },
  {
    id: 'cake-orange',
    name: 'Orange Cake',
    category: 'cakes',
    price: 575,
    unit: 'Half Kg',
    description: 'Moist citrus cake made with fresh orange juice and orange zest, glazed with a light orange glaze.',
    image: '/images/cake_orange.jpeg',
    isFeatured: false
  },
  {
    id: 'cake-pineapple',
    name: 'Pineapple Cake',
    category: 'cakes',
    price: 575,
    unit: 'Half Kg',
    description: 'Soft vanilla sponge layered with juicy pineapple chunks, fresh whipped cream, and cherry toppings.',
    image: '/images/cake_pineapple.jpeg',
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
    isFeatured: false
  },
  {
    id: 'bite-apple-pie',
    name: 'Apple Pie with Streusel',
    category: 'dessert-bites',
    price: 110,
    unit: 'Pc',
    description: 'Classic mini pie filled with spiced apples and topped with a sweet, buttery streusel crumble.',
    image: '/images/pie_apple.jpeg',
    isFeatured: true
  },

  // --- MUFFINS ---
  {
    id: 'muffin-coffee-walnut',
    name: 'Coffee Walnut Streusel Muffin',
    category: 'muffins',
    price: 55,
    unit: 'Pc',
    description: 'Espresso muffin topped with toasted walnuts and a crunchy cinnamon streusel.',
    image: '/images/muffin_coffee_walnut.jpeg',
    isFeatured: false
  },
  {
    id: 'muffin-choc-hazelnut',
    name: 'Chocolate Hazelnut Crumb Muffin',
    category: 'muffins',
    price: 55,
    unit: 'Pc',
    description: 'Rich chocolate muffin with a nutella core, topped with hazelnut crumbs.',
    image: '/images/muffin_choc_hazelnut.jpeg',
    isFeatured: false
  },
  {
    id: 'muffin-double-choc',
    name: 'Double Chocolate Chip Muffin',
    category: 'muffins',
    price: 55,
    unit: 'Pc',
    description: 'Decadent chocolate muffin loaded with both dark and milk chocolate chips.',
    image: '/images/muffin_chocolate_close.jpeg',
    isFeatured: true
  },
  {
    id: 'muffin-blueberry',
    name: 'Blueberry Muffin',
    category: 'muffins',
    price: 50,
    unit: 'Pc',
    description: 'Soft and moist bakery-style muffin bursting with fresh sweet blueberries.',
    image: '/images/muffin_almond.jpeg',
    isFeatured: true
  },
  {
    id: 'muffin-banana-choc',
    name: 'Banana Chocolate Chip Muffin',
    category: 'muffins',
    price: 50,
    unit: 'Pc',
    description: 'Sweet banana muffin loaded with chocolate chips, incredibly moist and flavorful.',
    image: '/images/muffin_banana_choc.jpeg',
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
    image: '/images/cupcake_chocolate.jpeg',
    isFeatured: false
  },
  {
    id: 'cupcake-espresso',
    name: 'Espresso Coffee Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Moist coffee sponge topped with a rich, aromatic espresso buttercream frosting.',
    image: '/images/cupcake_coffee.jpeg',
    isFeatured: false
  },
  {
    id: 'cupcake-vanilla',
    name: 'Vanilla Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Classic Madagascar vanilla bean cupcake topped with fluffy vanilla buttercream.',
    image: '/images/cupcake_vanilla.jpeg',
    isFeatured: false
  },
  {
    id: 'cupcake-butterscotch',
    name: 'Butterscotch Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Golden caramel cupcake topped with butterscotch frosting and home-made praline crunch.',
    image: '/images/cupcake_butterscotch.jpeg',
    isFeatured: false
  },
  {
    id: 'cupcake-lemon-blue',
    name: 'Lemon Blueberry Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Tangy lemon cupcake filled with fresh blueberry jam and topped with zesty frosting.',
    image: '/images/cupcake_lemon_blue.jpeg',
    isFeatured: false
  },
  {
    id: 'cupcake-red-velvet',
    name: 'Red Velvet Cream Cheese Cupcake',
    category: 'cupcakes',
    price: 55,
    unit: 'Pc',
    description: 'Classic red velvet cupcake topped with a generous swirl of sweet and tangy cream cheese frosting.',
    image: '/images/cupcake_red_velvet.jpeg',
    isFeatured: false
  },

  // --- COOKIES ---
  {
    id: 'cookie-rose-walnut',
    name: 'Rose Walnut Biscuit',
    category: 'cookies',
    price: 12,
    unit: 'Pc',
    description: 'Delicate buttery biscuit flavored with fragrant rose water and studded with crunchy walnut bits.',
    image: '/images/cookie_rose_walnut.jpeg',
    isFeatured: false
  },
  {
    id: 'cookie-choc-chip',
    name: 'Chocolate Chip Cookie',
    category: 'cookies',
    price: 30,
    unit: 'Pc',
    description: 'Classic crispy-edged, chewy-centered cookie loaded with premium semi-sweet chocolate chips.',
    image: '/images/cookie_chocolate_chip.jpeg',
    isFeatured: true
  },
  {
    id: 'cookie-butter',
    name: 'Butter Cookie',
    category: 'cookies',
    price: 10,
    unit: 'Pc',
    description: 'Melt-in-your-mouth shortbread cookie made with premium high-fat butter.',
    image: '/images/cookie_butter.jpeg',
    isFeatured: false
  },
  {
    id: 'cookie-nan-khatta',
    name: 'Desi Nan Khattai',
    category: 'cookies',
    price: 10,
    unit: 'Pc',
    description: 'Traditional Indian cardamom shortbread biscuit with a crumbly, melt-in-your-mouth texture.',
    image: '/images/cookie_nan_khatta.jpeg',
    isFeatured: false
  },
  {
    id: 'cookie-shrewsbury',
    name: 'Shrewsbury Biscuit',
    category: 'cookies',
    price: 12,
    unit: 'Pc',
    description: 'Famous buttery and sweet British-style biscuit with a hint of lemon and nutmeg.',
    image: '/images/cookie_shrewsbury.jpeg',
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
    image: '/images/health_ragi_jaggery.jpeg',
    isFeatured: false
  },
  {
    id: 'health-double-choc',
    name: 'Double Chocolate Whole Wheat Cookie',
    category: 'health-treats',
    price: 200,
    unit: 'Box',
    description: 'Healthy cookies made from 100% whole wheat flour, rich cocoa powder, and dark chocolate chips.',
    image: '/images/health_double_choc.jpeg',
    isFeatured: false
  },
  {
    id: 'health-coconut',
    name: 'Whole Wheat Coconut Cookie',
    category: 'health-treats',
    price: 150,
    unit: 'Box',
    description: 'Crispy whole wheat cookies loaded with toasted coconut flakes, sweet and aromatic.',
    image: '/images/health_coconut.jpeg',
    isFeatured: false
  },
  {
    id: 'health-gf-cranberry',
    name: 'Gluten-Free Cranberry Chocochip Coconut',
    category: 'health-treats',
    price: 210,
    unit: 'Box',
    description: 'A allergen-friendly powerhouse packed with tart cranberries, dark chocolate chips, and shredded coconut.',
    image: '/images/health_gf_cranberry.jpeg  ',
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
    image: '/images/tea-cake_parsi_mawa.jpeg',
    isFeatured: false
  },
  {
    id: 'tea-banana-choc',
    name: 'Banana Chocolate Chip',
    category: 'tea-cakes',
    price: 300,
    unit: 'Loaf',
    description: 'Perfectly sweet, moist banana loaf loaded with dark chocolate chips. Ideal with afternoon tea.',
    image: '  /images/tea_banana_choc.jpeg',
    isFeatured: false
  },
  {
    id: 'tea-zebra',
    name: 'Zebra Tea Cake',
    category: 'tea-cakes',
    price: 300,
    unit: 'Loaf',
    description: 'Elegantly striped marble cake with alternating layers of vanilla and chocolate sponge.',
    image: '/images/tea_zebra.jpeg',
    isFeatured: false
  },
  {
    id: 'tea-madeira',
    name: 'Madeira Cake',
    category: 'tea-cakes',
    price: 375,
    unit: 'Loaf',
    description: 'Classic British sponge cake with a firm yet light texture, subtly flavored with lemon zest.',
    image: '/images/tea_madeira.jpeg',
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
    image: '/images/bread_whole_wheat.jpeg',
    isFeatured: false
  },
  {
    id: 'bread-burger-buns',
    name: 'Burger Buns',
    category: 'breads',
    price: 25,
    unit: 'Pack of 2',
    description: 'Soft, brioche-style sesame burger buns, baked fresh daily.',
    image: '/images/bread_burger_buns.jpeg',
    isFeatured: false
  },
  {
    id: 'bread-milk-buns',
    name: 'Milk Buns',
    category: 'breads',
    price: 12,
    unit: 'Pc',
    description: 'Super soft, fluffy, sweet Japanese-style milk buns.',
    image: '/images/bread_milk_buns.jpeg',
    isFeatured: false
  },
  {
    id: 'bread-pita',
    name: 'Pita Bread',
    category: 'breads',
    price: 15,
    unit: 'Pc',
    description: 'Authentic stone-baked pocket pita bread, perfect for falafels and wraps.',
    image: '/images/bread_pita.jpeg',
    isFeatured: false
  },
  {
    id: 'bread-focaccia-topped',
    name: 'Focaccia with Toppings',
    category: 'breads',
    price: 150,
    unit: 'Loaf',
    description: 'Ligurian-style flatbread topped with cherry tomatoes, kalamata olives, rosemary, and sea salt.',
    image: '/images/bread_focaccia_topped.jpeg',
    isFeatured: false
  },
  {
    id: 'bread-focaccia-herbs',
    name: 'Focaccia Herbs (Overnight Fermented)',
    category: 'breads',
    price: 170,
    unit: 'Loaf',
    description: 'Overnight fermented flatbread with deep flavor bubbles, infused with olive oil and Italian herbs.',
    image: '/images/bread_focaccia_herbs.jpeg',
    isFeatured: false
  },
  {
    id: 'bread-braided-stuffed',
    name: 'Braided Bread with Stuffings',
    category: 'breads',
    price: 150,
    unit: 'Loaf',
    description: 'Beautifully braided soft bread loaf filled with savory cheese, garlic, and fresh herb stuffing.',
    image: '/images/bread_braided.jpeg',
    isFeatured: true
  },

  // --- PIZZA ---
  {
    id: 'pizza-small',
    name: 'Small (8 inch)',
    category: 'pizza',
    price: 260,
    unit: '8 inch',
    description: 'Individual 8-inch fresh dough pizza base topped with gourmet marinara sauce and premium mozzarella.',
    image: '/images/pizza_small.jpeg',
    isFeatured: false
  },
  {
    id: 'pizza-medium',
    name: 'Medium (10 inch)',
    category: 'pizza',
    price: 330,
    unit: '10 inch',
    description: 'Classic 10-inch shareable fresh dough pizza base topped with gourmet marinara sauce and premium mozzarella.',
    image: '/images/pizza_veggie.jpeg',
    isFeatured: true
  },
  {
    id: 'pizza-large',
    name: 'Large (12 inch)',
    category: 'pizza',
    price: 400,
    unit: '12 inch',
    description: 'Family-size 12-inch fresh dough pizza base topped with gourmet marinara sauce and premium mozzarella.',
    image: '/images/pizza_large.jpeg',
    isFeatured: false
  }
];
