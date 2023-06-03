import React from "react";
import {
  NavLink,
  Link,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { AiFillHome } from "react-icons/ai"

export const Header = () => {
  const base_url = process.env.REACT_APP_BASE_URI;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <header className="header-upper py-3">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-7 col-md-5">
              <h2>
                <Link to="/" className="text-white">
                  Library Management
                </Link>
              </h2>
            </div>
            <div className="col-3">
              <Link to="/">
                <h3 onClick={() => navigate("/")} className="cur"><AiFillHome className={(pathname != "/") ? "text-light" : "text-warning"} /></h3>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
