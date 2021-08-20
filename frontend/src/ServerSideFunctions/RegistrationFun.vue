<script>
export default { 
  //REgistration a user
  Registration: async function (data, method = 'POST') {
    const response = await fetch('http://localhost:3000/reg',{
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
