import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Product from "./components/Product";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import LegalPage from "./components/LegalPage";
import InterestCalculator from "./components/InterestCalculator";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("John");

  const products = [
    {
      id: 1,
      name: "Organic Cotton T-Shirt",
      price: 5.69,
      description: "100% organic cotton, unisex fit",
      imageUrl: "https://www.aliexpress.com/item/1005007503074755.html",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 24.99,
      description: "Classic blue denim jeans",
      imageUrl:
        "https://www.aliexpress.com/item/1005007404042884.html?spm=a2g0o.productlist.main.1.25ba3054CC7ZKA&algo_pvid=2afc6b1c-6cfc-47ad-83c6-7b27b94a0b8a&algo_exp_id=2afc6b1c-6cfc-47ad-83c6-7b27b94a0b8a-0&pdp_ext_f=%7B%22order%22%3A%22741%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21ZAR%211216.16%21547.27%21%21%21465.82%21209.62%21%402103985c17527598075643758e3953%2112000040603188227%21sea%21ZA%210%21ABX&curPageLogUid=B7ZyjzPoLoF6&utparam-url=scene%3Asearch%7Cquery_from%3A",
    },
    {
      id: 3,
      name: "Winter Jacket",
      price: 49.99,
      description: "Warm insulated winter jacket",
      imageUrl:
        "https://www.aliexpress.com/item/1005005028660963.html?spm=a2g0o.productlist.main.2.5db258f8oEc55Z&aem_p4p_detail=20250717064550551274605252550000440139&algo_pvid=02112fe6-f2ad-4a3a-955a-3d5f330c2608&algo_exp_id=02112fe6-f2ad-4a3a-955a-3d5f330c2608-1&pdp_ext_f=%7B%22order%22%3A%221196%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21ZAR%211804.06%21793.78%21%21%21691.00%21304.04%21%40211b6c1717527599500377139e650a%2112000031400661924%21sea%21ZA%210%21ABX&curPageLogUid=DzyU789LyRmi&utparam-url=scene%3Asearch%7Cquery_from%3A&search_p4p_id=20250717064550551274605252550000440139_1",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          userName={userName}
          setIsLoggedIn={setIsLoggedIn}
          setUserName={setUserName}
        />

        <Route
          render={({ location }) => (
            <Navigation currentPath={location.pathname} />
          )}
        />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/calculator">
            <InterestCalculator />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path="/shop">
            <div className="products-container">
              {products.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </Route>

          <Route path="/legal">
            <LegalPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
