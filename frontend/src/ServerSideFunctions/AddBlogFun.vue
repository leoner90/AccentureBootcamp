<script>
export default { 
  //Save New Blog To DB return erros or sussecc msg
  addNewBlog: async function (data, method = 'POST') {
    const response = await fetch('http://localhost:3000/AddBlog',{
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
