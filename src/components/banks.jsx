import React, { Component } from 'react';


class Banks extends Component {
     constructor(props)   {
            super(props);
            this.state = {
                
                isLoaded: false,
                 data: []
                 
            }  
        }

   componentDidMount() {
       fetch('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
       .then(res => res.json())
       .then(json => {
           this.setState({
               isLoaded: true,
               data: json
           })
       }).catch( err => console.log(err));
   }
    up
   
    render() {
     
        let{isLoaded, data }=this.state;
        if(isLoaded === false) {
        return(<p>Loading...</p>);
        }
        else 
        return (
            <React.Fragment>
            <input id="myInput" type="text" placeholder="Search.."></input>
            <table class="table table-striped table-hover table-bordered">
            
                <thead>
                    <tr>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Address</th>
                    <th scope="col">IFSC</th>
                    <th scope="col">City</th>
                    <th scope="col">District</th>
                    </tr>
                </thead>
                <tbody>
                
                    {data.map(bank => 
                        <tr>
                            <td>{bank.bank_name}</td>
                            <td>{bank.branch}</td>
                            <td>{bank.address}</td>
                            <td>{bank.ifsc}</td>
                            <td>{bank.city}</td>
                            <td>{bank.district}</td>
                    </tr>)};
                </tbody>
                </table>

               
            </React.Fragment>
          );
    }
}

 
export default Banks; 

