import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Orders from '../Pages/Orders/Orders'
import Dashboard from '../Pages/Dashboard/Dashboard';
import MainTypography from '../Components/Typography/MainTypography';
import MainIcons from '../Components/MainIcons/MainIcons';
import MainColors from '../Components/MainColors/MainColors';
import MainCharts from '../Components/MainCharts/MainCharts';
import SamplePage from '../Components/SamplePage/SamplePage';
import Others from '../Components/Others/Others';


  
class Routing extends Component {
  render() {
    return (
      <>
    

       
           <Routes>
                 <Route exact path='/' element={< Dashboard/>}></Route>
                 <Route  path='/orders' element={< Orders/>}></Route>
                 <Route  path='/typography' element={<MainTypography />}></Route>
                 <Route  path='/icons' element={<MainIcons />}></Route>
                 <Route  path='/colors' element={<MainColors />}></Route>
                 <Route  path='/charts' element={<MainCharts />}></Route>
                 <Route  path='/samplepage' element={<SamplePage />}></Route>
                 <Route  path='/others' element={<Others />}></Route>
          </Routes>
        
      
       </> 
   );
  }
}
  
export default Routing;