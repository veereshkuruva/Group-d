import React, { useEffect } from "react";
import { useState } from "react";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import "./OrderStore.css.css";
import axios from "axios";
import config from "../../config";

const OrderForm = () => {
  const [stocks, setStock] = useState({
    item_id: "",
    item_name: "",
    purchase_stock: "",
    stock_price: "",
    purchase_date: "",
    total_bill: "",
  });

  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  let items;

  let name, value;
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    items = document.getElementById("item_name").value;
    setStock({ ...stocks, [name]: value });

    //  console.log(e.target.value)
  };
  let datas = {
    _id: item._id,
    name: stocks.item_name,
    quantity: stocks.purchase_stock,
    price: item.price,
    total_amount: stocks.purchase_stock * item.price,
  };
  useEffect(() => {
    axios.get(`${config.API_URL}/products`).then((res) => {
      setData(res.data.products);
      console.log(res);
    });

    //i have to add the feature which i add name to item name it should show
    data.map((ele) => {
      if (ele.name === stocks.item_name) {
        setItem(ele);
      }
    });
    if (item.stock < stocks.purchase_stock) {
      stocks.purchase_stock = "the quantity exceeds";
    }
  }, [stocks]);

  const submit = () => {
    axios.post(`${config.URL}/api/customer`, datas);
    setStock("");
    setItem("");
  };

  return (
    <>
      <div className="container">
        <div className="title">ORDER FORM</div>
        <div className="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <label className="details">Item ID#: </label>
                <Input
                  placeholder="EnterID"
                  className="fix-width"
                  name="item_id"
                  value={item._id}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Item name: </label>
                <Input
                  placeholder="Enter"
                  className="fix-width"
                  name="item_name"
                  value={stocks.item_name}
                  onChange={inputHandler}
                  id="item_name"
                />
              </div>

              <div class="input-box">
                <label className="details">Purchase Stock: </label>
                <Input
                  placeholder="no.of quantity"
                  className="fix-width"
                  name="purchase_stock"
                  value={stocks.purchase_stock}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Stock Price/Share: </label>
                <Input
                  placeholder="Rs."
                  className="fix-width"
                  name="stock_price"
                  value={item.price}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Purchase Date: </label>
                <Input
                  type="date"
                  placeholder="password"
                  className="fix-width"
                  name="purchase_date"
                  value={stocks.purchase_date}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Total Order Bill: </label>
                <Input
                  placeholder="confirm password"
                  className="fix-width"
                  name="total_bill"
                  value={item.price * stocks.purchase_stock}
                  onChange={inputHandler}
                />
              </div>

              <div className="button">
                <Button
                  type="primary"
                  style={{ borderRadius: "20px" }}
                  onClick={submit}
                >
                  PLACE ORDER
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
