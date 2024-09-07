import { useEffect, useState } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "SPECIFICATION", label: "SPECIFICATION", minWidth: 170 },
  { id: "700", label: "700", minWidth: 100 },
  { id: "500", label: "500", minWidth: 100 },
  { id: "300", label: "300", minWidth: 100 },
  { id: "250", label: "250", minWidth: 100 },
  { id: "200", label: "200", minWidth: 100 },
];

function createData(SPECIFICATION, col1, col2, col3, col4, col5) {
  return {
    SPECIFICATION,
    700: col1,
    500: col2,
    300: col3,
    250: col4,
    200: col5,
  };
}

const rows = [
  createData("TOTAL CAO", "90%", "88%", "86%", "85%", "82%"),
  createData("%ACID INSOLUBLE (MAX.)", 0.7, 1, 1.2, 1.25, 1.25),

  createData(
    "R2 O3",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces"
  ),
  createData("%MAGNESIA AS MGO", 1.2, 1.4, 1.45, 1.5, 1.5),
  createData("MESH (PASSING)", "99%", "99%", "99%", "99%", "99%"),
  createData(
    "SLAKING TEMPERATURE 600ML WATER 150GM SAMPLE",
    "15 MIN",
    "15-20 MIN",
    "15-20 MIN",
    "	20-25 MIN",
    "30 MIN"
  ),
];
function QuickLimePowder() {
  useEffect(() => {
    loadScript("js/custom.js");
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <>
      {/* Service Detail */}
      <div className="section-full  p-t80 p-b50  ">
        <div className="container  bg-white ">
          <div className="section-content ">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="mt-box">
                  <h2 className="m-t0">Calcined/Quick Lime </h2>

                  <p>
                    Our Calcined/Quick Lime  , scientifically known as calcium oxide
                    (CaO), is a finely ground, high-purity powder produced from
                    premium-quality limestone. Manufactured in our cutting-edge
                    facilities, it undergoes precise calcination processes to
                    ensure consistent quality and optimal performance for
                    various industrial applications.
                  </p>
                  <p>
                  Calcined/Quick Lime   is a versatile product with a wide range
                    of uses. It is extensively employed in industries such as
                    steel manufacturing, chemical processing, paper production,
                    construction, and agriculture. It plays a crucial role in
                    soil stabilization, water treatment, and flue gas
                    desulfurization, making it a vital component for enhancing
                    productivity and efficiency across various sectors.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage
                        src="images/products/QuickLimeLumps.jpg"
                        
                        alt=""
                      />
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full  p-t80 p-b50  ">
        <div className="container  bg-white ">
          <div className="section-content ">
            <div className="row">
              <div className="col-12">
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.SPECIFICATION}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full p-t80 p-b50 bg-gray">
        <div className="container">
          {/* TITLE START*/}
          <div className="section-head text-center">
            <h2 data-title="Services">  Services</h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.HydratedLimePowder}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage
                            src="images/products/HydratedLimePowder(2).jpg"
                            alt=""
                          />
                        </div>
                      </div>
                     
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Hydrated Lime</h4>

                    <NavLink
                      to={route.Products.HydratedLimePowder}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.QuickLimeStone}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage
                            src="images/products/QuickLimeStone.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">  Lime Stone</h4>

                    <NavLink
                      to={route.Products.QuickLimeStone}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.QuickLimeLumps}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage
                            src="images/products/QuickLimePowder.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                       
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Calcined/Quick Lime Powder</h4>

                    <NavLink
                      to={route.Products.QuickLimeLumps}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full p-t80 p-b50 bg-white ">
        <div className="container  bg-white ">
          <div className="section-content ">
            <div className="row text-center">
              {/* <div className="col-lg-6 col-md-12">
              
                <div className="mt-box  need-help m-b40">
                  <h2>Need Assistance?</h2>
                  <p className="m-b15">
                    <b>
                      {" "}
                      Find answers to common questions about Chemilex, our products, and services. If you need further help, our team is always ready to assist.
                    </b>
                  </p>
                  <p>
                    {" "}
                    For decades, Chemilex has set the standard in quality and reliability. Our commitment to excellence ensures that every interaction you have with us meets your highest expectations. Whether you’re looking for detailed product information or have specific inquiries, we’re here to provide the support you need.
                  </p>
                  <ul className="list-check-circle primary m-b15">
                    <li>
                    Reach out to us for any questions or assistance related to our offerings. Your satisfaction is our top priority, and we’re dedicated to providing prompt and helpful responses to all your inquiries.
                    </li>
                    <li>
                    Simply contact us, and experience the Chemilex difference.
                    </li>
                  </ul>
                  <NavLink
                    to={route.pages.contact.CONTACT1}
                    className="site-button-link"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div> */}
              <div className="col-lg-12 col-md-12">
                {/* Quick Contact */}
                <div className="widget">
                  <h2>  Contact Us</h2>
                  <div className="widget-quick-form">
                    <form>
                      <div className="form-group">
                        <input
                          placeholder="Name"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          placeholder="Email"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          placeholder="Message"
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="site-button text-uppercase font-weight-600"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuickLimePowder;
