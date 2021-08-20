<script>
export default { 
  //checks is user loged in
  IsLogedIn: async function ( method = 'POST') {
    const response = await fetch('http://localhost:3000/IslogedIn',{
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