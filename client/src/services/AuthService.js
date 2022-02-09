export default {

authLogin : async user => {
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
      return { isAuthenticated: false, user: { username: "", role: "" } };
},

authLogout : async () => {
  const res = await fetch('user/logout');
  return await res.json();
},

checkAuthentication : async ()=>{
  const res = await fetch('/user/authentication');
  if (res.status !== 401)
    return res.json()
  else
    return { isAuthenticated: false, user: { username: "", role: "" } };
},
  
authRegister : async user =>{
  const res = await fetch('user/register', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
},

checkAdmin : async ()=>{
  const res = await fetch('user/admin');
  if (res.status !== 401) {
    return res.json()
  }

  else
    return { message: { msgBody: "UnAuthorized", msgError: true } };
},
    
}
