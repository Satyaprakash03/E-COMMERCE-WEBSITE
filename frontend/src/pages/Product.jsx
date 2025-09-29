import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2"> {productData.name} </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {" "}
            {currency}
            {productData.price}{" "}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {" "}
            {productData.description}{" "}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p> Select Size </p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={` py-2 px-4 bg-gray-100 ${
                    item === size ? "border" : ""
                  }`}
                  key={index}
                >
                  {" "}
                  {item}{" "}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            {" "}
            ADD TO CART{" "}
          </button>
          <hr className="mt-8 sm:w-4/5 text-gray-300" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p> 100% Original Product </p>
            <p> Cash on Delivery Available </p>
            <p> Easy Return and Exchange within 7 Days </p>
          </div>
        </div>
      </div>

      {/* Description and Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">
            {" "}
            Description{" "}
          </b>
          <p className="border border-gray-300 px-5 py-3 text-sm">
            {" "}
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>
            Crafted with 100% pure cotton, this men’s round neck t-shirt is
            designed to deliver unmatched comfort and timeless style. Its soft,
            breathable fabric keeps you cool throughout the day, while the
            classic fit and versatile design make it perfect for every
            occasion—whether you’re dressing up with a jacket or keeping it
            casual with jeans. Durable stitching and premium quality ensure this
            tee becomes a long-lasting wardrobe essential.
          </p>
          <p>
            Easy to style and effortless to wear, this pure cotton t-shirt is
            the perfect blend of comfort, durability, and everyday fashion.
            Whether layered for a refined look or worn solo for laid-back days,
            it’s a staple piece that complements every wardrobe.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
