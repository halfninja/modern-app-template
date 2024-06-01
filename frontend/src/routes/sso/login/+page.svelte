<script lang="ts">
  import Input from '../../../lib/form/Input.svelte';

  export let data;
  export let form;

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log(e);
  }
</script>

<h1>Login</h1>

{#if form?.success}
  <div class="success-flash">
    Logged in successfully as {data?.user}!
  </div>
{/if}

<form method="POST" on:submit={onSubmit}>
  <Input type="text" name="user" placeholder="Your username, e.g. gregor" />
  <button type="submit">LOGIN</button>
</form>