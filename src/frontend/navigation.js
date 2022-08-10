import React from "react";

import {Link} from "react-scroll"
import 'bootstrap/dist/js/bootstrap.min';
function Navigation(props) {
    return(
         <div className="container-fluid bg-dark fixed-top">
              <div className="row">
                  <div className="container">
                      <nav className="navbar navbar-expand-lg p-0 ">
                          <a className="navbar-brand " href="#"><img src="/assets/rob-rm.png" className="" style={{width:"12%"}} alt=""/></a>
                          <button className="navbar-toggler" type="button" data-toggle="collapse"
                                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                  aria-expanded="false" aria-label="Toggle navigation">
                              <i className="fa-solid fa-bars text-secondary "></i>
                          </button>

                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav ml-auto">
                                  <li className="nav-item">
                                      <Link to="head"    spy={true} offset={0}  duration={600} smooth={true} className="nav-link  " >Home
                                       </Link>
                                  </li>
                                  <li className="nav-item ">
                                      <Link  to="service"    spy={true} offset={0}  duration={600} smooth={true} className="nav-link  " >Services</Link>
                                  </li>

                                  <li className="nav-item ">
                                      <Link  to="description"   spy={true} offset={0}  duration={600} smooth={true} className="nav-link  ">About</Link>
                                  </li>
                                  <li className="nav-item ">
                                      <Link  to="product"   spy={true} offset={0} duration={600}  smooth={true} className="nav-link   ">Product</Link>
                                  </li>
                                  <li className="nav-item ">
                                      <Link  to="contact"    spy={true} offset={0} duration={600}  smooth={true} className="nav-link   " >Contact Us</Link>
                                  </li>
                              </ul>

                          </div>
                      </nav>
                  </div>
              </div>
         </div>
    );
}
export default Navigation;