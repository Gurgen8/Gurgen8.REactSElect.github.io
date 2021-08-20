import React, { Component } from 'react';
import CategoryFilter from "./filters/CategoryFilter";
import ColorFilter from "./filters/ColorFilter";
import PriceFilter from "./filters/PriceFilter";
import SizeFilter from "./filters/SizeFilter";
import ClearFilter from "../helpers/ClearFilter";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ClearFilter />
        <CategoryFilter />
        <PriceFilter />
        <ColorFilter />
        <SizeFilter />
        <div className="sidebar__item">
          <div className="latest-product__text">
            <h4>Latest Products</h4>
            <div className="latest-product__slider owl-carousel owl-loaded owl-drag">


              <div className="owl-stage-outer">
                <div className="owl-stage"
                >
                  <div className="owl-item cloned">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-3.jpg.pagespeed.ic.eEz5Jo7-Qa.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="owl-item cloned">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-3.jpg.pagespeed.ic.eEz5Jo7-Qa.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-3.jpg.pagespeed.ic.eEz5Jo7-Qa.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="owl-item active">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-3.jpg.pagespeed.ic.eEz5Jo7-Qa.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="owl-item cloned">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-3.jpg.pagespeed.ic.eEz5Jo7-Qa.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="owl-item cloned">
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-1.jpg.pagespeed.ic.dQgcajStX5.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-2.jpg.pagespeed.ic.NOJHmb0hZw.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="img/latest-product/xlp-3.jpg.pagespeed.ic.eEz5Jo7-Qa.webp" alt="" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev"><span
                  className="fa fa-angle-left"><span></span></span></button>
                <button type="button" role="presentation" className="owl-next"><span
                  className="fa fa-angle-right"><span></span></span></button>
              </div>
              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
