<template>
  <div class="footer-copyright">
    <div>
      © 2021 Sebastian Hofer
      <span class="links">
        <a
          href="https://codesandbox.io/s/vue2-watch-this-qky4k"
          target="_blank"
        >
          CodeSandbox
        </a>
        |
        <a href="https://github.com/kn0ch3n/vue2-watch-this" target="_blank">
          Github
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-copyright {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 0.2rem 1rem;
  background-color: black;
  border-top: 1px solid #333;
}

.links {
  float: right;
}
</style>