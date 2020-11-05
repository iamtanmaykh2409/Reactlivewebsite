// import React, { useState } from 'react';
// import ToDoList from './Todolist';

// const { createContext } = require("react");

// const App = () =>{


//     const [inputList, setInputList] = useState("");
//     const [Items, setItems ] = useState([]);


//     const itemEvent = (event) =>{
//         setInputList(event.target.value);
//     };
//     const listOfItem =() =>{
//         setItems((oldItems) =>{
//             return [...oldItems, inputList];
//         });
//         setInputList("");
//     };
//     const deleteItem = (id) =>{
//         // console.log("deleted");
//         setItems((oldItems) =>{
//             return oldItems.filter((arrElem, index) =>{
//                 return index !== id;
//             })
//         });

//     };
//     return(
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <br/>
//                     <h1>To Do List</h1>
//                     <br/>
//                     <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList} />
//                     <button onClick={listOfItem}> + </button>

//                     <ol>
//                         {Items.map( (itemval,index) => {
//                            return( <ToDoList    
//                             key={index} 
//                             id={index}
//                             text ={itemval}
//                             onSelect = {deleteItem}
//                             />
//                            );
//                         })}
//                     </ol>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default App;




// import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';

// const App = () => {

//     const [num, setNum] = useState(0);

//     const incNum = () =>{
//         setNum(num + 1);
//     }
//     const decNum = () =>{
//         if(num > 0){
//         setNum (num - 1);
//         }else{
//             alert('Sorry, Zero  limit Reach');
//             setNum(0);
//         }
//     }
    
//     return (
//         <>
//         <div className="main_div">
//             <div className="center_div">
//                 <h1>{num}</h1>
//                 <div className="btn_div">
//                     <Tooltip title="Add" aria-label="add">
//                         <Button onClick={incNum}> <AddIcon/> </Button>
//                     </Tooltip>    
//                     <Tooltip title="Delete">
//                         <Button onClick={decNum}> <RemoveIcon /> </Button>
//                     </Tooltip>    
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default App;



// import React from 'react';
// import Clock from 'react-digital-clock';

// const App = () => {
//     return(
//         <>
//             <Clock />
//         </>    
//     );
// };

// export default App;

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';

// const ToDoListTWO = () =>{
//     return(
//     <>
//         <div className='main_div'>
//             <div className='center_div'>
//                 <h1>To Do List</h1>
//                 <br/>
//                 <input type='text'
//                     placeholder='Add An Item'
//                 />
//                 <Button className='newBtn'>  
//                     <AddIcon />
//                 </Button>
//             </div>
//         </div>
//     </>
//     )
// }

// export default ToDoListTWO;




// import React from 'react';
// import {Route, Switch} from "react-router-dom";
// import About from './About';
// import Contact from './Contact';
// import Error from  './Error';
// import Menu from './Menu';

// const App = () =>{
//     return(
//         <>
//         <Menu />
//         <Switch>
//             <Route exact path='/' component={About} />
//             <Route path='/contact' component={Contact} />
//             <Route component={Error} />
//         </Switch>
//             {/* <About/>
//             <Contact/> */}
//         </>
//     );
// };

// export default App;


// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const  App = () => {
//     return(
//         <React.Fragment>
//             <h1 className="text-center mt-4 text-danger">Welcome</h1>
//         </React.Fragment>
//     )
// };

// export default App;




// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//     return<React.Fragment>
//         <h1 className="text-center my-3">Welcome to my Page</h1>
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm ">
//                     <div class="card">
//                         <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm ">
//                     <div class="card">
//                         <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm ">
//                     <div class="card">
//                         <img src="https://picsum.photos/202/300" class="card-img-top" alt="..." height="200px"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                             <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </React.Fragment>;
// };

// // export default App;

//------NOTEAPP-------------------------------//


// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import CreateNote from './CreateNote';
// import Note from './Note';

// const App = () => {
//     const [addItem , setAddItem] =useState([]);
    
// const addNote = (note) =>{
//     // alert('I am Click');
//     setAddItem((oldData)=>{
//         return[...oldData , note];
//     });
// };

//     const onDelete= (id) =>{
//         setAddItem((oldData)=>
//             oldData.filter((currdata , indx) =>{
//                 return indx !== id;
//             })
//         );
//     };
//     return(
//        <>
//         <Header/>
//         <CreateNote passNote={addNote}/>
//         { .map((val, index)=>{
//             return(
//                 <Note
//                     key={index}
//                     id={index}
//                     title={val.title}
//                     content={val.content}
//                     deleteItem={onDelete}
//                 />
//             );
        // })}
//         <Footer/>
//        </>
//     )
// };

// export default App;
//-------END note app--------- //////



// import React, { createContext } from 'react';
// import ComA from './CompA';

// const FirstName= createContext();
// const LastName = createContext();

// const App = () =>{
//     return (
//         <>
//             <FirstName.Provider value={'Tanmay'}>
//                 <LastName.Provider value={'Khandelwal'} >
// //                 <ComA/>
// //                 </LastName.Provider> 
// //             </FirstName.Provider>
// //         </>
// //     );
// // };

// // export default App;
// // export {FirstName , LastName};


// import React, { useEffect, useState } from 'react';

// const App = () =>{
//     const [num,setNum] =useState(0);

//     useEffect(() =>{
//         alert('i am Clicked');
//     });

//     return (
//         <button onClick={() =>{setNum(num+1);
//         }}
//         > Click Me {num}</button>
//     );
// };

// export default App;

// import React from 'react';
// import {Route , Switch, Redirect}  from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Services from './Services';
// import Error from './Error';
// import Menu from './Menu';
// import User from './User';
// import Search from './Search';

// const App = () =>{
//         const Name = () =>{
//                 return <h1>HEllo iTs is a Name page</h1>
//         };
//         return(
//          <>
//          <Menu />
//         <Switch>
//           <Route exact path='/' component={About} />
//           <Route exact path='/search' component={Search} />
//           <Route exact path='/contact' component={Contact} />                                             
//           <Route exact path='/services' component={Services} />
//           <Route path="/user/:fname" component={User} />
//           {/* <Route component={Error} /> */}
//           <Redirect to="" />
//         </Switch>
//                 {/* <About/>
//                 <Contact/> */}
//          </>
//         );
// };

// export default App;



import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch , Route, Redirect } from 'react-router-dom';
import Foot from './Foot';

const App = () =>{
    return(
        <>
        <Navbar />
          <Switch>
             <Route exact path ="/"  component={Home} />
             <Route exact path ="/about"  component={About} />
             <Route exact path ="/service"  component={Service} />
             <Route exact path ="/contact"  component={Contact} />
             <Redirect to = "/" />
          </Switch>
          <Foot/>
        </> 
    );
}

export default App;











