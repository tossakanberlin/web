<script lang="ts">
	import { hamburger } from '$lib/store'
	import Modal from '$lib/components/Modal.svelte'
	import { enhance } from '$app/forms'
	import Menu from '$lib/components/hamburger_menu.svelte'
	import { invalidateAll } from '$app/navigation'
	import type { ActionData } from './$types'

	export let form: ActionData
	let showModal = false;
</script>

<Menu />
<div class={$hamburger ? 'hidden' : 'block'}>
	<div class="flex flex-col md:flex-row bg-white text-green pt-10">
		<div class="flex justify-center text-center md:text-start md:ml-10 text-6xl md:text-8xl gap-4">
			<h2>IMPRESSUM</h2>
		</div>
		<div
			class="flex flex-col justify-between items-center text-center md:text-start md:items-start font-sans text-2xl my-10 mx-10 gap-4"
		>
			<div class="font-sans">
				<p>ChaCha Sweet Creations GmbH</p>
				<p>Geschäftsführer: Tanadon Santanviboon</p>
			</div>
			<div class="font-sans">
				<p>Schliemannstrasse 16</p>
				<p>10437 Berlin</p>
				<p>+49 30 81477638</p>
				<p>info@tossakan-berlin.de</p>
			</div>
			<div class="font-sans">
				<p>USt-ID-Nr: 37/250/50947</p>
				<p>Amtsgericht Mitte</p>
			</div>
			<div class="font-sans">
				<p>Ansprechspartner für Webauftritt und Social-Marketing: Bo-kyung Lee</p>
			</div>
		</div>
	</div>

	<div class="flex flex-col md:flex-row bg-green text-white pt-10">
		<div
			class="flex justify-center items-center md:items-start sm:ml-10 text-6xl md:text-8xl md:gap-4"
		>
			<h2>CONTACT</h2>
		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 shadow-none rounded sm:gap-10 md:w-full mx-5 md:mx-10 my-10 items-center md:items-start"
		>
			<form
				class="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-2xl w-full"
				method="POST"
				use:enhance={({ form, data, action, cancel, submitter }) => {
					// `form` is the `<form>` element
					// `data` is its `FormData` object
					// `action` is the URL to which the form is posted
					// `cancel()` will prevent the submission
					// `submitter` is the `HTMLElement` that caused the form to be submitted

					return async ({ result, update }) => {
						showModal = true;
						form.reset();
						await update();
						//console.log(result)
						// `result` is an `ActionResult` object
						// `update` is a function which triggers the logic that would be triggered if this callback wasn't set
					}
				}}
			>
				<div class="grid grid-cols-1 md:grid-cols-2 w-full gap-10 col-span-full">
					<div class="flex flex-col">
						<label for="fname">Name *</label>
						<input
							class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
							id="fname"
							name="fname"
							type="text"
							placeholder="First Name"
							required
						/>
					</div>
					<div class="flex flex-col justify-end">
						<input
							class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
							id="lname"
							name="lname"
							type="text"
							placeholder="Last Name"
							required
						/>
					</div>
				</div>

				<div class="flex flex-col col-span-full">
					<label for="email">Email *</label>
					<input
						class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
						id="email"
						name="email"
						type="email"
						value={form?.email ?? ''}
						required
					/>
				</div>
				<div class="flex flex-col col-span-full">
					<label for="subject">Subject *</label>
					<input
						class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
						id="subject"
						name="subject"
						type="text"
						required
					/>
				</div>
				<div class="grid col-span-full">
					<label for="message">Message *</label>
					<textarea
						class="shadow rounded text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
						id="message"
						name="message"
						rows="3"
						required
					/>
				</div>
				<input
					type="submit"
					class="flex justify-center items-center bg-pink rounded-md col-span-2 py-4 w-[10rem] shadow-none font-serif text-5xl mt-5 sm:mt-0 place-self-center md:place-self-start md:mt-5"
				/>
			</form>
		</div>
	</div>
</div>

<Modal bind:showModal />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
