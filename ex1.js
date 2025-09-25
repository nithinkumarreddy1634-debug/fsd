import React from 'react';
class ColourfulCounter extends React.Component{
state={ count:0};
increment=() => this.setState({count:this.state.count +1});
decrement=() => this.setState({count:this.state.count -1});
reset=()=>this.setState({ count: 0});
render(){
return(
<div style={{ textAlign:'center',marginTop:'50px'}}>
<h1 style={{ color:'#333'}}>count:{this.state.count}</h1>
<button
onClick={this.increment}
style={styles.incrementButton}
>
+
</button>
<button
onClick={this.decrement}
style={styles.decrementButton}
>
-
</button>
<buttononClick={this.reset}
style={style.resetButton}
>
Reset
</button>
</div>
);
}
}
const styles={
incrementButton:{
backgroundColor:'#4CAF50',
color:'white',
padding:'10px20px',
margin: '0 5px',
border:'none',
borderRadius:'5px',
fontSize:'16px'.
cursor:'pointer'
},
decrementButton:{
backgroundColor:'#f44336',//Red
color:'white',
padding:'10px 20px'.
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontSize:'16px',
cursor:'pointer'
},
resetButton:{
backgroundColor:'#2196F3',//Blue
color:'white',
padding:'10px 20px'.
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontSize:'16px',
cursor:'pointer'
}
};
resetButton:{
backgroundColor:'#2196F3',
color:'white',
padding:'10px20px',
margin:'0 5px',
border:'none',
borderRadius:'5px',
fontSize:'16px',
cursor:'pointer'
}
};
export default ColorfulCounter;;