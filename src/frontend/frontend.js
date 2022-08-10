import React from "react";

import Navigation from "./navigation";
import Header from "./head";
import Service from "./services";
import Description from "./description";
import Product from "./product";
import Footer from "./footer";

function Frontend() {
  return (
      <main className="bgColor">
          <div className="etBg">
              <div className="appContainer text-secondary">
                  <Navigation></Navigation>
              </div>
              <div className="appHeader text-secondary">
                  <Header></Header>
              </div>
              <div className="text-secondary">
                  <Service></Service>
              </div>
              <div className="text-secondary">
                  <Description></Description>
              </div>
              <div className="text-secondary">
                  <Product></Product>
              </div>
              <div className="text-secondary">
                  <Footer></Footer>
              </div>
          </div>
      </main>
  );
}
export default Frontend