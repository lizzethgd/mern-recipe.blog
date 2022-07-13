export default {
logIn : async user => {
  const res = await fetch('user/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status !== 401)
      return res.json();
    else
      return { isAuthenticated: false, user: { username: ""} };
},

logOut : async () => {
  const res = await fetch('user/logout');
   localStorage.clear();
  return await res.json();
},

getAuthentication : async ()=>{
  const res = await fetch('user/authenticated');
  if (res.status !== 401)
    return res.json();
  else
    return { isAuthenticated: false, user: { username: "" } };
},
  
logUp : async user =>{
  const res = await fetch('user/register', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
},

getAdmin : async ()=>{
  const res = await fetch('user/admin');
  if (res.status !== 401) {
    return res.json()
  }

  else
    return { message: { msgBody: "UnAuthorized", msgError: true } };
},
    
}
