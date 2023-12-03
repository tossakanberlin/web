<script lang="ts">
	import { enhance } from '$app/forms'
	import Modal from '$lib/components/Modal.svelte'
	import Menu from '$lib/components/Overlay_menu.svelte'
	import { hamburger } from '$lib/store'
	import type { ActionData } from './$types'

	export let form: ActionData
	$: console.log(form)
	let showModal = false
	let loading = false
</script>

<Menu />
<div>
	<div class="flex flex-col md:flex-row bg-white text-green pt-10">
		<div class="flex justify-center text-center md:text-start md:ml-10 text-6xl md:text-8xl gap-4">
			<h2>IMPRESSUM</h2>
		</div>
		<div
			class="flex flex-col justify-between items-center text-center md:text-start md:items-start font-sans text-2xl my-10 mx-10 gap-4"
		>
			<div class="font-sans">
				<p>ChaCha Sweet Creations GmbH</p>
				<p>Schliemannstrasse 16</p>
				<p>10437 Berlin</p>
			</div>
			<div class="font-sans">
				<p>Vertretungsverechtiger Geschäftsführer: Tanadon Santanaviboon</p>
			</div>
			<div class="font-sans">
				<p>Telefon: +49 30 81477638</p>
				<p>E-Mail: info@tossakan-berlin.de</p>
			</div>
			<div class="font-sans">
				<p>Registergericht: Amtsgericht Charlottenburg</p>
				<p>Registernummer: HRB212253B</p>
				<p>Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE 3725050947
				</p>
			</div>
			<div class="font-sans">
				<p>Inhaltlich Verantwortlicher: Tanadon Santanaviboon</p>
			</div>
		</div>
	</div>

	<!-- <div class="flex flex-col md:flex-row bg-green text-white pt-10">
		<div
			class="flex justify-center items-center md:items-start sm:ml-10 text-6xl md:text-8xl md:gap-4"
		>
			<h2>CONTACT</h2>
		</div>
		<div
			class="grid grid-cols-1 shadow-none rounded sm:gap-10 md:w-full mx-5 md:mx-10 my-10 items-center md:items-start"
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
				<div class="grid grid-cols-2 gap-x-5 md:gap-x-10 items-end">
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
	</div> -->
</div>
{#if loading}
	<div role="status" class="fixed top-1/2 right-1/2">
		<svg
			aria-hidden="true"
			class="inline w-8 h-8 mr-2 text-white animate-spin dark:text-white fill-blue"
			viewBox="0 0 100 101"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
				fill="currentColor"
			/>
			<path
				d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
				fill="currentFill"
			/>
		</svg>
		<span class="sr-only">Loading...</span>
	</div>
{/if}
<Modal bind:showModal />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
