import React, { useRef } from "react";
import "./PostAd.css";
import { Field, Formik, useFormik } from "formik";
import { schema } from "./schema";
import Dropzone from "react-dropzone";
import Thumb from "./Thumb";

function PostAd(props) {
  // const colors = [
  //   "black",
  //   "white",
  //   "black",
  //   "white",
  //   "black",
  //   "white",
  //   "black",
  //   "white",
  //   "black",
  //   "white",
  // ];
  const initialValues = {
    category: "",
    title: "",
    price: 0,
    exchangableCheck: false,
    brand: "",
    durationOfUse: "",
    firstFilter: "",
    secondFilter: "",
    thirdFilter: "",
    files: [],
    description: "",
  };

  // const onSubmit = (values) => {
  //   console.log(values);
  //   // values.setFieldValue("imges", "");
  // };
  const validationSchema = schema;

  return (
    <div>
      <div
        id="body"
        className="container p-5 mt-5 border border-primary border-4 rounded-4 mb-4"
      >
        <h2 className="text-center my-4 border-bottom border-3 border-primary">
          POST YOUR AD
        </h2>
        <h5 className="mt-5 mb-3">SELECT A CATEGORY</h5>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // alert(
            //   JSON.stringify(
            //     {
            //       files: values.files.map((file) => ({
            //         fileName: file.name,
            //         type: file.type,
            //         size: `${file.size} bytes`,
            //       })),
            //     },
            //     null,
            //     2
            //   )
            // );
            console.log("submit ya zmele");
            console.log(values);
            // values.setFieldValue("imges", "");
          }}
          render={({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            handleChange,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <div
                className="btn-group mx-auto w-100"
                role="group"
                aria-label="Basic checkbox toggle button group"
                formEncType="multipart/form-data"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="category"
                  id="Antiques"
                  autoComplete="off"
                  onChange={handleChange}
                  value="antiques"
                />
                <label className="btn btn-outline-primary" htmlFor="Antiques">
                  Antiques
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="category"
                  id="PC&Laptop"
                  autoComplete="off"
                  value="pc&laptop"
                  onChange={handleChange}
                />
                <label className="btn btn-outline-primary" htmlFor="PC&Laptop">
                  PC &amp; Laptop
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="category"
                  id="Mobile&Tablet"
                  autoComplete="off"
                  value="mobile&tablet"
                  onChange={handleChange}
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="Mobile&Tablet"
                >
                  Mobile &amp; Tablet
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="category"
                  id="ConsoleGames"
                  autoComplete="off"
                  value="console games"
                  onChange={handleChange}
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="ConsoleGames"
                >
                  Console Games
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="category"
                  id="Cameras"
                  autoComplete="off"
                  value="cameras"
                  onChange={handleChange}
                />
                <label className="btn btn-outline-primary" htmlFor="Cameras">
                  Cameras
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="category"
                  id="homeAppliances"
                  autoComplete="off"
                  value="home appliances"
                  onChange={handleChange}
                />
                <label
                  className="btn btn-outline-primary"
                  htmlFor="homeAppliances"
                >
                  Home Appliances
                </label>
              </div>
              <div className="my-5 mx-3">
                <div className="mb-4">
                  <label htmlFor className="form-label">
                    AD TITLE
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={values.title}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                      borderColor: errors.title && touched.title ? "red" : "",
                    }}
                  />
                  {errors.title && touched.title ? (
                    <small style={{ color: "red" }}>{errors.title}</small>
                  ) : (
                    <small id="helpId" className="text-muted">
                      Mention title for your ad
                    </small>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor className="form-label">
                    PRICE
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      name="price"
                      min={0}
                      className="form-control"
                      placeholder
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        borderColor: errors.price && touched.price ? "red" : "",
                      }}
                    />
                    <span
                      className="input-group-text col-1 text-center"
                      id="basic-addon2"
                    >
                      EGP
                    </span>
                  </div>
                  {errors.price && touched.price ? (
                    <small style={{ color: "red" }}>{errors.price}</small>
                  ) : (
                    <small id="price" className="text-muted">
                      Set a price for your product
                    </small>
                  )}
                </div>
                <div className="form-check form-switch mb-4">
                  <input
                    className="form-check-input"
                    name="exchangableCheck"
                    type="checkbox"
                    id
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label fw-bold"
                    style={{ fontSize: "17px" }}
                  >
                    ABLE TO EXCHANGE
                  </label>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <label htmlFor="brand_list" className="form-label">
                      BRAND
                    </label>
                    <select
                      className="form-select"
                      id="brand_list"
                      name="brand"
                      aria-label=".form-select-lg example"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        borderColor: errors.brand && touched.brand ? "red" : "",
                      }}
                    >
                      <option selected hidden>
                        Select product's brand
                      </option>
                      <option value={"Apple"}>Apple</option>
                      <option value={"Acer"}>Acer</option>
                      <option value={"Alcatel"}>Alcatel</option>
                      <option value={"BlackBerry"}>BlackBerry</option>
                      <option value={"Google"}>Google</option>
                      <option value={"Honor"}>Honor</option>
                      <option value={"HTC"}>HTC</option>
                      <option value={"Huawei"}>Huawei</option>
                      <option value={"Infinix"}>Infinix</option>
                      <option value={"Lenonvo"}>Lenonvo</option>
                      <option value={"LG"}>LG</option>
                      <option value={"OPPO"}>OPPO</option>
                      <option value={"Samsung"}>Samsung</option>
                      <option value={"Xiaomi"}>Xiaomi</option>
                      <option value={"Other"}>Other</option>
                    </select>
                    {errors.brand && touched.brand ? (
                      <small style={{ color: "red" }}>{errors.brand}</small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col">
                    <label htmlFor="durationofuse_list" className="form-label">
                      DURATION OF USE
                    </label>
                    <select
                      className="form-select"
                      id="durationofuse_list"
                      name="durationOfUse"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        borderColor:
                          errors.durationOfUse && touched.durationOfUse
                            ? "red"
                            : "",
                      }}
                    >
                      <option selected hidden>
                        Select the duration of use
                      </option>
                      <option value={"Up to 3 months"}>Up to 3 months</option>
                      <option value={"3 to 6 months"}>3 to 6 months</option>
                      <option value={"1 year"}>1 Year</option>
                      <option value={"2 years"}>2 Years</option>
                      <option value={"2 years"}>3 Years</option>
                      <option value={"2 years"}>4 Years</option>
                      <option value={"2 years"}>5 Years and more</option>
                    </select>
                    {errors.durationOfUse && touched.durationOfUse ? (
                      <small style={{ color: "red" }}>
                        {errors.durationOfUse}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="mb-4">
                      <label htmlFor="simcard_list" className="form-label">
                        SIM CARD
                      </label>
                      <select
                        className="form-select"
                        id="simcard_list"
                        onChange={handleChange}
                        name="firstFilter"
                        onBlur={handleBlur}
                        style={{
                          borderColor:
                            errors.firstFilter && touched.firstFilter
                              ? "red"
                              : "",
                        }}
                      >
                        <option selected hidden>
                          Select the type of sim card
                        </option>
                        <option value={"Single Sim"}>Single Sim</option>
                        <option value={"Dual Sim"}>Dual Sim</option>
                        <option value={"No Sim"}>No Sim</option>
                      </select>
                      {errors.firstFilter && touched.firstFilter ? (
                        <small style={{ color: "red" }}>
                          {errors.firstFilter}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="memorysize_list" className="form-label">
                        MEMORY SIZE
                      </label>
                      <select
                        className="form-select"
                        id="memorysize_list"
                        name="secondFilter"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          borderColor:
                            errors.secondFilter && touched.secondFilter
                              ? "red"
                              : "",
                        }}
                      >
                        <option selected hidden>
                          Select the memory size
                        </option>
                        <option value={"Up to 3.9 GB"}>Up to 3.9 GB</option>
                        <option value={"4 GB"}>4 GB</option>
                        <option value={"8 GB"}>8 GB</option>
                        <option value={"16 GB"}>16 GB</option>
                        <option value={"32 GB"}>32 GB</option>
                        <option value={"64 GB"}>64 GB</option>
                        <option value={"128 GB"}>128 GB</option>
                        <option value={"256 GB & above"}>
                          256 GB &amp; above
                        </option>
                      </select>
                      {errors.secondFilter && touched.secondFilter ? (
                        <small style={{ color: "red" }}>
                          {errors.secondFilter}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="ramsize_list" className="form-label">
                        RAM SIZE
                      </label>
                      <select
                        className="form-select"
                        id="ramsize_list"
                        onChange={handleChange}
                        name="thirdFilter"
                        onBlur={handleBlur}
                        style={{
                          borderColor:
                            errors.thirdFilter && touched.thirdFilter
                              ? "red"
                              : "",
                        }}
                      >
                        <option selected hidden>
                          Select the Ram size
                        </option>
                        <option value={"Up to 3.9 GB"}>Up to 3.9 GB</option>
                        <option value={"4 GB"}>4 GB</option>
                        <option value={"8 GB"}>8 GB</option>
                        <option value={"16 GB"}>16 GB</option>
                        <option value={"32 GB"}>32 GB</option>
                        <option value={"64 GB"}>64 GB</option>
                        <option value={"128 GB"}>128 GB</option>
                        <option value={"256 GB & above"}>
                          256 GB &amp; above
                        </option>
                      </select>
                      {errors.thirdFilter && touched.thirdFilter ? (
                        <small style={{ color: "red" }}>
                          {errors.thirdFilter}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  {/* <div className="col-4 mx-auto w-25 border border-2 rounded-3 py-4 ps-5 border-secondary">
                    <label htmlFor="color" className="form-label">
                      COLOR
                    </label>
                    <div className="row w-100 h-100 py-2">
                      <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small d-flex gap-2 flex-wrap ps-4">
                        <li>
                          <input
                            className="form-check-input rounded-2 border border-1"
                            type="checkbox"
                            style={{
                              width: "30px",
                              height: "20px",
                              backgroundColor: "black",
                            }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>

                <div className="form-group mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <label
                      htmlFor="productimages"
                      className="form-label text-uppercase"
                    >
                      Choose up to 10 images
                    </label>
                    <button
                      className="btn btn-primary"
                      onClick={() => setFieldValue("files", [])}
                    >
                      Clear all
                    </button>
                  </div>
                  <Dropzone
                    accept="image/*"
                    style={{
                      border: "1px solid",
                      borderColor:
                        errors.files && touched.files ? "red" : "grey",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                    onDrop={(acceptedFiles) => {
                      // do nothing if no files
                      if (acceptedFiles.length === 0) {
                        return;
                      }

                      // on drop we add to the existing files
                      if (acceptedFiles.length + values.files.length <= 10) {
                        setFieldValue(
                          "files",
                          values.files.concat(acceptedFiles)
                        );
                      } else {
                        return "Photos should be 10 at most";
                      }
                    }}
                  >
                    {({
                      isDragActive,
                      isDragReject,
                      acceptedFiles,
                      rejectedFiles,
                    }) => {
                      if (isDragActive) {
                        return "This file is authorized";
                      }

                      if (isDragReject) {
                        return "This file is not authorized";
                      }

                      if (values.files.length === 0) {
                        return "Try dragging images here!";
                      }

                      // if (values.files.length > 10) {
                      //   return "Photos should be 10 at most";
                      // }

                      return values.files.map((file, i) => (
                        <Thumb key={i} file={file} />
                      ));
                    }}
                  </Dropzone>
                  {errors.files && touched.files ? (
                    <small style={{ color: "red" }}>{errors.files}</small>
                  ) : (
                    ""
                  )}
                  {/* <input
                className="form-control"
                type="file"
                id="images"
                multiple="multiple"
                accept="image/*"
                onChange={handleChange}
                name="images"
                // value={values.images}
                onBlur={handleBlur}
                innerField
                onDrop={(acceptedFiles) => {
                  // do nothing if no files
                  if (acceptedFiles.length === 0) {
                    return;
                  }

                
                  // on drop we add to the existing files
                  setFieldValue("images", values.images.concat(acceptedFiles));
                }}
                style={{
                  borderColor:
                    errors.images && touched.images ? "red" : "",
                }}
              /> */}
                </div>
                {/* {errors.images && touched.images ? (
              <small style={{ color: "red" }}>{errors.images}</small>
            ) : (
              ""
            )} */}
                <div className="mb-5">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    onChange={handleChange}
                    name="description"
                    rows={6}
                    onBlur={handleBlur}
                    style={{
                      borderColor:
                        errors.description && touched.description ? "red" : "",
                    }}
                  />
                  {errors.description && touched.description ? (
                    <small style={{ color: "red" }}>{errors.description}</small>
                  ) : (
                    ""
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-2 fs-3"
                >
                  POST AD
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default PostAd;
