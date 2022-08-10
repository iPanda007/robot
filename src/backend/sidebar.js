import React from "react";

function SideBar() {
      return <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{height:"100%"}}>

          <a href="index3.html" className="brand-link">
              <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                 />
                  <span className="brand-text font-weight-light">Robot Shop</span>
          </a>

          <div
              className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
              <div className="os-resize-observer-host observed">
                  <div className="os-resize-observer"></div>
              </div>
              <div className="os-size-auto-observer observed" >
                  <div className="os-resize-observer"></div>
              </div>
              <div className="os-content-glue"></div>
              <div className="os-padding">
                  <div className="os-viewport os-viewport-native-scrollbars-invisible" >
                      <div className="os-content">

                          <div className="user-panel mt-3 pb-3 mb-3 d-flex">


                          </div>

                          <div className="form-inline">
                              <div className="input-group" data-widget="sidebar-search">
                                  <input className="form-control form-control-sidebar" type="search"
                                         placeholder="Search" aria-label="Search"/>
                                      <div className="input-group-append">
                                          <button className="btn btn-sidebar">
                                              <i className="fas fa-search fa-fw"></i>
                                          </button>
                                      </div>
                              </div>
                              <div className="sidebar-search-results">
                                  <div className="list-group"><a href="#" className="list-group-item">
                                      <div className="search-title"><strong className="text-light"></strong>N<strong
                                          className="text-light"></strong>o<strong className="text-light"></strong>
                                          <strong className="text-light"></strong>e<strong
                                              className="text-light"></strong>l<strong className="text-light"></strong>e<strong
                                              className="text-light"></strong>m<strong className="text-light"></strong>e<strong
                                              className="text-light"></strong>n<strong className="text-light"></strong>t<strong
                                              className="text-light"></strong> <strong className="text-light"></strong>f<strong
                                              className="text-light"></strong>o<strong className="text-light"></strong>u<strong
                                              className="text-light"></strong>n<strong className="text-light"></strong>d<strong
                                              className="text-light"></strong>!<strong className="text-light"></strong>
                                      </div>
                                      <div className="search-path"></div>
                                  </a></div>
                              </div>
                          </div>

                          <nav className="mt-2">
                              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                                  data-accordion="false">

                                  <li className="nav-item menu-open">
                                      <a href="#" className="nav-link active"><i className="fa-solid fa-list-check"></i>
                                          <p className="ml-2">
                                               Product
                                              <i className="right fas fa-angle-left"></i>
                                          </p>
                                      </a>
                                      <ul className="nav nav-treeview">
                                          <li className="nav-item">
                                              <a href="/products" className="nav-link ">
                                                  <i className="fa-solid fa-circle-plus"></i>
                                                  <p className="ml-2"> Add Product</p>
                                              </a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="/product" className="nav-link">
                                                  <i className="fa-solid fa-list-check"></i>
                                                  <p className="ml-2">Product List</p>
                                              </a>
                                          </li>

                                      </ul>
                                  </li>

                              </ul>
                          </nav>

                      </div>
                  </div>
              </div>
              <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                  <div className="os-scrollbar-track">
                      <div className="os-scrollbar-handle" ></div>
                  </div>
              </div>
              <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                  <div className="os-scrollbar-track">
                      <div className="os-scrollbar-handle"></div>
                  </div>
              </div>
              <div className="os-scrollbar-corner"></div>
          </div>

      </aside>
}
export default SideBar;