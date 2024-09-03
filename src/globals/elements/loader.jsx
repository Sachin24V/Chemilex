// function Loader() {
//     return (
//         <div className="loading-area">
//             <div className="loading-box" />
//             <div className="loading-pic">
//                 <div className="loading_progress-container">
//                     <div className="loading_progress">
//                         <div className="loading_progress-bar">
//                             <div className="loading_progress-shadow" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
         

//     )
// }
// export default Loader;
// import React from 'react';
// import logo from 'path/to/your/logo.png'; // Update the path to your logo image

// function Loader() {
//     return (
//         <div className="loading-area">
//             <div className="loading-box">
//                 <img src={logo} alt="Website Logo" className="loading-logo" />
//             </div>
//         </div>
//     );
// }

// export default Loader;
import React from 'react';
import loaderImage from '../Chemilex-BGR-Logo.png'; // Ensure this path is correct

function Loader() {
    return (
        <div className="loading-area">
            <div className="loading-logo">
                <div className="logo-circle">
                    <img src={loaderImage} alt="Logo" className="logo-image" />
                </div>
            </div>
        </div>
    );
}

export default Loader;

