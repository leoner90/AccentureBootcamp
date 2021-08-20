<script>
export default { 
  //Get last 3 blogs from db , For home page
  getLastBlogs: async function (data, method = 'GET') {
    const response = await fetch('http://localhost:3000/getLastBlogs',{
      method,
    });
    let ResponseReturn = await response.json();
    return ResponseReturn;
  } 
}
</script>