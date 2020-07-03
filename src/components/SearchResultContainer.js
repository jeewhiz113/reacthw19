import React, { Component } from "react";

import API from "../utils/API";


class SearchResultContainer extends Component {
  state = {
    results: []
  };
  componentDidMount() {
    this.getEmpResult();
  }
  getEmpResult = () => { 
    API.getEmp()
      .then((res) =>{
        this.setState({ results: res.data.results })
        console.log(this.state.results);
      }) 
      .catch(err => console.log(err));
  };
  sortByAge = () => {
    /*  
    let sortedArray = this.state.results.sort( function(a,b){
      if (a.dob.age < b.dob.age){
        return -1;
      }else if (a.dob.age > b.dob.age){
        return 1;
      }else{
        return 0;
      }
    })*/
    this.setState( { results: this.state.results.sort(function(a,b) {
        if (a.dob.age < b.dob.age){
          return -1; //means a as an object is smaller than b
        }else if (a.dob.age > b.dob.age){
          return 1; //tells the computer that a is greater (a should be to the right of b)
        }else{
          return 0;  //they can be next each other.
        }
      })});
  }
  
  /*  Ok so two questions: 1. Why doesnt the following way of coding this funciton work?
  2. can we do inplace sorting here with react through the this.setState method?
  3. Performance increase on the two piece of code above?
  sortByAge() {
    console.log("running the sort function")
    this.state.results.sort( function(a,b){
      if (a.dob.age < b.dob.age){
        return -1;
      }else if (a.dob.age > b.dob.age){
        return 1;
      }else{
        return 0;
      }
    })
    console.log(this.state.results);
  };*/
  genderFilter = () =>{
    /* Why doesnt the following functiono work?
    let filteredArr = this.state.results.filter(emp => {
      //console.log(emp.gender);
      emp.gender == "female"; 
    })
    
    console.log(filteredArr);
    this.setState({results: filteredArr});
    */
    let filteredArr = this.state.results.filter(emp => emp.gender == "female"); 
    console.log(filteredArr);
    this.setState({results:filteredArr});
  }
  //last question: Do I need to "refilter" from the original list?
  render() {
    return (
      <div classNme = "container">
        <div className= "row">
          <div className="col-4">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
          
          {this.state.results.map(item => (
            <tr>
              <td>{item.name.first} {item.name.last}</td>
              <td>{item.dob.age} </td>
              <td>{item.gender} </td>
              <td>{item.email} </td>
            </tr>
          ))}
        </table>
        </div>
        <div className="col-2" style={{marginTop:20}}>
            <button className="btn btn-primary" onClick={this.sortByAge}>
              Sort By Age
            </button>{" "}
            <button className="btn btn-danger" onClick={this.genderFilter} style={{marginTop:20}}>
              Filter by female only
            </button>
        </div>
          </div>
      </div>
    );
  }
}

export default SearchResultContainer;

