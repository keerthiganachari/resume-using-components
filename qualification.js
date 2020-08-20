import React,{ Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Qualification extends Component
{
    render(){
    
        return(
            <div className="container">
                <div class="header">
                    <h2>Qualification:</h2>  
                </div>
                <div className="table" tabIndex="1" style={{marginLeft:"320px"}} >
                    <thead>
                        <th>Name of institution</th>
                        <th>YOP</th>
                        <th>Qualification</th>
                        <th>percentage</th>
                    </thead>
                    <tbody>
                        <td>SVN school</td>
                        <td>2010</td>
                        <td>SSLC</td>
                        <td>84%</td>
                    </tbody>
                    <tbody>
                        <td>Govt Polytechnic kampli</td>
                        <td>2013</td>
                        <td>Diploma(CS)</td>
                        <td>70%</td>
                    </tbody>
                    <tbody>
                        <td>RYMEC</td>
                        <td>2017</td>
                        <td>BE</td>
                        <td>69%</td>
                    </tbody>

                </div>
             </div>
           
           
        );
    }
    

}