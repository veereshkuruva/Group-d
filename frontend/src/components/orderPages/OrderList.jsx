import axios from "axios";
import React from "react";
import { useEffect } from "react";
import config from "../../config";
import "./OrderList.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const OrderList = () => {
  const { authSlice } = useSelector((state) => ({ ...state }));
  const [data, setData] = useState([]);

  const lists = (user) => {
    axios
      .get(`${config.API_URL}/admin/orders`, {
        headers: {
          user,
        },
      })
      .then((res) => {
        setData(res.data.orders);
        // console.log(res.data.orders);
      });
  };

  useEffect(() => {
    lists(authSlice.token);
  });
  return (
    <div style={{ position: "fixed", right: "1%", top: "10%", width: "84vw" }}>
      <div className="top-navbar">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://cdn.vectorstock.com/i/1000x1000/28/22/stock-market-business-logo-design-template-vector-4962822.webp"
                alt="Girl in a jacket"
                width="40"
                height="40"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Stocks
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "white" }}>
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }}>
                    Products
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }}>
                    Support
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="header-fixed">
        <table>
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Item Name</th>
              <th>Purchased Stock</th>
              <th>Stock Price/share</th>
              <th>Buying Date</th>
              <th>Total bill</th>
              <th>Order Staus</th>
            </tr>

            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>fff3212</td>
              <td>Gold 24 Crat</td>
              <td>120</td>
              <td>566.0</td>
              <td>26 July,2022</td>
              <td>80,000</td>
              <td>Success</td>
            </tr>
          </thead>
        </table>
      </div>

      {/* <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default OrderList;
