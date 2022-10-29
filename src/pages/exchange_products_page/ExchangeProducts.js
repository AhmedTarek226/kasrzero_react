import React from "react";
import "./ExchangeProducts.css";
import Sidebar from "./components/Sidebar";

function ExchangeProducts(props) {
  return (
    <div>
      <section className="container-fluid p-3 d-flex my-4">
        <Sidebar></Sidebar>
        <div id="main">
          <article className="card">
            <div className="row">
              <p className="col fs-4">Dell insprion laptop</p>
              <p className="col-3 me-3 text-center p-1 fw-bold  rounded-2 border border-primary text-primary fs-5">
                12900 EGP
              </p>
            </div>
            <div className="container w-100 h-100 border p-2 my-2 bg-black">
              <div
                className="carousel carousel-fade slide"
                id="gallery"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                    <img
                      src="https://my-syria.com/wp-content/uploads/2022/07/41P8hE8mCL._AC_.jpg"
                      className="d-block"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61-yln4IXjL._AC_SL1500_.jpg"
                      className="d-block"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.olx.com.eg/thumbnails/36188009-400x300.webp"
                      className="d-block"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://5.imimg.com/data5/IZ/WE/TV/SELLER-76766217/dell-laptop-500x500.jpg"
                      className="d-block"
                    />
                  </div>
                </div>
                <div className="carousel-indicators">
                  <input
                    type="image"
                    src="https://my-syria.com/wp-content/uploads/2022/07/41P8hE8mCL._AC_.jpg"
                    data-bs-target="#gallery"
                    data-bs-slide-to={0}
                    className="h-75 border border-3 border-light"
                  />
                  <input
                    type="image"
                    src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61-yln4IXjL._AC_SL1500_.jpg"
                    data-bs-target="#gallery"
                    data-bs-slide-to={1}
                    className="h-75 border border-3 border-light"
                  />
                  <input
                    type="image"
                    src="https://images.olx.com.eg/thumbnails/36188009-400x300.webp"
                    data-bs-target="#gallery"
                    data-bs-slide-to={2}
                    className="h-75 border border-3 border-light"
                  />
                  <input
                    type="image"
                    src="https://5.imimg.com/data5/IZ/WE/TV/SELLER-76766217/dell-laptop-500x500.jpg"
                    data-bs-target="#gallery"
                    data-bs-slide-to={3}
                    className="active h-75 border border-3 border-light"
                  />
                </div>
                <button
                  className="carousel-control-prev pe-5"
                  data-bs-target="#gallery"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </button>
                <button
                  className="carousel-control-next ps-5"
                  data-bs-target="#gallery"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </button>
              </div>
            </div>
            <p className="fs-5 mt-3">Details</p>
            <div className="container">
              <div className="row mb-3 bg-light">
                <div className="col-4 border-start border-5 border-primary">
                  Duration of use:
                </div>
                <div className="col-2 ">1 Year</div>
                <div className="col-3 border-start border-5 border-primary">
                  Memory size:
                </div>
                <div className="col-3 ">256 g</div>
              </div>
              <div className="row mb-3 bg-light">
                <div className="col-4 border-start border-5 border-primary">
                  Location:
                </div>
                <div className="col-2">Cairo</div>
                <div className="col-3 border-start border-5 border-primary">
                  Color:
                </div>
                <div className="col-3">Siera blue</div>
              </div>
              <div className="row mb-3 bg-light">
                <div className="col-4 border-start border-5 border-primary">
                  Brand:
                </div>
                <div className="col-2">Apple</div>
                <div className="col-3 border-start border-5 border-primary">
                  Ram size:
                </div>
                <div className="col-3">6 g</div>
              </div>
            </div>
            <p className="fs-5 mt-3">Description</p>
            <p className="container border border-2 rounded-2 p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              voluptates, quod aliquid hic sequi voluptate corrupti possimus
              ullam magnam quos error ad quas ex minus explicabo a! Sapiente,
              dolor ipsa numquam iusto et, quisquam distinctio, fugit omnis
              perspiciatis ipsum repellendus?
            </p>
          </article>
          <article className="card ">
            <div className="row">
              <p className="col fs-4">Iphone 13 pro max</p>
              <p className="col-3 me-3 text-center p-1 fw-bold  rounded-2 border border-primary text-primary fs-5">
                18000 EGP
              </p>
            </div>
            <div className="container h-100 w-100 border p-2 my-2 bg-black ">
              <div
                className="carousel h-100 carousel-fade slide"
                id="product2"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item  active">
                    <img
                      src="https://media.karousell.com/media/photos/products/2022/5/23/iphone_13_pro_max_sierra_blue__1653290463_e644816e.jpg"
                      className="d-block"
                    />
                  </div>
                  <div className="carousel-item  ">
                    <img
                      src="https://images.macrumors.com/t/gDppyVqj6FxRtCQjHw2DH10eqDM=/400x0/article-new/2021/09/iphone-13-pro-sierra-blue-3.jpeg?lossy"
                      className="d-block"
                    />
                  </div>
                  <div className="carousel-item  ">
                    <img
                      src="https://ae01.alicdn.com/kf/H982dc6d45f054b1eac54715f9209ecc2k/Sierra-Blue-Matte-Clear-Case-For-iPhone-13-Pro-Max-2021-12-Mini-11-13Pro-12Pro.jpg"
                      className="d-block"
                    />
                  </div>
                  <div className="carousel-item  ">
                    <img
                      src="https://images.macrumors.com/t/rt_XRqiShIdAFYbsCkiTmm4G0i4=/1200x1200/smart/article-new/2021/09/iphone-13-pro-review-the-verge.jpeg"
                      className="d-block"
                    />
                  </div>
                  <div className="carousel-item  ">
                    <img
                      src="https://images.macrumors.com/t/gDppyVqj6FxRtCQjHw2DH10eqDM=/400x0/article-new/2021/09/iphone-13-pro-sierra-blue-3.jpeg?lossy"
                      className="d-block"
                    />
                  </div>
                  <div className="carousel-item  ">
                    <img
                      src="https://ae01.alicdn.com/kf/H982dc6d45f054b1eac54715f9209ecc2k/Sierra-Blue-Matte-Clear-Case-For-iPhone-13-Pro-Max-2021-12-Mini-11-13Pro-12Pro.jpg"
                      className="d-block"
                    />
                  </div>
                </div>
                <div className="carousel-indicators">
                  <input
                    type="image"
                    src="https://media.karousell.com/media/photos/products/2022/5/23/iphone_13_pro_max_sierra_blue__1653290463_e644816e.jpg"
                    data-bs-target="#product2"
                    data-bs-slide-to={0}
                    className="h-75 border border-3 border-light"
                  />
                  <input
                    type="image"
                    src="https://images.macrumors.com/t/gDppyVqj6FxRtCQjHw2DH10eqDM=/400x0/article-new/2021/09/iphone-13-pro-sierra-blue-3.jpeg?lossy"
                    data-bs-target="#product2"
                    data-bs-slide-to={1}
                    className="h-75 border border-3 border-light"
                  />
                  <input
                    type="image"
                    src="https://ae01.alicdn.com/kf/H982dc6d45f054b1eac54715f9209ecc2k/Sierra-Blue-Matte-Clear-Case-For-iPhone-13-Pro-Max-2021-12-Mini-11-13Pro-12Pro.jpg"
                    data-bs-target="#product2"
                    data-bs-slide-to={2}
                    className="h-75 border border-3 border-light"
                  />
                  <input
                    type="image"
                    src="https://images.macrumors.com/t/rt_XRqiShIdAFYbsCkiTmm4G0i4=/1200x1200/smart/article-new/2021/09/iphone-13-pro-review-the-verge.jpeg"
                    data-bs-target="#product2"
                    data-bs-slide-to={3}
                    className="active h-75 border border-3 border-light"
                  />
                  <input
                    type="image"
                    src="https://images.macrumors.com/t/gDppyVqj6FxRtCQjHw2DH10eqDM=/400x0/article-new/2021/09/iphone-13-pro-sierra-blue-3.jpeg?lossy"
                    data-bs-target="#product2"
                    data-bs-slide-to={4}
                    className="h-75 border border-3 border-light"
                  />
                  <input
                    type="image"
                    src="https://ae01.alicdn.com/kf/H982dc6d45f054b1eac54715f9209ecc2k/Sierra-Blue-Matte-Clear-Case-For-iPhone-13-Pro-Max-2021-12-Mini-11-13Pro-12Pro.jpg"
                    data-bs-target="#product2"
                    data-bs-slide-to={5}
                    className="active h-75 border border-3 border-light"
                  />
                </div>
                <button
                  className="carousel-control-prev pe-5"
                  data-bs-target="#product2"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </button>
                <button
                  className="carousel-control-next ps-5"
                  data-bs-target="#product2"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </button>
              </div>
            </div>
            <p className="fs-5 mt-3">Details</p>
            <div className="container">
              <div className="row mb-3 bg-light">
                <div className="col-4 border-start border-5 border-primary">
                  Duration of use:
                </div>
                <div className="col-2 ">1 Year</div>
                <div className="col-3 border-start border-5 border-primary">
                  Memory size:
                </div>
                <div className="col-3 ">256 g</div>
              </div>
              <div className="row mb-3 bg-light">
                <div className="col-4 border-start border-5 border-primary">
                  Location:
                </div>
                <div className="col-2">Cairo</div>
                <div className="col-3 border-start border-5 border-primary">
                  Color:
                </div>
                <div className="col-3">Siera blue</div>
              </div>
              <div className="row mb-3 bg-light">
                <div className="col-4 border-start border-5 border-primary">
                  Brand:
                </div>
                <div className="col-2">Apple</div>
                <div className="col-3 border-start border-5 border-primary">
                  Ram size:
                </div>
                <div className="col-3">6 g</div>
              </div>
            </div>
            <p className="fs-5 mt-3">Description</p>
            <p className="container border border-2 rounded-2 p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              voluptates, quod aliquid hic sequi voluptate corrupti possimus
              ullam magnam quos error ad quas ex minus explicabo a! Sapiente,
              dolor ipsa numquam iusto et, quisquam distinctio, fugit omnis
              perspiciatis ipsum repellendus?
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default ExchangeProducts;
