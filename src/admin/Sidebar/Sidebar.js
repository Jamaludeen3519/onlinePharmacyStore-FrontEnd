import React from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const Sidebar = () => {
  return (
    <div
      className="col-md-3 col-lg-2 sidebar-offcanvas"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <ul className="nav flex-column pl pt-2 p-3 mt-3 ">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <br />
          <li className="nav-item mb-2 mt-3 ">
          </li>
          <li className="nav-item mb-2 mt-3 pl-8" style={{ marginLeft: "10px" }}>
            <DropdownButton
              id="dropdown-basic-button"
              title="Products"
              size="lg"
            >
              <Dropdown.Item href="/Products">ListProducts</Dropdown.Item>
              <Dropdown.Item href="/AddProducts">Add/Update</Dropdown.Item>
              <Dropdown.Item href="#/action-3">DeleteProducts</Dropdown.Item>
            </DropdownButton>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-secondary" href="/Users">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                Users
              </button>
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-secondary" href="/Orders">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                Orders
              </button>
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-secondary" href="/SignOut">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                SignOut
              </button>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
