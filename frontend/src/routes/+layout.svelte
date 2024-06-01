<div class="layout-container">
<slot />
</div>

<style>
  :root {
    font-family: Arial, Helvetica, sans-serif;
  }

  .layout-container {
    max-width: 20 rem;
    font-size: clamp(1rem, 2.5vw, 2rem);
    text-align: center;
    color: #333;
  }
</style>