import React,{useState} from 'react';
function SimpleForm(){
const[formData,setFormData]=useState({ name :",email:"});
const[submitted,setSubmitted]=useState(false);
const handleSubmit=(e)=>{
e.preventDefault();
setSubmitted(true);
};
const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};
if(sumbitted){
return(
<div style={{padding:'20px',textAlign:'center'}}>
<h2>Thank you for submitting!</h2>
<p>we recieved your details.</p>
<button
onClick={()=>setSubmitted(false)}
style={{ padding:'8px 16px',marginTop:'10px'}}
>
sumbit Again
</button>
</div>
);
}
return(
<form onSumbit={handleSumbit} style={{ padding:'20px'}}>
<input
type="text"
name="name"
value={formData.name}
onCharge={handleChange}
placehoder="your Name"
required
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<inputtype="email"
name="email"
value={formData.name}
onCharge={handleChange}
placehoder="your Name"
required
style={{display:'block',margin:'10px 0',padding:'8px',width:'100%'}}
/>
<button type="submit"style={{ padding:'8px 16px',marginTop:'10px'}}>
sumbit
</button>
</form>
);
}
export default simpleForm;