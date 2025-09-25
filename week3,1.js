import React,{useState} from'react';
function Counter(){
cost[count,setCount]=useState(0);
const handleIncrement=()=>{
setCount(count+1);
};
return(
<div style={{textAlign:'center',marginTop:'50px'}}>
<h2>React Counter using useState</h2>
<p style={{fontsize:'24px'}}>count:{count}</p>
<button onClick={handleIncrement}Style={{fontSize:'16px',padding:'10px 20px'}}>
Increment
</button>
</div>
);
}
export default Counter;





