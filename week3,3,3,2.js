import React from 'react';
function UserInfo({name,age}){
	return(
<p className="info">
USer<strong>{name}</strong>is <strong>{age}</strong>years old.
</p>
);
}
export default UserInfo;