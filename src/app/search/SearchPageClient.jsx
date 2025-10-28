"use client";
import { useSearchParams } from "next/navigation";

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const products = [
    { id: 1, title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: "-40%", rating: 4, reviews: 88, img: "saleproduct1.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "havit-hv-g92-gamepad", stock: true },
    { id: 2, title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: "-35%", rating: 4, reviews: 75, img: "saleproduct2.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "ak-900-wired-keyboard", stock: false },
    { id: 3, title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: "-30%", rating: 5, reviews: 99, img: "/saleproduct3.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "ips-lcd-gaming-monitor", stock: true },
    { id: 4, title: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%", rating: 5, reviews: 99, img: "/saleproduct4.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "s-series-comfort-chair", stock: true },
    { id: 5, title: "The North Coat", price: 260, oldPrice: 360, rating: 5, reviews: 65, img: "/bestselling1.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "the-north-coat", stock: false },
    { id: 6, title: "Gucci Duffle Bag", price: 960, oldPrice: 1160, rating: 5, reviews: 65, img: "/bestselling2.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "gucci-duffle-bag", stock: true },
    { id: 7, title: "RGB Liquid CPU Cooler", price: 160, oldPrice: 170, rating: 5, reviews: 65, img: "/bestselling3.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "rgb-liquid-cpu-cooler-160", stock: false },
    { id: 8, title: "Small BookShelf", price: 360, oldPrice: 400, rating: 5, reviews: 65, img: "/bestselling4.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "small-bookshelf", stock: true },
    { id: 9, title: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, img: "/dogfood.jpg", slug: "breed-dry-dog-food", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], stock: true },
    { id: 10, title: "CANON EOS DSLR Camera", price: 360, rating: 5, reviews: 95, img: "/camera.png", slug: "canon-eos-dslr-camera", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], stock: false },
    { id: 11, title: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325, img: "/laptop.png", slug: "asus-fhd-gaming-laptop", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], stock: true },
    { id: 12, title: "Curology Product Set", price: 500, rating: 4, reviews: 145, img: "/curology.png", slug: "curology-product-set", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], stock: true },
    { id: 13, title: "Kids Toy Car", price: 100, rating: 3, reviews: 35, img: "/car.png", slug: "kids-toy-car", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], stock: false },
    { id: 14, title: "Football Shoes", price: 360, rating: 5, reviews: 95, img: "/shoes.png", slug: "football-shoes", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], stock: true },
    { id: 15, title: "Gaming Laptop", price: 700, rating: 5, reviews: 325, img: "/gaminglaptop.png", slug: "gaming-laptop", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], stock: true },
    { id: 16, title: "Gaming Controller", price: 500, rating: 4, reviews: 145, img: "/gamepad.png", slug: "gaming-controller", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], stock: false },
    { id: 17, title: "RGB Liquid CPU Cooler", price: 750, rating: 5, reviews: 65, img: "/laptop.png", discount: "-35%", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "rgb-liquid-cpu-cooler-750", stock: true },
    { id: 18, title: "RGB Liquid CPU Cooler", price: 750, rating: 5, reviews: 65, img: "/saleproduct3.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "rgb-liquid-cpu-cooler-saleproduct3", stock: true },
    { id: 19, title: "RGB Liquid CPU Cooler", price: 750, rating: 5, reviews: 65, img: "/saleproduct1.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "rgb-liquid-cpu-cooler-saleproduct1", stock: false },
    { id: 20, title: "RGB Liquid CPU Cooler", price: 750, rating: 5, reviews: 65, img: "/saleproduct2.png", images: ["/gamepad1.png", "/gamepad2.png", "/gamepad3.png", "/gamepad4.png"], slug: "rgb-liquid-cpu-cooler-saleproduct2", stock: true },
    { id: 21, title: "Floral Print Kurta Set", img: "/women-1.jpg", price: 120, oldPrice: 160, rating: 4, discount: "-25%", slug: "floral-print-kurta-set" },
    { id: 22, title: "Checkered Top & Pants", img: "/women-2.jpg", price: 90, oldPrice: 110, rating: 4, discount: "-20%", slug: "checkered-top-pants" },
    { id: 23, title: "Blue Tunic", img: "/women-3.jpg", price: 80, oldPrice: 100, rating: 5, discount: "-15%", slug: "blue-tunic" },
    { id: 24, title: "Embroidered Saree", img: "/women-4.jpg", price: 150, oldPrice: 180, rating: 5, discount: "-30%", slug: "embroidered-saree" },
    { id: 25, title: "Casual Cotton Shirt", img: "/men-1.jpg", price: 60, oldPrice: 80, rating: 4, discount: "-25%", slug: "casual-cotton-shirt" },
    { id: 26, title: "Denim Jacket", img: "/men-2.jpg", price: 100, oldPrice: 120, rating: 5, discount: "-15%", slug: "denim-jacket" },
    { id: 27, title: "Slim Fit Jeans", img: "/men-3.jpg", price: 70, oldPrice: 90, rating: 4, discount: "-22%", slug: "slim-fit-jeans" },
    { id: 28, title: "Formal Suit", img: "/men-4.jpg", price: 180, oldPrice: 220, rating: 5, discount: "-18%", slug: "formal-suit" },
    { id: 29, title: "Smartphone Pro X", img: "/electronic-1.webp", price: 799, oldPrice: 999, rating: 5, discount: "-20%", slug: "smartphone-pro-x" },
    { id: 30, title: "Wireless Headphones", img: "/electronic-2.webp", price: 120, oldPrice: 150, rating: 4, discount: "-15%", slug: "wireless-headphones" },
    { id: 31, title: "4K LED TV", img: "/electronic-3.webp", price: 450, oldPrice: 600, rating: 5, discount: "-25%", slug: "4k-led-tv" },
    { id: 32, title: "Bluetooth Speaker", img: "/electronic-4.jpg", price: 80, oldPrice: 100, rating: 4, discount: "-20%", slug: "bluetooth-speaker" },
    { id: 33, title: "Wooden Table Lamp", img: "/home-1.webp", price: 45, oldPrice: 60, rating: 4, discount: "-25%", slug: "wooden-table-lamp" },
    { id: 34, title: "Cotton Bed Sheet", img: "/home-2.webp", price: 70, oldPrice: 85, rating: 5, discount: "-18%", slug: "cotton-bed-sheet" },
    { id: 35, title: "Wall Clock", img: "/home-3.webp", price: 30, oldPrice: 45, rating: 4, discount: "-33%", slug: "wall-clock" },
    { id: 36, title: "Indoor Plant Set", img: "/home-4.avif", price: 55, oldPrice: 70, rating: 5, discount: "-21%", slug: "indoor-plant-set" },
    { id: 37, title: "Vitamin C Tablets", img: "/medicine-1.jpg", price: 20, oldPrice: 30, rating: 4, discount: "-33%", slug: "vitamin-c-tablets" },
    { id: 38, title: "Pain Relief Spray", img: "/medicine-2.jpg", price: 10, oldPrice: 15, rating: 5, discount: "-30%", slug: "pain-relief-spray" },
    { id: 39, title: "Digital Thermometer", img: "/medicine-3.jpg", price: 25, oldPrice: 35, rating: 4, discount: "-28%", slug: "digital-thermometer" },
    { id: 40, title: "First Aid Kit", img: "/medicine-4.jpg", price: 35, oldPrice: 45, rating: 4, discount: "-22%", slug: "first-aid-kit" },
    { id: 41, title: "Football", img: "/sports-1.jpg", price: 40, oldPrice: 55, rating: 5, discount: "-27%", slug: "football" },
    { id: 42, title: "Yoga Mat", img: "/sports-2.jpg", price: 25, oldPrice: 35, rating: 4, discount: "-29%", slug: "yoga-mat" },
    { id: 43, title: "Camping Tent", img: "/sports-3.jpg", price: 120, oldPrice: 150, rating: 5, discount: "-20%", slug: "camping-tent" },
    { id: 44, title: "Tennis Racket", img: "/sports-4.jpg", price: 85, oldPrice: 100, rating: 4, discount: "-15%", slug: "tennis-racket" },
    { id: 45, title: "Soft Teddy Bear", img: "/toy-1.jpg", price: 25, oldPrice: 35, rating: 5, discount: "-28%", slug: "soft-teddy-bear" },
    { id: 46, title: "Baby Stroller", img: "/toy-2.jpg", price: 150, oldPrice: 200, rating: 5, discount: "-25%", slug: "baby-stroller" },
    { id: 47, title: "Lego Building Set", img: "/toy-3.jpg", price: 60, oldPrice: 80, rating: 4, discount: "-25%", slug: "lego-building-set" },
    { id: 48, title: "Toy Car", img: "/toy-4.jpg", price: 30, oldPrice: 40, rating: 4, discount: "-25%", slug: "toy-car" },
    { id: 49, title: "Organic Rice 1kg", img: "/groceries-1.jpg", price: 15, oldPrice: 20, rating: 5, discount: "-25%", slug: "organic-rice" },
    { id: 50, title: "Pet Dog Food 2kg", img: "/groceries-2.jpg", price: 35, oldPrice: 45, rating: 4, discount: "-22%", slug: "pet-dog-food" },
    { id: 51, title: "Cooking Oil 1L", img: "/groceries-3.jpg", price: 10, oldPrice: 15, rating: 4, discount: "-33%", slug: "cooking-oil" },
    { id: 52, title: "Fresh Apples 1kg", img: "/groceries-4.jpg", price: 8, oldPrice: 12, rating: 5, discount: "-33%", slug: "fresh-apples" },
    { id: 53, title: "Face Moisturizer", img: "/beauty-1.jpg", price: 25, oldPrice: 35, rating: 4, discount: "-29%", slug: "face-moisturizer" },
    { id: 54, title: "Hair Serum", img: "/beauty-2.jpg", price: 18, oldPrice: 25, rating: 5, discount: "-28%", slug: "hair-serum" },
    { id: 55, title: "Makeup Kit", img: "/beauty-3.jpg", price: 50, oldPrice: 65, rating: 5, discount: "-23%", slug: "makeup-kit" },
    { id: 56, title: "Body Lotion", img: "/beauty-4.jpg", price: 20, oldPrice: 28, rating: 4, discount: "-29%", slug: "body-lotion" },
  ];




  const validProducts = products.filter((p) => typeof p.title === "string");
  const filtered = validProducts.filter((item) =>
    item.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="min-h-screen w-full py-16 md:py-20 xl:py-24">
      <div className="2xl:max-w-7xl md:max-w-6xl mx-auto px-4 py-20">
        <h1 className="md:text-2xl text-xl font-semibold mb-6">
          Search Results for <span className="text-red-500">"{query}"</span>
        </h1>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {filtered.map((item) => (
              <div key={item.id} className="border px-3 py-4 text-left w-full border-gray-400 rounded-md">
                <img src={item.img} alt={item.title} className="h-52 w-full object-cover mb-2 px-2 py-4" />
                <h2 className="text-sm font-medium">{item.title}</h2>
                <p className="text-red-600 font-semibold">${item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>

    </div>
  );
}
