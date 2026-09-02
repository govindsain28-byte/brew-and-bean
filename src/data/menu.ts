import { MenuItem, MenuCategory, Customization } from "@/types";
import { slugify } from "@/lib/utils";

const MILK_OPTION = {
  id: "milk",
  name: "Milk Choice",
  type: "single" as const,
  required: false,
  options: [
    { id: "whole", label: "Whole Milk", priceDelta: 0 },
    { id: "oat", label: "Oat Milk", priceDelta: 40 },
    { id: "almond", label: "Almond Milk", priceDelta: 45 },
    { id: "soy", label: "Soy Milk", priceDelta: 35 },
  ],
};

const SIZE_OPTION = {
  id: "size",
  name: "Size",
  type: "single" as const,
  required: true,
  options: [
    { id: "regular", label: "Regular", priceDelta: 0 },
    { id: "large", label: "Large", priceDelta: 60 },
  ],
};

const SUGAR_OPTION = {
  id: "sugar",
  name: "Sugar Level",
  type: "single" as const,
  required: false,
  options: [
    { id: "normal", label: "Normal", priceDelta: 0 },
    { id: "less", label: "Less Sugar", priceDelta: 0 },
    { id: "no-sugar", label: "No Sugar", priceDelta: 0 },
    { id: "extra", label: "Extra Sweet", priceDelta: 0 },
  ],
};

const EXTRA_SHOT = {
  id: "extra-shot",
  name: "Add-ons",
  type: "multiple" as const,
  required: false,
  options: [
    { id: "shot", label: "Extra Espresso Shot", priceDelta: 70 },
    { id: "caramel", label: "Caramel Drizzle", priceDelta: 30 },
    { id: "whipped", label: "Whipped Cream", priceDelta: 40 },
    { id: "cinnamon", label: "Cinnamon Dust", priceDelta: 15 },
  ],
};

interface Seed {
  name: string;
  category: MenuCategory;
  price: number;
  compareAtPrice?: number;
  description: string;
  longDescription: string;
  calories: number;
  image: string;
  isVeg: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  isSignature?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
  ingredients: string[];
  allergens: string[];
  prepTimeMinutes: number;
  tags: string[];
  customizations?: Customization[];
}

function buildItem(seed: Seed, index: number): MenuItem {
  return {
    id: `item-${index + 1}`,
    slug: slugify(seed.name),
    name: seed.name,
    category: seed.category,
    price: seed.price,
    compareAtPrice: seed.compareAtPrice,
    rating: Number((4 + Math.random() * 0.9).toFixed(1)),
    reviewCount: 40 + Math.floor(Math.random() * 460),
    description: seed.description,
    longDescription: seed.longDescription,
    calories: seed.calories,
    image: seed.image,
    gallery: [seed.image],
    tags: seed.tags,
    isVeg: seed.isVeg,
    isBestSeller: seed.isBestSeller,
    isNew: seed.isNew,
    isSignature: seed.isSignature,
    spiceLevel: seed.spiceLevel,
    customizations: seed.customizations ?? [],
    ingredients: seed.ingredients,
    allergens: seed.allergens,
    prepTimeMinutes: seed.prepTimeMinutes,
  };
}

