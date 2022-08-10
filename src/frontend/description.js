import React from "react";


const Description = ()=>{
    return <section className="container-fluid" id="description">
                <div className="container">
                    <div className="row min-vh-100 align-items-center">
                        <div className="col-12">
                            <h1 className="text-center my-5 ">Our App For You</h1>
                        </div>
                        <div className="col-12">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12">
                                    <img src="/assets/rob-rm.png" alt=""/>
                                </div>
                                <div className="col-lg-6 col-12">
                                     <h1 >Read This</h1>
                                    <p className="header-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                    <div>
                                        <button className="cardBtn mr-4">
                                            ios App
                                        </button>
                                        <button className="cardBtn">
                                            Android App
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>


}

export default Description;