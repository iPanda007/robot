import React from "react";

function Footer() {
  return <section>
         <div className="container-fluid" id="contact">
             <div className="container">
                 <div className="row min-vh-100 align-items-center">

                  <div className="col-12">
                      <div className="row align-items-center ">
                          <div className="col-12 col-lg-6">
                                  <h1 className="my-5">Contact Us</h1>
                              <div className="d-flex align-items-center">
                                  <i className="fa-solid fa-earth-asia neonText mr-3 tex"></i><span>Yangon,Myanmar</span>
                              </div>
                              <br/>
                              <i className="fa-solid fa-comment-sms neonText mr-3"></i>   <span>+95123456787</span>
                              <br/>
                              <br/>


                              <i className="fa-brands fa-facebook-square neonText mr-3"></i>    <span>FaceBook</span>
                              <br/>
                              <br/>
                              <i className="fa-brands fa-facebook-messenger neonText mr-3"></i>  <span>Messenger</span>
                              <br/>
                              <br/>
                              <i className="fa-brands fa-github neonText mr-3"></i> <span>Github.io</span>
                              <br/>
                              <br/>
                              <i className="fa-solid fa-envelope-circle-check neonText mr-3"></i> <span>pandashar2000@gmail.com</span>
                          </div>
                          <div className="col-12 col-lg-6">
                                  <div>

                                  </div>
                      </div>
                  </div>

                     </div>

                 </div>
             </div>
         </div>

              <p className="text-center bg-dark footerBar">Design & Development By Uchiha Sasuke Programing</p>

  </section>
}
export default Footer;