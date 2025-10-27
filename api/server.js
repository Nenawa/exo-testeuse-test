
const http = require('http');

// Product data is now managed by the backend
const products = [
  {
    id: 1,
    name: 'Astro Explorer Watch',
    price: 299.99,
    description: 'A sleek, futuristic timepiece for the modern adventurer. Water-resistant and built to last.',
    imageUrl: 'https://picsum.photos/seed/watch/400/300',
  },
  {
    id: 2,
    name: 'Ergo-Comfort Chair',
    price: 349.50,
    description: 'Experience unparalleled comfort with our ergonomically designed office chair. Perfect for long hours.',
    imageUrl: 'https://picsum.photos/seed/chair/400/300',
  },
  {
    id: 3,
    name: 'SonicWave Headphones',
    price: 179.00,
    description: 'Immerse yourself in crystal-clear audio with these noise-cancelling over-ear headphones.',
    imageUrl: 'https://picsum.photos/seed/headphones/400/300',
  },
  {
    id: 4,
    name: 'Zenith Minimalist Lamp',
    price: 89.99,
    description: 'Illuminate your space with this elegant and modern desk lamp. Features adjustable brightness.',
    imageUrl: 'https://picsum.photos/seed/lamp/400/300',
  },
  {
    id: 5,
    name: 'Nomad Leather Backpack',
    price: 220.00,
    description: 'A stylish and durable backpack crafted from genuine leather. Ample space for all your essentials.',
    imageUrl: 'https://picsum.photos/seed/backpack/400/300',
  },
  {
    id: 6,
    name: 'HydroFlow Smart Bottle',
    price: 59.95,
    description: 'Stay hydrated with this smart water bottle that tracks your intake and glows to remind you to drink.',
    imageUrl: 'https://picsum.photos/seed/bottle/400/300',
  },
  {
    id: 7,
    name: 'AeroPress Coffee Maker',
    price: 39.99,
    description: 'Brew the perfect cup of coffee in minutes. A favorite among coffee enthusiasts worldwide.',
    imageUrl: 'https://picsum.photos/seed/coffee/400/300',
  },
  {
    id: 8,
    name: 'Terra Cotta Planter Set',
    price: 45.00,
    description: 'A set of three beautiful terra cotta planters to bring a touch of nature to your home.',
    imageUrl: 'https://picsum.photos/seed/planter/400/300',
  },
   {
    id: 9,
    name: 'Velocity Running Shoes',
    price: 129.99,
    description: 'Lightweight and responsive running shoes designed for speed and comfort on any terrain.',
    imageUrl: 'https://picsum.photos/seed/shoes/400/300',
  },
  {
    id: 10,
    name: 'Artisan Sketchbook',
    price: 24.50,
    description: 'A premium-quality sketchbook with thick, bleed-proof paper for all your creative ideas.',
    imageUrl: 'https://picsum.photos/seed/book/400/300',
  },
  {
    id: 11,
    name: 'Gourmet Olive Oil',
    price: 32.00,
    description: 'Extra virgin olive oil from a single origin, cold-pressed for a rich, robust flavor.',
    imageUrl: 'https://picsum.photos/seed/oil/400/300',
  },
  {
    id: 12,
    name: 'SkyView Drone',
    price: 499.00,
    description: 'Capture stunning aerial photos and videos with this easy-to-fly 4K camera drone.',
    imageUrl: 'https://picsum.photos/seed/drone/400/300',
  }
];

const server = http.createServer((req, res) => {
    // Set CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle pre-flight CORS requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Route for getting products
    if (req.url === '/api/products' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } else {
        // Handle 404 Not Found for other routes
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'API endpoint not found' }));
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`API server is running on http://localhost:${PORT}`);
});
