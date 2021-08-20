import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="./index.html">
                    <img
                    src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ=="
                    alt="asd" /></a>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div className="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li><a href="https://facebook.com">About Us</a></li>
                  <li><a href="https://facebook.com">About Our Shop</a></li>
                  <li><a href="https://facebook.com">Secure Shopping</a></li>
                  <li><a href="https://facebook.com">Delivery infomation</a></li>
                  <li><a href="https://facebook.com">Privacy Policy</a></li>
                  <li><a href="https://facebook.com">Our Sitemap</a></li>
                </ul>
                <ul>
                  <li><a href="https://facebook.com">Who We Are</a></li>
                  <li><a href="https://facebook.com">Our Services</a></li>
                  <li><a href="https://facebook.com">Projects</a></li>
                  <li><a href="https://facebook.com">Contact</a></li>
                  <li><a href="https://facebook.com">Innovation</a></li>
                  <li><a href="https://facebook.com">Testimonials</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                    <button type="submit" className="site-btn">Subscribe</button>
                </form>
                <div className="footer__widget__social">
                  <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
                  <a href="https://facebook.com"><i className="fa fa-instagram"></i></a>
                  <a href="https://facebook.com"><i className="fa fa-twitter"></i></a>
                  <a href="https://facebook.com"><i className="fa fa-pinterest"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright">
                <div className="footer__copyright__text">
                  <p>
                    Copyright ©
                    <script>document.write(new Date().getFullYear());</script>
                    2021 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a
                    href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
                  </p>
                </div>
                <div className="footer__copyright__payment">
                  <img
                  src="img/xpayment-item.png.pagespeed.ic.fk3ziISga0.webp" alt="" data-pagespeed-url-hash="577918195"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
