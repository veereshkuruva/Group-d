import React from "react";
import "../components/OrderList.css";

const OrderStore = () => {
  return (
    <>

<div className="top-navbar" >


<nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
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
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
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
    </>
  );
};

export default OrderStore;
