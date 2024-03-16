// import React from "react";
// import { useNavigate } from "react-router-dom";

// function ACS_Faculty(props) {
//     const navigate = useNavigate();

//     const FacultyList = [
//         {
//             image: "../images/lal.jpg",
//             name: "Dr.lal",
//             courses: ["Java", "Android", "GDP"],
//             profile: "View Profile",
//         },
//         {
//             image: "../images/hoot.jpg",
//             name: "Dr.Hoot",
//             courses: ["Java", "Webapps", "Machine learning"],
//             profile: "View Profile",
//         },
//         {
//             image: "../images/mouli.jpg",
//             name: "Dr.Mouli",
//             courses: ["Java", "IOS", "Algorithms"],
//             profile: "View Profile",
//         },
//         {
//             image: "../images/chetti.jpg",
//             name: "Dr.Chetti",
//             courses: ["Database", "Project Management"],
//             profile: "View Profile",
//         },
//         {
//             image: "../images/qin.jpg",
//             name: "Dr.Zhengrui Qin",
//             courses: ["Advanced DB", "Network Security", "GDP"],
//             profile: "View Profile",
//         },
//     ];

//     const handleClose = () => {
//         navigate("/CSadmin");
//     };

//     return (
//         <>
//             <div>
//                 <div className='container-fluid' style={{ overflowY: "auto", maxHeight: "100vh" }}>
//                     <div className="row">
//                         <nav className="navbar bg-dark bg-gradient fixed-top">
//                             <div className="container-fluid text-center">
//                                 <h2 className="mx-auto">NORTHWEST - FACULTY APPLIED COMPUTER SCIENCE</h2>
//                                 {/* {props.close && (<> */}
//                                 <div className="d-flex justify-content-end mb-3">
//                                     <button
//                                         className="btn btn-danger rounded"
//                                         style={{ width: "100px", margin: "10px 20px 0 0 " }}
//                                         onClick={handleClose}
//                                     >
//                                         Dashboard
//                                     </button>
//                                 </div>
//                             </div>
//                         </nav>
//                     </div>
//                     <div className="row" style={{ marginTop: "6%" }}>
//                         {FacultyList.map((e, index) => (
//                             <div className="col-md-4" key={index}>
//                                 <div
//                                     className="card"
//                                     style={{ width: "450px", marginTop: "10px" }}
//                                 >
//                                     <div className="row">
//                                         <div className="col-md-4">
//                                             <img
//                                                 className="img-fluid rounded-start"
//                                                 src={e.image}
//                                                 alt="Card image cap"
//                                                 style={{ width: "150px", height: "200px" }}
//                                             />
//                                         </div>
//                                         <div className="col-md-8">
//                                             <div className="card-body">
//                                                 <h5 className="card-title">{e.name}</h5>
//                                                 <p className="card-text">
//                                                     {e.courses.map((c) => (
//                                                         <ul style={{ textAlign: "initial", margin: "3px" }}>
//                                                             <li key={c}>{c}</li>
//                                                         </ul>
//                                                     ))}
//                                                 </p>
//                                             </div>
//                                             <button
//                                                 className="btn btn-success rounded"
//                                                 style={{ width: "150px", margin: "0 0 0 65px" }}
//                                             >
//                                                 {e.profile}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {/* </>)} */}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ACS_Faculty;
