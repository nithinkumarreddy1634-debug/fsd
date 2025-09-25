import React from'react';
import UserGreeting from'./USserGreting';
import UserInfo from'./UserInfo';
import'./App.css';
function App(){
const user={
name:'NITHIN',
age:20
};
return(
<div className="app-container">
<div className="card">
<h2>sharing Data Using Props</h2>
<UserGreeting name={user.name}/>
<UserInfo name={User.name}age={user.age}/>
</div>
</div>
);
}
export default App;