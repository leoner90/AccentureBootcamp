<script>
export default { 
  //Logs in user , and returns user and creates session or returns false
  LogIn: async function ( data, method = 'POST') {
    const response = await fetch('http://localhost:3000/login',{
      method,
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      mode: 'cors',
      // include, *same-origin, omit same origin - same port , include all
      credentials: 'include',
      body: JSON.stringify(data)
    });
    
    let ResponseReturn = await response.json();
    return ResponseReturn;
  }
}
</script>
