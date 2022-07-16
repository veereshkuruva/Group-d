import React from "react";
import { useState } from "react";
import { DatePicker, Space, Input, Radio, Button } from "antd";
import "antd/dist/antd.css";
import "./Create.css";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";

const CreateProducts = () => {
  const { authSlice } = useSelector((state) => ({ ...state }));
  const [products, setProducts] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    ratings: "",
  });

  let name, value;
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProducts({ ...products, [name]: value });

    console.log(e.target.value);
  };

  const postData = (user) => {
    // e.preventDefault();

    axios
      .post("http://localhost:9000/api/admin/product/new", products, {
        headers: {
          user,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    window.alert("Order Successful");
  };

  return (
    <>
      <div
        className="container"
        style={{ position: "fixed", top: "10%", right: "1%" }}
      >
        <div className="title">CREATE PRODUCT</div>
        <div className="content">
          <form method="POST" action="#">
            <div class="user-details">
              <div class="input-box">
                <label className="details">Item name: </label>
                <Input
                  type="text"
                  placeholder="item name"
                  className="fix-width"
                  name="name"
                  value={products.name}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Description: </label>
                <Input
                  type="text"
                  placeholder="item description here"
                  className="fix-width"
                  name="description"
                  value={products.description}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Price Per Share: </label>
                <Input
                  type="number"
                  placeholder="Rs."
                  className="fix-width"
                  name="price"
                  value={products.price}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Category: </label>
                <Input
                  type="text"
                  placeholder="Eg. Accessories,home items,etc"
                  className="fix-width"
                  name="category"
                  value={products.category}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Stocks: </label>
                <Input
                  type="number"
                  placeholder="No. of available stocks"
                  className="fix-width"
                  name="stock"
                  value={products.stock}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Ratings: </label>
                <Input
                  type="number"
                  placeholder="❤❤❤"
                  className="fix-width"
                  name="ratings"
                  value={products.ratings}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Reviews: </label>
                <Input
                  type="text"
                  placeholder="share feedback here"
                  className="fix-width"
                  name="reviews"
                  value={products.reviews}
                  onChange={inputHandler}
                />
              </div>

              <div className="button">
                <Button
                  type="primary"
                  style={{ borderRadius: "20px" }}
                  onClick={() => postData(authSlice.token)}
                >
                  ADD TO INVENTORY
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProducts;
