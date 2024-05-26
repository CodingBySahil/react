import React from "react";


const Navbar = () => {
  return (
    <div className="position-fixed w-100 top-0 mb-1" style={{ backgroundColor: "white", zIndex: 1 }} id="searchbar-wrapper">
    {/* search bar wrapper*/}
    <div className="row">
        <div className="col-2">
            <div className="d-flex justify-content-start align-items-center">
                <div><i className="bi bi-list" id="list-icon"></i></div>
                <div><i className="bi bi-youtube text-danger"></i></div>
                <div><span className="logo">YouTube<sup>PK</sup></span></div>
            </div>
        </div>
        <div className="col-7">
            <form className="form-inline my-2 my-lg-0 d-flex search-box">
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                <button className="btn my-2 my-sm-0" type="submit"><i className="bi bi-search text-dark"></i></button>
            </form>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
            <p className="m-1">Designed By codingBySAHIL</p>
        </div>
    </div>
</div>

  );
};

export default Navbar;
