import { useEffect, useState } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
 
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";

const columns = [
  { id: "SPECIFICATION", label: "SPECIFICATION", minWidth: 200 },
  { id: "HANDPIKED", label: "HANDPIKED", minWidth: 200 },
  { id: "ORDINARY", label: "ORDINARY", minWidth: 200 },
];

function createData(SPECIFICATION, HANDPIKED, ORDINARY) {
  return { SPECIFICATION, HANDPIKED, ORDINARY };
}

const rows = [
  createData("TOTAL CAO", 86, "82 TO 85"),
  createData("Mgo", 1.60, 2),
  createData("SIO2", 1.40, 1.80),
  createData("R2 03", "IN  ", "IN     "),
  createData("L.I.O", 3.5, "4-5 MAX"),
  createData("REACTIVITY", '350 ML', "310-350 ML"),
  createData("SIZE", '50-100 ML', "50-100 ML"),
  createData("PACKING", "	REPOL BAGS", ""),
];
function QuickLimeLumps() {
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
                  <h2 className="m-t0">Calcined/Quick Lime Powder</h2>

                  <p>
                  Calcined/Quick Lime Powder, also known as calcium oxide (CaO), are
                    produced by calcining high-quality limestone at high
                    temperatures to drive off carbon dioxide. At Chemilex
                    Industries, we ensure our Calcined/Quick Lime Powder are carefully
                    processed to maintain consistent size, high purity, and
                    excellent reactivity, making them ideal for a variety of
                    industrial applications.
                  </p>
                  <p>
                  Calcined/Quick Lime Powder are widely used in numerous sectors,
                    including steel manufacturing, chemical production,
                    construction, and environmental management. They are crucial
                    for applications such as pH control, soil stabilization,
                    wastewater treatment, and as a fluxing agent in steel
                    production. The robust and reliable performance of Quick
                    Lime Powder makes them an essential component for improving
                    industrial processes and achieving superior results.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                  <div className="item">
                    <div className="aon-thum-bx">
                    <FastImage src="images/products/QuickLimePowder.jpg" alt="" />
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full p-t80 p-b50">
      <div className="container bg-white">
        <div className="section-content">
          <div className="row">
            <div className="col-12">
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 600 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align="center" // Adjust alignment if needed
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.SPECIFICATION}>
                            {columns.map((column) => (
                              <TableCell key={column.id} align="center"> {/* Adjust alignment if needed */}
                                {row[column.id]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
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
                        <FastImage src="images/products/HydratedLimePowder(2).jpg" alt="" />
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
                        <FastImage src="images/products/QuickLimeStone.jpg" alt="" />
                        </div>
                      </div>
                      
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0"> Lime Stone</h4>

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
                  <NavLink to={route.Products.QuickLimePowder}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage  src="images/products/QuickLimeLumps.jpg" alt="" />
                        </div>
                      </div>
                      
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Calcined/Quick Lime  </h4>

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
export default QuickLimeLumps;
