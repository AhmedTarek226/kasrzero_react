import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { axiosInstance } from "../../../config/axios";

function ProductCard(props) {
  const imgs = [
    "https://my-syria.com/wp-content/uploads/2022/07/41P8hE8mCL._AC_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61-yln4IXjL._AC_SL1500_.jpg",
    "https://images.olx.com.eg/thumbnails/36188009-400x300.webp",
    "https://5.imimg.com/data5/IZ/WE/TV/SELLER-76766217/dell-laptop-500x500.jpg",
  ];

  // var product = {
  //   "img":[
  //     "https://my-syria.com/wp-content/uploads/2022/07/41P8hE8mCL._AC_.jpg",
  //     "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61-yln4IXjL._AC_SL1500_.jpg",
  //     "https://images.olx.com.eg/thumbnails/36188009-400x300.webp",
  //     "https://5.imimg.com/data5/IZ/WE/TV/SELLER-76766217/dell-laptop-500x500.jpg",
  //   ],
  //   "title":"Dell insprison laptop",
  //   "price":""
  // }


  const [product, setProduct] = useState({
    data:{
      
    },category:{
      firstFilter:{},
      secondFilter:{},
      thirdFilter:{},
    }
  });
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    await axiosInstance
      .get("product/getProduct/63624cbe83690a2622a300f4")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        // console.log(product.data.title)
      })
      .catch((err) => console.log("Error"));
  }

  return (
    <article className="card mx-0 w-100">
      <div className="row">
        <p className="col fs-5">{product.data.title}</p>
        <p className="col-3 me-3 text-center p-1 fw-bold  rounded-2 border border-primary text-primary fs-5">
          {product.data.price} EGP
        </p>
      </div>
      <div className="container w-100 h-100 rounded-2 border py-2 my-2 bg-black">
        <Carousel interval={null}>
          {imgs.map((img) => (
            <Carousel.Item>
              <img className="d-block" src={img} alt={img} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <p className="fs-5 mt-3">Details</p>
      <div className="container text-capitalize">
        <div className="row mb-3 bg-light">
          <div className="col-4 border-start border-5 border-primary">
            Duration of use:
          </div>
          <div className="col-2 ">{product.data.durationOfUse}</div>
          <div className="col-3 border-start border-5 border-primary">
          {product.category.firstFilter.title}:
          </div>
          <div className="col-3 ">{product.data.firstFilter}</div>
        </div>
        <div className="row mb-3 bg-light">
          <div className="col-4 border-start border-5 border-primary">
          Brand:
          </div>
          <div className="col-2">{product.data.brand}</div>
          <div className="col-3 border-start border-5 border-primary ">
            {product.category.secondFilter.title}
          </div>
          <div className="col-3">{product.data.secondFilter}</div>
        </div>
        <div className="row mb-3 bg-light">
          <div className="col-4 border-start border-5 border-primary">
            Color:
          </div>
          <div className="col-2">{product.data.color}</div>
          <div className="col-3 border-start border-5 border-primary">
            {product.category.thirdFilter.title}:
          </div>
          <div className="col-3">{product.data.thirdFilter}</div>
        </div>
      </div>
      <p className="fs-5 mt-3">Description</p>
      <p className="fs-6 fw-normal border border-2 rounded-2 p-2">
      {product.data.description}
      </p>
    </article>
  );
}

export default ProductCard;
