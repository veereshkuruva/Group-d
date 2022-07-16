import React, { useEffect, useState } from "react";
import style from "./Dasboard.module.css";
import { Layout } from "antd";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useSelector } from "react-redux";

const Dasboard = () => {
  const [count, setCount] = useState([]);
  const [ordering, setOrdering] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [amount, setAmount] = useState([]);
  const { authSlice } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    const productCount = async (user) => {
      await axios
        .get("http://localhost:9000/api/products", {
          headers: {
            user,
          },
        })
        .then((res) => {
          setCount(res.data.productsCount);

          console.log(count);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    productCount(authSlice.token);

    const totalOrder = async (user) => {
      await axios
        .get("http://localhost:9000/api/admin/orders", {
          headers: {
            user,
          },
        })
        .then((res) => {
          setOrdering(res.data.orders.length);
          setAmount(res.data.totalAmount);
          console.log(ordering);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    totalOrder(authSlice.token);

    const countCustomers = async (user) => {
      await axios
        .post(
          "http://localhost:9000/api/admin/users",
          {},
          {
            headers: {
              user,
            },
          }
        )
        .then((res) => {
          setCustomer(res.data.length);

          console.log(res.data.length);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    countCustomers(authSlice.token);
  }, []);

  return (
    <Layout>
      <div className={style.mainbox}>
        <div className={style.image}>
          <img
            src="https://dmd-wordpress-assets.s3.amazonaws.com/wp-content/uploads/2016/10/dashboard.png"
            alt="Graph"
            className={style.img1}
          />
          <img
            src="https://clipground.com/images/excited-man-clipart-3.png"
            alt=""
            className={style.img2}
          />
        </div>
        <div className={style.footer}>
          <div className={style.box1}>
            <Icon
              icon="dashicons:products"
              style={{ fontSize: "4rem", textAlign: "center" }}
            />
            {count}
            <br />
            <div style={{ color: "black", fontSize: "1rem" }}>Products</div>
          </div>

          <div className={style.box2}>
            <Icon
              icon="el:shopping-cart"
              style={{ fontSize: "4rem", textAlign: "center" }}
            />
            {ordering} <br />
            <div style={{ color: "black", fontSize: "1rem" }}>Orders</div>
          </div>
        </div>
        <div className={style.footer2}>
          <div className={style.box3}>
            <Icon
              icon="bxs:user"
              style={{ fontSize: "4rem", textAlign: "center" }}
            />
            {customer} <br />
            <div style={{ color: "black", fontSize: "1rem" }}>Customers</div>
          </div>
          <div className={style.box4}>
            <Icon
              icon="mdi:currency-rupee"
              style={{ fontSize: "4rem", textAlign: "center" }}
            />
            {amount} <br />
            <div style={{ color: "black", fontSize: "1rem" }}>Sales</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dasboard;
