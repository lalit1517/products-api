const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/public", express.static(path.join(__dirname, "public")));

const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect("mongodb+srv://lalitchauhan__:hilalit@todolist.akglz1b.mongodb.net/ecommerce")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

  const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
      houseNo: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
    },
    items: [
      {
        sku: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: String, required: true },
    paymentMode: { type: String, required: true },
    orderDate: { type: String, required: true },
    expectedArrivalDate: { type: String, required: true }
  });
  
  const Order = mongoose.model("Order", orderSchema);

const products = [
  {
    sku: "item0001",
    name: "Majestic Mountain Graphic T-Shirt",
    price: 44,
  },
  {
    sku: "item0002",
    name: "Classic Red Pullover Hoodie",
    price: 10,
  },
  {
    sku: "item0003",
    name: "Classic Heather Gray Hoodie",
    price: 69,
  },
  {
    sku: "item0004",
    name: "Classic Grey Hooded Sweatshirt",
    price: 90,
  },
  {
    sku: "item0005",
    name: "Classic Black Hooded Sweatshirt",
    price: 79,
  },
  {
    sku: "item0006",
    name: "Classic Comfort Fit Joggers",
    price: 25,
  },
  {
    sku: "item0007",
    name: "Classic Comfort Drawstring Joggers",
    price: 79,
  },
  {
    sku: "item0008",
    name: "Classic Red Jogger Sweatpants",
    price: 98,
  },
  {
    sku: "item0009",
    name: "Classic Navy Blue Baseball Cap",
    price: 61,
  },
  {
    sku: "item0010",
    name: "Classic Blue Baseball Cap",
    price: 86,
  },
  {
    sku: "item0011",
    name: "Classic Red Baseball Cap",
    price: 35,
  },
  {
    sku: "item0012",
    name: "Classic Black Baseball Cap",
    price: 58,
  },
  {
    sku: "item0013",
    name: "Classic Olive Chino Shorts",
    price: 84,
  },
  {
    sku: "item0014",
    name: "Classic High-Waisted Athletic Shorts",
    price: 43,
  },
  {
    sku: "item0015",
    name: "Classic White Crew Neck T-Shirt",
    price: 39,
  },
  {
    sku: "item0016",
    name: "Classic White Tee - Timeless Style and Comfort",
    price: 73,
  },
  {
    sku: "item0017",
    name: "Classic Black T-Shirt",
    price: 35,
  },
  {
    sku: "item0018",
    name: "Sleek White & Orange Wireless Gaming Controller",
    price: 69,
  },
  {
    sku: "item0019",
    name: "Sleek Wireless Headphone & Inked Earbud Set",
    price: 44,
  },
  {
    sku: "item0020",
    name: "Sleek Comfort-Fit Over-Ear Headphones",
    price: 28,
  },
  {
    sku: "item0021",
    name: "Efficient 2-Slice Toaster",
    price: 48,
  },
  {
    sku: "item0022",
    name: "Sleek Wireless Computer Mouse",
    price: 10,
  },
  {
    sku: "item0023",
    name: "Sleek Modern Laptop with Ambient Lighting",
    price: 43,
  },
  {
    sku: "item0024",
    name: "Sleek Modern Laptop for Professionals",
    price: 97,
  },
  {
    sku: "item0025",
    name: "Stylish Red & Silver Over-Ear Headphones",
    price: 39,
  },
  {
    sku: "item0026",
    name: "Sleek Mirror Finish Phone Case",
    price: 27,
  },
  {
    sku: "item0027",
    name: "Sleek Smartwatch with Vibrant Display",
    price: 16,
  },
  {
    sku: "item0028",
    name: "Sleek Modern Leather Sofa",
    price: 53,
  },
  {
    sku: "item0029",
    name: "Msku-Century Modern Wooden Dining Table",
    price: 24,
  },
  {
    sku: "item0030",
    name: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
  },
  {
    sku: "item0031",
    name: "Modern Elegance Teal Armchair",
    price: 25,
  },
  {
    sku: "item0032",
    name: "Elegant Solsku Wood Dining Table",
    price: 67,
  },
  {
    sku: "item0033",
    name: "Modern Minimalist Workstation Setup",
    price: 49,
  },
  {
    sku: "item0034",
    name: "Modern Ergonomic Office Chair",
    price: 71,
  },
  {
    sku: "item0035",
    name: "Futuristic Holographic Soccer Cleats",
    price: 39,
  },
  {
    sku: "item0036",
    name: "Rainbow Glitter High Heels",
    price: 39,
  },
  {
    sku: "item0037",
    name: "Chic Summer Denim Espadrille Sandals",
    price: 33,
  },
  {
    sku: "item0038",
    name: "Vibrant Runners: Bold Orange & Blue Sneakers",
    price: 27,
  },
  {
    sku: "item0039",
    name: "Vibrant Pink Classic Sneakers",
    price: 84,
  },
  {
    sku: "item0040",
    name: "Futuristic Silver and Gold High-Top Sneaker",
    price: 68,
  },
  {
    sku: "item0041",
    name: "Futuristic Chic High-Heel Boots",
    price: 36,
  },
  {
    sku: "item0042",
    name: "Elegant Patent Leather Peep-Toe Pumps",
    price: 53,
  },
  {
    sku: "item0043",
    name: "Elegant Purple Leather Loafers",
    price: 17,
  },
  {
    sku: "item0044",
    name: "Classic Blue Suede Casual Shoes",
    price: 39,
  },
  {
    sku: "item0045",
    name: "Sleek Futuristic Electric Bicycle",
    price: 22,
  },
  {
    sku: "item0046",
    name: "Sleek All-Terrain Go-Kart",
    price: 37,
  },
  {
    sku: "item0047",
    name: "Radiant Citrus Eau de Parfum",
    price: 73,
  },
  {
    sku: "item0048",
    name: "Sleek Olive Green Hardshell Carry-On Luggage",
    price: 48,
  },
  {
    sku: "item0049",
    name: "Chic Transparent Fashion Handbag",
    price: 61,
  },
  {
    sku: "item0050",
    name: "Trendy Pink-Tinted Sunglasses",
    price: 38,
  },
  {
    sku: "item0051",
    name: "Elegant Glass Tumbler Set",
    price: 50,
  },
];

app.get("/api/products", (req, res) => {
  res.json({ products });
});

app.get("/api/products/:sku", (req, res) => {
  const { sku } = req.params;
  const product = products.find((p) => p.sku === sku);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.post("/api/order", async (req, res) => {
  try {

    if (!req.body.userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order saved successfully!" });
  } catch (error) {
    console.error("Error saving order:", error);
    res
      .status(500)
      .json({ error: "Failed to save order", details: error.message });
  }
});

app.get("/api/orders/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch orders", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`API is running on ${port}`);
});
