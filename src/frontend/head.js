import React from "react";

function Header() {
   return <div>
        <div className="container-fluid etBg" id="head">
                    <div className="container">
                       <div className="row">
                           <div className="col-12">
                               <div className="row min-vh-100 align-items-md-center flex-wrap-reverse  ">
                                   <div className="col-12  col-md-6">
                                       <div className="">
                                           <h2 className=" mb-4 header-title">What is to do?</h2>
                                           <p className="header-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                       </div>
                                       <div>
                                           <button className="neonBtn">
                                               <span></span>
                                               <span></span>
                                               <span></span>
                                               <span></span>
                                               Learn More
                                           </button>
                                       </div>
                                   </div>
                                   <div className="col-12  col-md-6 position-relative">
                                       <div className="">

                                       </div>

                                   </div>
                               </div>
                           </div>
                       </div>
                    </div>

        </div>
   </div>
}
export default Header;