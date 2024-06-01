<script lang="ts">
	import { onMount } from "svelte";

  let heading = ' ';

  onMount(async function() {
    console.log('Mounting heading...');
    const response = await fetch('/api');
    const data = await response.json();
    heading = data.message;
  });
</script>

<h1>{heading}</h1>
<p>You should see a heading above, which is fetched from the backend.</p>
