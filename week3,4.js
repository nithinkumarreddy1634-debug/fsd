import React,{useState}from 'react';
import'./App.css';
function App(){
const[fontData,setFormData]=useState({
name:",
eamil:",
message:"
});
const handlechange=(e)=>{
const{name,value}=(e)=>{
const{name,value}=e.target;
setFormData(prevState=>({
..prevState,
[name]:value}));
};
const handleSubmit=(e)=>{
e.preventDefault();
alert('Form submitted:\nName:${formData.name}\nEmail:${formData.eamil}\nMessage:
${formData.message}');
setFormData({name:",email:",email:",message:"});
};
return(
<div className="form-counter">
<h2>Contact Form</h2>
<form onSubmit={handleSubmit}>
<label>Name:</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handlehange}
required
/>
<label>Email:</label>
<input
type="email"
name="email"
value={formData.message}
onChange={handleChange}
required
></textarea>
<button type="submit">Submit</buton>
</form>
</div>
);
}
export default App;