import "./App.css";

function App() {
  const products = [
    {
      title: "Gaming Accessories",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
    {
      title: "Electronics",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      title: "Fashion",
      img: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    },
    {
      title: "Home Essentials",
      img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    },
    {
      title: "Beauty",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },
    {
      title: "Books",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "Mobiles",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      title: "Furniture",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="logo">amazon.in</div>

        <input
          type="text"
          placeholder="Search Amazon.in"
          className="search"
        />

        <div className="nav-links">
          <span>Hello, Sign In</span>
          <span>Orders</span>
          <span>Cart 🛒</span>
        </div>
      </nav>

      <div className="menu">
        <span>All</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Prime</span>
        <span>Fashion</span>
        <span>Electronics</span>
      </div>

      <section className="hero">
        <h1>Welcome to Amazon </h1>
        <p>Shop Millions of Products</p>
      </section>

      <section className="products">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <button>Shop Now</button>
          </div>
        ))}
      </section>

      <footer className="footer">
        <div>Back to top</div>

        <div className="footer-content">
          <div>
            <h4>Get to Know Us</h4>
            <p>About Us</p>
            <p>Careers</p>
          </div>

          <div>
            <h4>Connect</h4>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>

          <div>
            <h4>Help</h4>
            <p>Support</p>
            <p>Returns</p>
          </div>
        </div>

        <p>© Amazon Clone Project</p>
      </footer>
    </div>
  );
}

export default App;