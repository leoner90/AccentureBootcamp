<script>
export default { 
  //log outs a user by deleting session
  LogOut: async function ( data, method = 'POST') {
    const response = await fetch('http://localhost:3000/logOut',{
      method,
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      mode: 'cors',
      // include, *same-origin, omit same origin - same port , include all
      credentials: 'include',
    });
    
    let ResponseReturn = await response.json();
    return ResponseReturn;
  }
}
</script>
