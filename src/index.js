// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
  
//   <React.Fragment>  
//     <h1> Tanmay Khandelwal </h1>
//     <p> Hello Its me </p>
//     <h2> Welcome to my page </h2>
//   </React.Fragment>,

//   document.getElementById('root'));


//   import React from 'react';
//   import ReactDOM from 'react-dom';


//   ReactDOM.render(

//     <React.Fragment>
//       <h1>Tanmay Netflix Picks</h1>
//       <p>List of 5 Best Series</p>
//       <ol>
//         <li>Stranger Things</li>
//         <li>Sacred Games</li>
//         <li>13 Reason Why</li>
//         <li>Lock & Key</li>
//         <li>Cursed</li>
//       </ol>
//     </React.Fragment>,

//   document.getElementById('root')
//   );




// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = 'Tanmay';
// const lname = 'Khandelwal';

// ReactDOM.render(
//   <>
//   <h1> {`My name is ${fname} ${lname}`} </h1>
//   <p>mt dob is 24</p>
//   </>, 

//   document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';

// const name = 'Tanmay';
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(

//   <>
//   <h1>Hello my name is {name}</h1>
//   <p>Current Date is = {currDate}  </p>
//   <p>Current Time is = {currTime} </p>
//   </>,

//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const heading = {
//   color: 'blueviolet',
//   textTransform: 'capitalize',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #ffe9c5',
//   margin: '70px 0',
//   fontFamily: '"Josefin Sans",sans-serif',
// };

// const name = 'Tanmay';
// const img1 = 'https://picsum.photos/200/300';
// const img2 = 'https://picsum.photos/250/300';
// const img3 = 'https://picsum.photos/280/300';

// ReactDOM.render(
// <>
//   <h1  style={heading}> My name is {name}</h1>
//   <div className="img_div">
//   <img src={img1} alt="Random" />
//   <img src={img2} alt="Random" />

//   <img src={img3} alt="Random" />
//   </div>
// </>,
//   document.getElementById('root')
// );





// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render( <App />, document.getElementById('root'));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'
// import App from './App';



// ReactDOM.render( <App />, document.getElementById('root'));





// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render( <App />, document.getElementById('root')
// );



// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import App from './App';
 

// ReactDOM.render( <App />,  
//     document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'

// ReactDOM.render(<App/>,
//     document.getElementById('root')
//   );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'

// ReactDOM.render( <App/>,
//   document.getElementById('root')
//   );




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'

// ReactDOM.render( <App/>,
//   document.getElementById('root')
//   );




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'

// ReactDOM.render( <App/>,
//   document.getElementById('root')
//   );



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'

// ReactDOM.render(<App/>,
// document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import ToDoListTWO from './ToDoListTWO';
// import './index.css';

// ReactDOM.render(<ToDoListTWO/>,
//     document.getElementById('root')
//     );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom';
// import './index.css'

// ReactDOM.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>, 
//         document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import ComA from './CompA';

// ReactDOM.render(
//     <ComA/>,
//     document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom';
// // import ComA from './CompA';
// import './file.css'

// ReactDOM.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Web.css";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </>,
    document.getElementById('root'),
);