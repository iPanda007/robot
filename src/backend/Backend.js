import React from "react";

import Navigator from "./navigator";
import SideBar from "./sidebar";
import AddProduct from "./product/Addproduct";
import Product from "./product/Product";
import {useLocation} from "react-router-dom";
import Hello from "./product/Hello";

function Backend() {

  const pathLocation = useLocation();

  return <div className="text-black-50  ">
      <div className="wrapper">



          <div className="preloader flex-column justify-content-center align-items-center" >

          </div>
           <Navigator></Navigator>
        <SideBar></SideBar>

          <div className="content-wrapper">
              {
                  (()=>{
                      if (pathLocation.pathname == '/products'){
                          return <AddProduct></AddProduct>
                      }else if(pathLocation.pathname == '/product'){
                          return <Product></Product>
                      }else if (pathLocation.pathname==='/akk/hello'){
                          return <Hello></Hello>
                      }
                  })()
              }
          </div>

          <footer class="main-footer">
              <strong>Copyright © 2014-2021 <a href="https://adminlte.io">DON Programing</a>.</strong>
              All rights reserved.
              <div class="float-right d-none d-sm-inline-block">
                  <b>Version</b> 3.2.0
              </div>
          </footer>

          <aside class="control-sidebar control-sidebar-dark" />


          <div id="sidebar-overlay"></div></div>

      </div>
}
export default Backend;