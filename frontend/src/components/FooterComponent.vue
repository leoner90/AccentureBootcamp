<template>
  <footer class="footer">
    <i class="fab fa-suse" style="color: #e4a3bb;"></i>
  </footer>
</template>

<script>
export default { 
  name: 'Header',
  props: {},
}
</script>

 <style scoped>
.footer {
  text-align: center; 
  position: absolute;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  background: #333;
  width: 100%;
}
</style>