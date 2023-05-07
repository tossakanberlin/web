<script lang="ts">
	import { Hr, Html, Text } from 'svelte-email';

	export let email: FormDataEntryValue;
    export let name: FormDataEntryValue;
    export let subject: FormDataEntryValue;
    export let message: FormDataEntryValue;
</script>

<Html lang="en">
	<Text>
		Sent from: {email}
	</Text>
	<Hr />
    <Text>
		Sender's name: {name}
	</Text>
	<Hr />
    <Text>
		Subject: {subject}
	</Text>
	<Hr />
    <Text>
		{message}
	</Text>
	<Hr />
	
</Html>