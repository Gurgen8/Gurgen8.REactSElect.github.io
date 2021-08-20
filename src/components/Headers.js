import React, { Component } from 'react';
import SearchFilter from "./filters/SearchFiltrer";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";
import HeartButton from"./HeartButton"
import CompareButton from"./CompareButton"

class Headers extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="header__top__left">
                    <ul>
                      <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                      <li>Free Shipping for all Order of $99</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
                      <a href="https://facebook.com"><i className="fa fa-twitter"></i></a>
                      <a href="https://facebook.com"><i className="fa fa-linkedin"></i></a>
                      <a href="https://facebook.com"><i className="fa fa-pinterest-p"></i></a>
                    </div>
                    <div className="header__top__right__language">
                      <img alt="asd"
                           src="data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABwAwCdASobAA4APm0skkWkIqGYBABABsSxAE6ADcGtd+FD6qAA/vV+Wp4VqyJwr3tsqzUVysGAxh5jK++StlIxrHdqkxyfiwYlcgHy6RWg//tsvaTR2IctDJnOE/5mY93zrj0P0ea+n9DmVodGk7RubcK/qHhB4yLFEzBhQuGAAA=="
                      />
                      <div>English</div>
                      <span className="arrow_carrot-down"></span>
                      <ul>
                        <li><a href="https://facebook.com">Spanis</a></li>
                        <li><a href="https://facebook.com">English</a></li>
                      </ul>
                    </div>
                    <div className="header__top__right__auth">
                      <a href="https://facebook.com"><i className="fa fa-user"></i> Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="./index.html"
                  ><img alt="asd"
                        src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ=="
                  />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li>
                      <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">Cart</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                  <li><CompareButton/></li>
                    <li><HeartButton/>   </li>
          
                    <li> <CartButton />  </li>
                 
            
                  </ul>
                  <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </header>
        <section className="hero hero-normal">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <i className="fa fa-bars"></i>
                    <span>All departments</span>
                  </div>
                  <ul>
                    <li><a href="https://facebook.com">Fresh Meat</a></li>
                    <li><a href="https://facebook.com">Vegetables</a></li>
                    <li><a href="https://facebook.com">Fruit &amp; Nut Gifts</a></li>
                    <li><a href="https://facebook.com">Fresh Berries</a></li>
                    <li><a href="https://facebook.com">Ocean Foods</a></li>
                    <li><a href="https://facebook.com">Butter &amp; Eggs</a></li>
                    <li><a href="https://facebook.com">Fastfood</a></li>
                    <li><a href="https://facebook.com">Fresh Onion</a></li>
                    <li><a href="https://facebook.com">Papayaya &amp; Crisps</a></li>
                    <li><a href="https://facebook.com">Oatmeal</a></li>
                    <li><a href="https://facebook.com">Fresh Bananas</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__search">
                  <div className="hero__search__form">
                    <SearchFilter />
                  </div>
                  <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="hero__search__phone__text">
                      <h5>+65 11.188.888</h5>
                      <span>support 24/7 time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Headers;