const seeds: Seed[] = [
  // COFFEE
  { name: "Classic Filter Coffee", category: "coffee", price: 149, description: "South Indian filter kaapi with rich chicory blend.", longDescription: "Our signature filter coffee is brewed the traditional South Indian way — a robust decoction of hand-roasted Arabica and Robusta beans, blended with a touch of chicory, and finished with frothy hot milk poured tableside from brass davarah-tumbler sets.", calories: 120, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80", isVeg: true, isBestSeller: true, isSignature: true, ingredients: ["Arabica beans", "Robusta beans", "Chicory", "Milk", "Sugar"], allergens: ["Milk"], prepTimeMinutes: 5, tags: ["Signature", "Traditional"], customizations: [MILK_OPTION, SUGAR_OPTION] },
  { name: "Single Origin Pour Over", category: "coffee", price: 259, description: "Chikmagalur estate beans, hand poured, notes of jaggery and citrus.", longDescription: "A meticulous pour-over using single-origin beans sourced directly from a Chikmagalur estate. Brewed to order for a clean, bright cup with tasting notes of jaggery, orange zest, and dark chocolate.", calories: 5, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80", isVeg: true, isNew: true, ingredients: ["Single-origin Arabica"], allergens: [], prepTimeMinutes: 7, tags: ["Single Origin", "Pour Over"] },
  { name: "Caramel Latte", category: "coffee", price: 229, description: "Velvety espresso, steamed milk, house caramel.", longDescription: "Double espresso shots meet silky steamed milk and our house-made caramel sauce, finished with a delicate latte art pour.", calories: 240, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Espresso", "Milk", "Caramel sauce"], allergens: ["Milk"], prepTimeMinutes: 6, tags: ["Sweet", "Popular"], customizations: [MILK_OPTION, SIZE_OPTION, EXTRA_SHOT] },
  { name: "Hazelnut Mocha", category: "coffee", price: 259, description: "Espresso, dark chocolate, roasted hazelnut syrup.", longDescription: "A decadent blend of espresso and Belgian dark chocolate, layered with roasted hazelnut syrup and topped with whipped cream.", calories: 310, image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80", isVeg: true, ingredients: ["Espresso", "Dark chocolate", "Hazelnut syrup", "Milk"], allergens: ["Milk", "Nuts"], prepTimeMinutes: 6, tags: ["Chocolate"], customizations: [MILK_OPTION, SIZE_OPTION, EXTRA_SHOT] },
  { name: "Vietnamese Egg Coffee", category: "coffee", price: 279, description: "Whipped egg cream over dark roast, dessert-like.", longDescription: "A rich, custard-like whipped egg yolk cream floats atop our darkest roast — a beloved Hanoi classic reimagined for Vijayawada mornings.", calories: 280, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80", isVeg: true, isNew: true, ingredients: ["Egg yolk", "Condensed milk", "Dark roast coffee"], allergens: ["Egg", "Milk"], prepTimeMinutes: 8, tags: ["Exotic"] },
  // ESPRESSO
  { name: "Espresso Single", category: "espresso", price: 129, description: "Pure, intense shot of our house blend.", longDescription: "A concentrated 30ml shot pulled from our signature house blend, delivering deep caramel sweetness with a bright citrus finish.", calories: 5, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80", isVeg: true, ingredients: ["Espresso beans"], allergens: [], prepTimeMinutes: 3, tags: ["Classic"] },
  { name: "Cappuccino", category: "espresso", price: 199, description: "Equal parts espresso, steamed milk, and microfoam.", longDescription: "The purist's cappuccino — a balanced trinity of rich espresso, velvety steamed milk, and a crown of airy microfoam dusted with cocoa.", calories: 150, image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Espresso", "Milk"], allergens: ["Milk"], prepTimeMinutes: 5, tags: ["Classic", "Popular"], customizations: [MILK_OPTION, SIZE_OPTION] },
  { name: "Flat White", category: "espresso", price: 219, description: "Double ristretto with silky microfoam.", longDescription: "A double ristretto shot layered with steamed whole milk, poured to a velvety microfoam finish for a smooth, strong flavour.", calories: 170, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80", isVeg: true, ingredients: ["Espresso", "Milk"], allergens: ["Milk"], prepTimeMinutes: 5, tags: ["Strong"], customizations: [MILK_OPTION] },
  { name: "Affogato", category: "espresso", price: 249, description: "Hot espresso poured over vanilla bean gelato.", longDescription: "A show-stopping dessert-drink hybrid: a hot shot of espresso drowning a scoop of house-churned vanilla bean gelato.", calories: 220, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80", isVeg: true, isSignature: true, ingredients: ["Espresso", "Vanilla gelato"], allergens: ["Milk"], prepTimeMinutes: 5, tags: ["Dessert"] },
  { name: "Americano", category: "espresso", price: 169, description: "Espresso lengthened with hot water.", longDescription: "Double espresso shots diluted with hot water for a lighter body while preserving the full depth of flavour.", calories: 10, image: "https://images.unsplash.com/photo-1580933073521-dc51f22c5c56?w=800&q=80", isVeg: true, ingredients: ["Espresso", "Water"], allergens: [], prepTimeMinutes: 4, tags: ["Classic"], customizations: [SIZE_OPTION] },
  // COLD COFFEE
  { name: "Iced Caramel Macchiato", category: "cold-coffee", price: 259, description: "Vanilla, milk, espresso, caramel drizzle over ice.", longDescription: "Cold milk and vanilla syrup marked with a shot of espresso, poured over ice and finished with a generous caramel drizzle.", calories: 260, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Espresso", "Milk", "Vanilla syrup", "Caramel"], allergens: ["Milk"], prepTimeMinutes: 5, tags: ["Iced", "Popular"], customizations: [MILK_OPTION, SIZE_OPTION, EXTRA_SHOT] },
  { name: "Cold Brew", category: "cold-coffee", price: 229, description: "Steeped 18 hours, smooth and low-acid.", longDescription: "Coarse-ground beans steeped in cold filtered water for 18 hours, yielding a naturally sweet, low-acid, ultra-smooth brew served over ice.", calories: 15, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80", isVeg: true, ingredients: ["Cold brew concentrate", "Water"], allergens: [], prepTimeMinutes: 3, tags: ["Iced", "Smooth"] },
  { name: "Frappe Supreme", category: "cold-coffee", price: 279, description: "Blended espresso, milk, ice, whipped cream crown.", longDescription: "Espresso blended with milk and ice into a thick, frothy frappe, crowned with whipped cream and a chocolate drizzle.", calories: 340, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80", isVeg: true, ingredients: ["Espresso", "Milk", "Ice", "Whipped cream"], allergens: ["Milk"], prepTimeMinutes: 5, tags: ["Blended"], customizations: [SIZE_OPTION] },
  { name: "Nitro Cold Brew", category: "cold-coffee", price: 299, description: "Nitrogen-infused for a cascading, creamy pour.", longDescription: "Our cold brew infused with nitrogen for a naturally sweet, cascading, Guinness-like texture — no cream needed.", calories: 10, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80", isVeg: true, isNew: true, ingredients: ["Cold brew concentrate", "Nitrogen"], allergens: [], prepTimeMinutes: 4, tags: ["Trending"] },
  // TEA
  { name: "Masala Chai", category: "tea", price: 129, description: "Hand-pounded spices, strong Assam leaves.", longDescription: "A robust brew of Assam tea leaves simmered with hand-pounded cardamom, ginger, clove, and cinnamon, finished with frothy milk.", calories: 110, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Assam tea", "Spices", "Milk"], allergens: ["Milk"], prepTimeMinutes: 6, tags: ["Traditional"] },
  { name: "Jasmine Green Tea", category: "tea", price: 159, description: "Delicate green tea scented with jasmine blossoms.", longDescription: "Whole-leaf green tea gently scented with real jasmine blossoms for a floral, calming cup.", calories: 5, image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80", isVeg: true, ingredients: ["Green tea", "Jasmine"], allergens: [], prepTimeMinutes: 5, tags: ["Light", "Floral"] },
  { name: "Iced Peach Tea", category: "tea", price: 189, description: "Black tea, fresh peach, mint over ice.", longDescription: "Cold-steeped black tea muddled with fresh peach and mint, served long over ice.", calories: 90, image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=800&q=80", isVeg: true, isNew: true, ingredients: ["Black tea", "Peach", "Mint"], allergens: [], prepTimeMinutes: 5, tags: ["Iced", "Fruity"] },
  { name: "Turmeric Ginger Chai", category: "tea", price: 169, description: "Wellness blend with turmeric, ginger, black pepper.", longDescription: "A warming wellness infusion of turmeric, fresh ginger, and black pepper steeped with black tea and a touch of honey.", calories: 80, image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&q=80", isVeg: true, ingredients: ["Black tea", "Turmeric", "Ginger", "Honey"], allergens: [], prepTimeMinutes: 6, tags: ["Wellness"] },
  // MOCKTAILS
  { name: "Virgin Mojito", category: "mocktails", price: 199, description: "Fresh mint, lime, soda, a hint of sugarcane.", longDescription: "Muddled fresh mint and lime with sugarcane syrup, topped with chilled soda for a refreshing zero-proof classic.", calories: 120, image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Mint", "Lime", "Soda", "Sugarcane syrup"], allergens: [], prepTimeMinutes: 5, tags: ["Refreshing"] },
  { name: "Blue Lagoon Fizz", category: "mocktails", price: 219, description: "Blue curacao syrup, lemonade, citrus foam.", longDescription: "A vibrant blue mocktail of tropical citrus, lemonade, and a light citrus foam — Instagram's favourite.", calories: 160, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800&q=80", isVeg: true, isNew: true, ingredients: ["Blue syrup", "Lemonade", "Soda"], allergens: [], prepTimeMinutes: 5, tags: ["Trending", "Photogenic"] },
  { name: "Watermelon Basil Cooler", category: "mocktails", price: 229, description: "Muddled watermelon, basil, lime, soda.", longDescription: "Fresh watermelon juice muddled with basil leaves and lime, topped with soda for a garden-fresh summer cooler.", calories: 110, image: "https://images.unsplash.com/photo-1560508601-3b6d84f0ff4d?w=800&q=80", isVeg: true, ingredients: ["Watermelon", "Basil", "Lime"], allergens: [], prepTimeMinutes: 5, tags: ["Seasonal"] },
  // SMOOTHIES
  { name: "Mango Bliss Smoothie", category: "smoothies", price: 249, description: "Alphonso mango, yogurt, honey.", longDescription: "Ripe Alphonso mango blended with thick yogurt and honey for a creamy, tropical smoothie.", calories: 280, image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Mango", "Yogurt", "Honey"], allergens: ["Milk"], prepTimeMinutes: 5, tags: ["Seasonal", "Fruity"] },
  { name: "Berry Antioxidant Smoothie", category: "smoothies", price: 269, description: "Mixed berries, banana, almond milk, chia.", longDescription: "A vibrant blend of mixed berries, banana, almond milk and chia seeds — packed with antioxidants and fibre.", calories: 240, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80", isVeg: true, isNew: true, ingredients: ["Mixed berries", "Banana", "Almond milk", "Chia"], allergens: ["Nuts"], prepTimeMinutes: 5, tags: ["Healthy"] },
  { name: "Green Detox Smoothie", category: "smoothies", price: 259, description: "Spinach, apple, cucumber, ginger, lime.", longDescription: "A cleansing green blend of spinach, apple, cucumber, ginger and lime — light, crisp, and energising.", calories: 150, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&q=80", isVeg: true, ingredients: ["Spinach", "Apple", "Cucumber", "Ginger"], allergens: [], prepTimeMinutes: 5, tags: ["Healthy", "Detox"] },
  // BREAKFAST
  { name: "Avocado Toast", category: "breakfast", price: 329, description: "Smashed avocado, sourdough, chilli flakes, feta.", longDescription: "Toasted artisan sourdough topped with smashed avocado, cherry tomatoes, crumbled feta, chilli flakes and a drizzle of olive oil.", calories: 380, image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Sourdough", "Avocado", "Feta", "Tomato"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 10, tags: ["Healthy"] },
  { name: "Classic Eggs Benedict", category: "breakfast", price: 349, description: "Poached eggs, hollandaise, English muffin.", longDescription: "Silky poached eggs over toasted English muffins and smoked turkey, blanketed in a rich hollandaise sauce.", calories: 450, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80", isVeg: false, ingredients: ["Eggs", "English muffin", "Hollandaise", "Turkey"], allergens: ["Egg", "Gluten", "Milk"], prepTimeMinutes: 12, tags: ["Brunch"] },
  { name: "Blueberry Pancakes", category: "breakfast", price: 289, description: "Fluffy stack, maple syrup, fresh blueberries.", longDescription: "A tall stack of buttermilk pancakes studded with fresh blueberries, served with warm maple syrup and butter.", calories: 420, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", isVeg: true, ingredients: ["Flour", "Blueberries", "Maple syrup", "Butter"], allergens: ["Gluten", "Egg", "Milk"], prepTimeMinutes: 12, tags: ["Sweet", "Popular"], isBestSeller: true },
  { name: "South Indian Combo", category: "breakfast", price: 249, description: "Idli, vada, sambar, two chutneys.", longDescription: "A wholesome plate of soft idlis, crispy medu vada, piping hot sambar and coconut-mint chutneys.", calories: 380, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80", isVeg: true, ingredients: ["Rice", "Lentils", "Coconut"], allergens: [], prepTimeMinutes: 10, tags: ["Traditional", "Local Favourite"] },
  // LUNCH
  { name: "Grilled Chicken Caesar Salad", category: "lunch", price: 389, description: "Char-grilled chicken, romaine, parmesan, croutons.", longDescription: "Crisp romaine tossed in a house Caesar dressing with char-grilled chicken breast, shaved parmesan and garlic croutons.", calories: 420, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80", isVeg: false, ingredients: ["Chicken", "Romaine", "Parmesan", "Croutons"], allergens: ["Gluten", "Milk", "Egg"], prepTimeMinutes: 12, tags: ["Protein"] },
  { name: "Mediterranean Buddha Bowl", category: "lunch", price: 349, description: "Quinoa, hummus, falafel, roasted veg.", longDescription: "A nourishing bowl of quinoa, house-made hummus, crispy falafel, roasted vegetables and tahini dressing.", calories: 460, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Quinoa", "Hummus", "Falafel", "Vegetables"], allergens: ["Sesame"], prepTimeMinutes: 12, tags: ["Healthy", "Vegan"] },
  { name: "Butter Chicken with Rice", category: "lunch", price: 399, description: "Slow-cooked tomato gravy, tender chicken, jeera rice.", longDescription: "Tender chicken simmered in a rich, buttery tomato gravy, served with fragrant jeera rice and naan on the side.", calories: 520, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80", isVeg: false, spiceLevel: 1, ingredients: ["Chicken", "Tomato", "Butter", "Rice"], allergens: ["Milk"], prepTimeMinutes: 15, tags: ["Comfort Food"] },
  // PIZZA
  { name: "Margherita Pizza", category: "pizza", price: 349, description: "San Marzano tomato, fresh mozzarella, basil.", longDescription: "Wood-fired thin crust topped with San Marzano tomato sauce, fresh buffalo mozzarella and torn basil leaves.", calories: 640, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Pizza dough", "Tomato", "Mozzarella", "Basil"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 16, tags: ["Classic"] },
  { name: "Farmhouse Delight", category: "pizza", price: 399, description: "Bell peppers, onion, mushroom, corn, olives.", longDescription: "Loaded with capsicum, red onion, mushroom, sweet corn and black olives over a herbed tomato base.", calories: 620, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", isVeg: true, ingredients: ["Pizza dough", "Vegetables", "Cheese"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 16, tags: ["Veggie Loaded"] },
  { name: "Peri Peri Chicken Pizza", category: "pizza", price: 449, description: "Spiced peri peri chicken, onions, jalapenos.", longDescription: "Fiery peri-peri marinated chicken with caramelised onions and pickled jalapenos on a smoky tomato base.", calories: 680, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80", isVeg: false, spiceLevel: 2, ingredients: ["Chicken", "Peri peri sauce", "Cheese"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 18, tags: ["Spicy"] },
  // BURGER
  { name: "Classic Smash Burger", category: "burger", price: 289, description: "Double smashed patty, cheddar, house sauce.", longDescription: "Two smashed beef patties with melted cheddar, pickles, lettuce and our signature burger sauce in a toasted brioche bun.", calories: 620, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80", isVeg: false, isBestSeller: true, ingredients: ["Beef patty", "Cheddar", "Brioche bun"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 14, tags: ["Signature"] },
  { name: "Crispy Paneer Burger", category: "burger", price: 259, description: "Crumb-fried paneer, mint mayo, slaw.", longDescription: "Golden crumb-fried paneer steak with tangy mint mayo and crunchy slaw in a soft potato bun.", calories: 480, image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=80", isVeg: true, ingredients: ["Paneer", "Slaw", "Potato bun"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 12, tags: ["Vegetarian"] },
  { name: "Spicy Chicken Zinger", category: "burger", price: 299, description: "Crispy fried chicken, spicy mayo, jalapenos.", longDescription: "Buttermilk-fried crispy chicken thigh with spicy mayo, iceberg lettuce and pickled jalapenos.", calories: 590, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80", isVeg: false, spiceLevel: 2, ingredients: ["Chicken", "Spicy mayo", "Bun"], allergens: ["Gluten", "Egg"], prepTimeMinutes: 14, tags: ["Spicy", "Popular"] },
  // PASTA
  { name: "Truffle Mushroom Alfredo", category: "pasta", price: 379, description: "Fettuccine, wild mushroom, truffle cream.", longDescription: "Fettuccine tossed in a silky truffle cream sauce with sauteed wild mushrooms and shaved parmesan.", calories: 560, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80", isVeg: true, isSignature: true, ingredients: ["Fettuccine", "Mushroom", "Cream", "Truffle oil"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 15, tags: ["Signature"] },
  { name: "Arrabbiata Penne", category: "pasta", price: 329, description: "Spicy tomato, garlic, chilli, basil.", longDescription: "Penne tossed in a fiery San Marzano tomato sauce with garlic, red chilli and fresh basil.", calories: 480, image: "https://images.unsplash.com/photo-1608219994488-cc0269bea87d?w=800&q=80", isVeg: true, spiceLevel: 2, ingredients: ["Penne", "Tomato", "Chilli", "Garlic"], allergens: ["Gluten"], prepTimeMinutes: 14, tags: ["Spicy"] },
  { name: "Chicken Carbonara", category: "pasta", price: 389, description: "Spaghetti, grilled chicken, egg, parmesan.", longDescription: "Classic carbonara with grilled chicken, crisp bacon bits, egg yolk and generous parmesan.", calories: 620, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80", isVeg: false, ingredients: ["Spaghetti", "Chicken", "Egg", "Parmesan"], allergens: ["Gluten", "Egg", "Milk"], prepTimeMinutes: 15, tags: ["Classic"] },
  // DESSERTS
  { name: "Molten Chocolate Lava Cake", category: "desserts", price: 249, description: "Warm cake, oozing centre, vanilla gelato.", longDescription: "A decadent dark chocolate cake with a warm, oozing molten centre, served with a scoop of vanilla bean gelato.", calories: 480, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Dark chocolate", "Butter", "Flour", "Egg"], allergens: ["Gluten", "Egg", "Milk"], prepTimeMinutes: 12, tags: ["Signature", "Warm"] },
  { name: "Classic Tiramisu", category: "desserts", price: 269, description: "Espresso-soaked ladyfingers, mascarpone.", longDescription: "Layers of espresso and marsala-soaked ladyfingers with silky mascarpone cream, dusted with cocoa.", calories: 420, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80", isVeg: true, ingredients: ["Ladyfingers", "Mascarpone", "Espresso", "Cocoa"], allergens: ["Gluten", "Egg", "Milk"], prepTimeMinutes: 5, tags: ["Italian", "Classic"] },
  { name: "New York Cheesecake", category: "desserts", price: 259, description: "Baked cream cheese, biscuit base, berry compote.", longDescription: "Dense and creamy baked cheesecake on a buttery biscuit base, topped with a house berry compote.", calories: 460, image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=800&q=80", isVeg: true, ingredients: ["Cream cheese", "Biscuit", "Berries"], allergens: ["Gluten", "Egg", "Milk"], prepTimeMinutes: 5, tags: ["Classic"] },
  // BAKERY
  { name: "Butter Croissant", category: "bakery", price: 129, description: "Laminated, flaky, baked fresh every morning.", longDescription: "A textbook French butter croissant — 27 layers of laminated dough, baked golden and flaky fresh each morning.", calories: 260, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Flour", "Butter", "Yeast"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 2, tags: ["Fresh Baked"] },
  { name: "Pain au Chocolat", category: "bakery", price: 149, description: "Buttery pastry, dark chocolate batons.", longDescription: "Flaky, buttery laminated pastry wrapped around two batons of dark chocolate.", calories: 310, image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80", isVeg: true, ingredients: ["Flour", "Butter", "Dark chocolate"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 2, tags: ["Fresh Baked"] },
  { name: "Banana Walnut Loaf", category: "bakery", price: 139, description: "Moist banana bread, toasted walnuts.", longDescription: "A moist, dense loaf of ripe banana bread studded with toasted walnuts — baked daily in-house.", calories: 290, image: "https://images.unsplash.com/photo-1605286658387-3d0e5b8b3f1c?w=800&q=80", isVeg: true, ingredients: ["Banana", "Walnut", "Flour"], allergens: ["Gluten", "Nuts", "Egg"], prepTimeMinutes: 2, tags: ["Fresh Baked"] },
  { name: "Cinnamon Roll", category: "bakery", price: 159, description: "Soft swirl, cream cheese icing.", longDescription: "A pillowy soft cinnamon-sugar swirl bun finished with a tangy cream cheese icing glaze.", calories: 380, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80", isVeg: true, isNew: true, ingredients: ["Flour", "Cinnamon", "Cream cheese"], allergens: ["Gluten", "Milk", "Egg"], prepTimeMinutes: 3, tags: ["Sweet"] },
  // KIDS
  { name: "Kids Mini Pizza", category: "kids", price: 199, description: "Mini cheese pizza with a smiley face.", longDescription: "A fun-sized cheese pizza decorated with a smiley face in veggies — a kids' favourite.", calories: 320, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", isVeg: true, ingredients: ["Pizza dough", "Cheese", "Vegetables"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 12, tags: ["Kids Favourite"] },
  { name: "Choco Milkshake", category: "kids", price: 169, description: "Rich chocolate shake, whipped cream, sprinkles.", longDescription: "Thick, rich chocolate milkshake topped with whipped cream and colourful sprinkles.", calories: 310, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=800&q=80", isVeg: true, isBestSeller: true, ingredients: ["Milk", "Chocolate", "Ice cream"], allergens: ["Milk"], prepTimeMinutes: 5, tags: ["Kids Favourite"] },
  { name: "Mini Pasta Bites", category: "kids", price: 189, description: "Bite-sized pasta in mild tomato sauce.", longDescription: "Small pasta shells tossed in a mild, kid-friendly tomato sauce with a sprinkle of cheese.", calories: 280, image: "https://images.unsplash.com/photo-1608219994488-cc0269bea87d?w=800&q=80", isVeg: true, ingredients: ["Pasta", "Tomato", "Cheese"], allergens: ["Gluten", "Milk"], prepTimeMinutes: 10, tags: ["Kids Favourite"] },
];

export const menuItems: MenuItem[] = seeds.map(buildItem);

export const categoryLabels: Record<MenuCategory, string> = {
  coffee: "Coffee",
  espresso: "Espresso Bar",
  "cold-coffee": "Cold Coffee",
  tea: "Tea",
  mocktails: "Mocktails",
  smoothies: "Smoothies",
  breakfast: "Breakfast",
  lunch: "Lunch",
  pizza: "Pizza",
  burger: "Burger",
  pasta: "Pasta",
  desserts: "Desserts",
  bakery: "Bakery",
  kids: "Kids Menu",
};

export const categoryOrder: MenuCategory[] = [
  "coffee",
  "espresso",
  "cold-coffee",
  "tea",
  "mocktails",
  "smoothies",
  "breakfast",
  "lunch",
  "pizza",
  "burger",
  "pasta",
  "desserts",
  "bakery",
  "kids",
];

export function getBestSellers(limit = 8): MenuItem[] {
  return menuItems.filter((i) => i.isBestSeller).slice(0, limit);
}

export function getSignatureItems(limit = 6): MenuItem[] {
  return menuItems.filter((i) => i.isSignature || i.isNew).slice(0, limit);
}

export function getItemBySlug(slug: string): MenuItem | undefined {
  return menuItems.find((i) => i.slug === slug);
}
