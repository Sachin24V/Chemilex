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
import OwlCarousel from 'react-owl-carousel';
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "SPECIFICATION", label: "SPECIFICATION", minWidth: 170 },
  { id: "+97", label: "+97", minWidth: 100 },
  { id: "+96", label: "+96", minWidth: 100 },
  { id: "+94", label: "+94", minWidth: 100 },
  { id: "+93", label: "+93", minWidth: 100 },
  { id: "+92", label: "+92", minWidth: 100 },
  { id: "+90A", label: "+90 (A)", minWidth: 100 },
  { id: "+90B", label: "+90 (B)", minWidth: 100 },
  { id: "+85", label: "+85", minWidth: 100 },
  { id: "+80", label: "+80", minWidth: 100 },
  { id: "+75", label: "+75", minWidth: 100 },
  { id: "+70", label: "+70", minWidth: 100 },
  { id: "+60", label: "+60", minWidth: 100 },
];

function createData(
  SPECIFICATION,
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  col9,
  col10,
  col11,
  col12
) {
  return {
    SPECIFICATION,
    "+97": col1,
    "+96": col2,
    "+94": col3,
    "+93": col4,
    "+92": col5,
    "+90A": col6,
    "+90B": col7,
    "+85": col8,
    "+80": col9,
    "+75": col10,
    "+70": col11,
    "+60": col12,
  };
}

const rows = [
  createData(
    "% OF AVAILABLE LIME AS CA(OH)2",
    97,
    96,
    94,
    93,
    92,
    91,
    90,
    85,
    80,
    75,
    70,
    60
  ),
  createData(
    "% OF AVAILABLE LIME AS CAO",
    73.4,
    72.64,
    71.13,
    70.37,
    69.62,
    68.86,
    68.1,
    64.32,
    60.54,
    56.75,
    52.97,
    45.4
  ),
  createData(
    "% ADD INSOLUBLES (MAX.)",
    0.08,
    0.1,
    0.15,
    0.2,
    0.5,
    0.8,
    1.0,
    1.3,
    2.5,
    3,
    4,
    5.7
  ),
  createData(
    "% IRON ALUMINA",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces",
    "IN Traces"
  ),
  createData(
    "% MAGNESIA AS MGO",
    0.04,
    0.5,
    0.55,
    0.6,
    0.7,
    0.8,
    1,
    1,
    1.2,
    1.4,
    2,
    2
  ),
  createData(
    "MESS (BSS)",
    600,
    500,
    450,
    400,
    350,
    300,
    250,
    250,
    200,
    200,
    150,
    150
  ),
  createData("PACKING", "LAMINATED PP/HDPE BAG, JAMBO BAGS"),
];

function HydratedLimePowder() {
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
                  <h2 className="m-t0">Hydrated Lime</h2>

                  <p>
                    Our Hydrated Lime, known chemically as Ca(OH)₂, is a
                    dry, fine, and free-flowing white powder. Produced using
                    advanced technology in our state-of-the-art manufacturing
                    facilities, this product is crafted through carefully
                    controlled processes to provide different grades, ensuring
                    high yield and excellent performance.
                  </p>
                  <p>
                  Hydrated Lime is a versatile product with extensive
                    applications across numerous industries. It is essential in
                    agriculture, chemical processing, dairy production, effluent
                    treatment, leather manufacturing, paint and coatings,
                    pharmaceuticals, road construction, and water treatment. Its
                    diverse range of uses makes Hydrated Lime an
                    indispensable component in both industrial and environmental
                    applications.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">

              <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    >

                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage
                        src="images/products/HydratedLimePowder(2).jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  
                
                </OwlCarousel>
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
            <h2 data-title="Supplies">  Services</h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6">
             <div className="mt-box bg-white m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.QuickLimePowder}>

                  <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    >
                  
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage
                                src="images/products/QuickLimeLumps.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      
              
                    </OwlCarousel>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Calcined/Quick Lime</h4>

                    <NavLink
                      to={route.Products.QuickLimePowder}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
             <div className="mt-box bg-white m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.QuickLimeStone}>
                
                  <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    >
                   
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage
                            src="images/products/QuickLimeStone.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                       
                
                    </OwlCarousel>
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
             <div className="mt-box bg-white m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.QuickLimeLumps}>
                    
                  <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    >
                  
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage
                       
                             src="images/products/QuickLimePowder.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                     
                    
                    </OwlCarousel>
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
export default HydratedLimePowder;
