import React from "react";

function Product(props) {
    return <section id="product" >
        <div className="container-fluid " >
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-12 my-5">
                        <h1 className="text-center">Our Product</h1>
                    </div>
                    <div className="col-12">
                           <div className="row justify-content-center">
                             <div className="col-12 col-lg-4 my-5">
                                 <div className="card card-box bg-dark">
                                     <div className="robot-img-box">
                                         <img src="/assets/1.png" className="img-fluid" alt=""/>
                                     </div>
                                     <div className="card-body d-flex flex-column justify-content-between">
                                         <h4 className>Product One</h4>
                                         <p className="header-para mt-3">
                                             Lorem Ipsum is simply dummy text of the printing and typesetting.
                                         </p>
                                         <div className="d-flex justify-content-between">

                                             <p className="neonText"> MMK 2.0M </p>
                                             <div className="neonText">
                                                 <i className="fa-solid fa-cart-arrow-down"></i>
                                                 <span className="badge badge-pill">0</span>
                                             </div>

                                         </div>
                                         <div className="mt-3 d-flex justify-content-between align-items-center ">

                                             <i className="fa-solid fa-robot neonText"></i>
                                             <a href="" className="cardBtnOne">View</a>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                               <div className="col-12 col-lg-4 my-5">
                                   <div className="card card-box bg-dark">
                                       <div className="robot-img-box">
                                           <img src="/assets/2.png" className="img-fluid" alt=""/>
                                       </div>
                                       <div className="card-body d-flex flex-column justify-content-between">
                                           <h4 className>Product One</h4>
                                           <p className="header-para mt-3">
                                               Lorem Ipsum is simply dummy text of the printing and typesetting.
                                           </p>
                                           <div className="d-flex justify-content-between">

                                               <p className="neonText"> MMK 2.0M </p>
                                               <div className="neonText">
                                                   <i className="fa-solid fa-cart-arrow-down"></i>
                                                   <span className="badge badge-pill">0</span>
                                               </div>

                                           </div>
                                           <div className="mt-3 d-flex justify-content-between align-items-center ">

                                               <i className="fa-solid fa-robot neonText"></i>
                                               <a href="" className="cardBtnOne">View</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col-12 col-lg-4 my-5">
                                   <div className="card card-box bg-dark">
                                       <div className="robot-img-box">
                                           <img src="/assets/3.png" className="img-fluid" alt=""/>
                                       </div>
                                       <div className="card-body d-flex flex-column justify-content-between">
                                           <h4 className>Product One</h4>
                                           <p className="header-para mt-3">
                                               Lorem Ipsum is simply dummy text of the printing and typesetting.
                                           </p>
                                           <div className="d-flex justify-content-between">

                                               <p className="neonText"> MMK 2.0M </p>
                                               <div className="neonText">
                                                   <i className="fa-solid fa-cart-arrow-down"></i>
                                                   <span className="badge badge-pill">0</span>
                                               </div>

                                           </div>
                                           <div className="mt-3 d-flex justify-content-between align-items-center ">

                                               <i className="fa-solid fa-robot neonText"></i>
                                               <a href="" className="cardBtnOne">View</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Product