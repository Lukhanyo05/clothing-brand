import React from "react";

function Product({ name, price, description, imageUrl }) {
  // Product image mapping - update with your actual image paths
  const productImages = {
    "Organic Cotton T-Shirt": "/images/Cotton T-Shirt.avif",
    "Denim Jacket": "/images/DenimJacket.webp",
    "Winter Jacket": "/images/WinterJacket.webp",
  };

  // Get the appropriate product image
  const getProductImage = () => {
    // If imageUrl is provided and is an image file, use it
    if (imageUrl && /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(imageUrl)) {
      return imageUrl;
    }
    // Otherwise use the mapped image based on product name
    return productImages[name] || "/images/default-product.avif";
  };

  // Get the AliExpress product URL
  const getProductPageUrl = () => {
    // If imageUrl is actually an AliExpress product link, use it
    if (imageUrl && imageUrl.includes("aliexpress.com/item")) {
      return imageUrl;
    }
    // Fallback product links - update these with your actual product URLs
    const productLinks = {
      "Organic Cotton T-Shirt":
        "https://www.aliexpress.com/item/1005007503074755.html",
      "Denim Jeans": "https://www.aliexpress.com/item/4000000000000.html",
      "Winter Jacket": "https://www.aliexpress.com/item/5000000000000.html",
    };
    return productLinks[name] || "https://www.aliexpress.com";
  };

  const productImage = getProductImage();
  const productPageUrl = getProductPageUrl();

  return (
    <div className="product-card">
      <a href={productPageUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={productImage}
          alt={name}
          onError={(e) => {
            e.target.src = "/images/default-product.avif";
          }}
          className="product-image"
        />
      </a>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product-footer">
          <span className="product-price">${price.toFixed(2)}</span>
          <div className="product-actions">
            <a
              href={productPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-now-btn"
            >
              Buy Now
            </a>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
