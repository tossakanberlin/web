<script lang="ts">
	import { enhance } from '$app/forms'
	import Modal from '$lib/components/Modal.svelte'
	import Menu from '$lib/components/hamburger_menu.svelte'
	import { hamburger } from '$lib/store'
	import type { ActionData } from './$types'

	export let form: ActionData
	$: console.log(form)
	let showModal = false
	let loading = false
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
			class="grid grid-cols-1  shadow-none rounded sm:gap-10 md:w-full mx-5 md:mx-10 my-10 items-center md:items-start"
		>
			<form
				class=" text-2xl w-full space-y-4"
				method="POST"
				use:enhance={({ form, data, action, cancel }) => {
					// `form` is the `<form>` element
					// `data` is its `FormData` object
					// `action` is the URL to which the form is posted
					// `cancel()` will prevent the submission
					// `submitter` is the `HTMLElement` that caused the form to be submitted
					loading = true
					return async ({ result, update }) => {
						loading = false
						if (result.type == 'success') {
							showModal = true
							form.reset()
						}

						await update()
						//console.log(result)
						// `result` is an `ActionResult` object
						// `update` is a function which triggers the logic that would be triggered if this callback wasn't set
					}
				}}
			>
				<div class="grid grid-cols-2 gap-x-10 items-end">
					<div class="flex flex-col">
						<label for="fname">Name *</label>
						<input
							class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none transition-all"
							id="fname"
							name="fname"
							type="text"
							placeholder="First Name"
							value={form?.fname ?? ''}
							disabled={loading}
						/>
					</div>
					<div class="">
						<input
							class="w-full shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none transition-all"
							id="lname"
							name="lname"
							type="text"
							value={form?.lname ?? ''}
							placeholder="Last Name"
							disabled={loading}
						/>
					</div>
					<div class="-mt-2">
						{#if form?.errors?.fname}
							<span class="text-sm -mt-4 inline-block">{form?.errors?.fname}</span>
						{/if}
					</div>
					<div class="-mt-2">
						{#if form?.errors?.lname}
							<span class="text-sm -mt-4 inline-block">{form?.errors?.lname}</span>
						{/if}
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
						disabled={loading}
					/>
					<div class="-mt-2">
						{#if form?.errors?.email}
							<span class="text-sm -mt-4 inline-block">{form?.errors?.email}</span>
						{/if}
					</div>
				</div>
				<div class="flex flex-col col-span-full">
					<label for="subject">Subject *</label>
					<input
						class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
						id="subject"
						name="subject"
						type="text"
						value={form?.subject ?? ''}
						disabled={loading}
					/>
					<div class="-mt-2">
						{#if form?.errors?.subject}
							<span class="text-sm -mt-4 inline-block">{form?.errors?.subject}</span>
						{/if}
					</div>
				</div>
				<div class="grid col-span-full">
					<label for="message">Message *</label>
					<textarea
						class="shadow rounded text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
						id="message"
						name="message"
						rows="3"
						value={form?.message?.toString() ?? ''}
						disabled={loading}
					/>

					<div class="-mt-2">
						{#if form?.errors?.message}
							<span class="text-sm -mt-4 inline-block">{form?.errors?.message}</span>
						{/if}
					</div>
				</div>
				<button
					type="submit"
					disabled={loading}
					class="flex justify-center items-center bg-pink rounded-md col-span-2 py-3 px-6 shadow-none font-serif mt-5 sm:mt-0 place-self-center md:place-self-start md:mt-5"
				>
					{loading ? `Submitting` : 'Submit'}
				</button>
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
