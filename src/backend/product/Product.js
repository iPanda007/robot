import React, { Component } from 'react'
const axios = require('axios')
export class Product extends Component {

 constructor() {
     super();
   this.getData()
 }

 state = {data:[]}

 getData(){
     axios.get('http://127.0.0.1:8000/products').then(response=>{
         this.setState({data:response.data})
     });
 }

  render() {


    return (
      <div>
          <div>
           <div>
               <h1 className="pl-5"><i className="fa-solid fa-circle-plus"></i>Product list</h1>
              <table className="table table-dark ">
                  <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>

                  </tr>
                  </thead>
                  <tbody>

                  {
                      this.state.data.map((e)=>{
                       return  <tr>
                              <th >1</th>
                              <td>{e.title}</td>
                           <td>{e.description}</td>
                            <td>{e.price}</td>
                              <td>
                                  <a href=""><i className="fas fa-trash text-white mr-3" ></i></a>
                                  <a href={"/edit/"+e._id+"/edit"}><i className="fas fa-edit text-white"></i></a>
                              </td>

                          </tr>
                      })
                  }


                  </tbody>
              </table>
          </div>
    </div>
      </div>
    )
  }
}

export default Product
