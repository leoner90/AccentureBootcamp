<script>
export default { 
  //GET All blogs from server , and if user post data is true then return only specific user blogs(to fix this!)
  getdata: async function (data, method = 'POST') {
    const response = await fetch('http://localhost:3000/getAllBlogs',{
      method,
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      mode: 'cors',
      // include, *same-origin, omit same origin - same port , include all
      credentials: 'include',
      body: JSON.stringify({UserPosts:data})
    });
    let ResponseReturn = await response.json();
    return ResponseReturn;
  } 
}
</script>