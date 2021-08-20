<script>
export default { 
  //Get blog by id
  getBlog: async function (data, method = 'POST') {
    const response = await fetch('http://localhost:3000/getBlogByID',{
      method,
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      mode: 'cors',
      // include, *same-origin, omit same origin - same port , include all
      credentials: 'include',
      body: JSON.stringify({id : data})
    });
    let ResponseReturn = await response.json();
    return ResponseReturn;
  } 
}
</script>