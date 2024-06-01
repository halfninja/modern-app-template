<script lang="ts">
  export let type: string = 'text';
  export let name: string;
  export let placeholder: string | null;
</script>
<input type={type} name={name} placeholder={placeholder} />
<style>
  input {
    border-radius: 4px;
    padding: 0.3rem;
    border: 1px solid #666;
  }
</style>