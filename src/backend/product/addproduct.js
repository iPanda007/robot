import React,{useState}from "react";

const axios =  require('axios');
let titleRef = React.createRef();
let desRef =  React.createRef();
let priceRef = React.createRef();

const AddProduct= ()=>{
    const [file,setFile] = useState()
    const [message,setMessage]= useState();
    const [check,setCheck] = useState(false);
    return <div className="bg-info p-5">
         <h1 className="pl-5"><i className="fa-solid fa-circle-plus"></i>Add Product list</h1>
        {
           check & <div className=" mt-4 alert alert-warning alert-dismissible fade show" role="alert">
            {message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        }
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" ref={titleRef} id="exampleInputEmail1" placeholder="Enter Title" aria-describedby="emailHelp"/>

            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Description</label>
              <textarea className="form-control" ref={desRef}></textarea>

            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Price</label>
                <input type="text" className="form-control" ref={priceRef} id="exampleInputEmail1" placeholder="Enter Price" aria-describedby="emailHelp"/>
            </div>
            <div className="custom-file">
                <input type="file" className="custom-file-input" onChange={(e)=>{setFile({file : e.target.files[0]})} }  id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
            <br/>
            <br/>
            <button type="submit" className="btn btn-primary" onClick={(e=> sendData(file,e,setMessage,setCheck))}><i className="fa-solid fa-circle-plus"></i>Save</button>
        </form>
    </div>

}
function  sendData(file,e,setMessage,setCheck) {
  e.preventDefault();
   let dataValue ={
       title:titleRef.current.value,
       des : desRef.current.value,
       price:priceRef.current.value,
   }
   let formData =    new FormData();
   formData.append("data",JSON.stringify(dataValue));
   formData.append("image",file.file)

 axios({
     url:"http://localhost:8000/product",
     method:'post',
     data:formData
 }).then(function (response) {
      setMessage(response.data.message);
      setCheck(true);
 })
}

export default AddProduct;