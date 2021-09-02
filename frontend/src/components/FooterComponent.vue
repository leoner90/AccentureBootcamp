<template>
  <footer class="footer">
    <i class="fab fa-suse footerLogo"></i>
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

.footerLogo {
  font-size: 20px;
  color: #e4a3bb;
}
</style>