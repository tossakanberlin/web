<script lang="ts">
	import Image from '$lib/components/Image.svelte'
	import { inview } from 'svelte-inview'
	import { fade, scale } from 'svelte/transition'
	import Menu from '$lib/components/Overlay_menu.svelte'

	let isInView_tossakan: boolean
	let isInView_pic1: boolean
	let isInView_pic2: boolean
	let options = {}
</script>

<Menu />

<div>
	<div class="justify-between items-center bg-green_light text-pink py-10">
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center w-full"
			use:inview={options}
			on:inview_enter={({ detail }) => {
				isInView_tossakan = detail.inView
			}}
		>
			{#if isInView_tossakan}
				<div class="flex md:max-w-[450px] max-h-[270px] md:ml-5" in:fade={{ duration: 500 }}>
					<Image
						width={600}
						height={360}
						src="tossakan/tossakan_logo.png"
						class="max-h-[360px] w-full object-contain top-0 left-0"
						alt="tossakan"
					/>
				</div>
			{:else}
				<div class="h-[360px] md:h-full" />
			{/if}
			<div
				class="flex flex-col justify-between text-center md:text-start md:items-start md:ml-10 font-serif lg:col-span-2"
			>
				<div class="grid text-xl gap-5 w-full">
					<div
						class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-serif gap-10 xl:gap-0"
					>
						<div class="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
							<h2 class="text-5xl sm:text-8xl">TOSSAKAN</h2>
							<h2 class="text-2xl font-sans md:-mt-5">SCLIEMANNSTRASSE 16</h2>
							<h2 class="text-2xl font-sans md:-mt-2">10437 BERLIN</h2>
						</div>
						<div class="flex flex-col md:flex-row lg:flex-col col-span-full lg:col-span-1 justify-center md:justify-start lg:justify-center items-center md:items-start lg:items-center gap-0 md:gap-10 lg:gap-0">
							<a href="menu_tossakan.pdf" target="_blank">
								<button
									type="submit"
									class=" bg-pink hover:bg-[#ff64b9] text-white rounded-md shadow-none font-serif text-2xl mx-5 md:mx-0 lg:mx-5 sm:mt-0 my-5 md:my-0 lg:my-5 py-1 w-[15rem] md:w-[12rem] xl:w-[15rem]"
									>MENU
								</button></a
							>
							{@html `<div class="quandoo-widget-builder" data-config='{"format":"text-button","bgcolor":"#1870C3","txcolor":"#ffffff","round":"yes","position":"","font":"md","merchant":97442,"txt":"Book a Table"}'></div>`}
						</div>
					</div>
					<h2 class="text-4xl font-sans">OPEN DAILY</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 font-sans text-3xl md:text-2xl lg:text-3xl">
						<h2>SUNDAY - THURSDAY</h2>
						<h2>12:00 - 22:00</h2>
						<h2>FRIDAY - SATURDAY</h2>
						<h2>12:00 - 22:30</h2>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 font-sans text-3xl md:text-2xl lg:text-3xl">
						<div class="flex flex-col">
							<h2>KITCHEN CLOSE</h2>
						</div>
						<div class="flex flex-col">
							<h2>21:30</h2>
						</div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 font-sans text-3xl">
						<div class="flex flex-col col-span-full lg:col-span-1">
							<h2 class="text-3xl">TEL: +49 30 81477638</h2>
						</div>
						<div class="flex flex-col mt-10 md:mt-0 place-self-center md:place-self-start lg:place-self-center">
							<a href="/faq?tossakan">
								<button
									type="submit"
									class=" bg-blue_light hover:bg-[#878bef] text-white rounded-md shadow-none font-serif text-2xl lg:mx-5 mt-0 sm:mt-0 md:mt-5 lg:mt-0 place-self-center my-5 py-1 w-[15rem] md:w-[12rem] xl:w-[15rem]"
									>CONTACT US
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="grid justify-center items-center bg-white py-10">
		<div class="flex m-10">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div
					class="text-blue flex flex-col gap-[5rem] text-center md:text-start items-center md:items-start"
				>
					<div class="grid gap-3">
						<div class="font-serif text-4xl">
							<h2>TABLE RESERVATION 🍷</h2>
						</div>
						<ul class="font-sans md:ml-10 text-xl">
							<li>90 mins for groups up to 3</li>
							<li>120 mins for groups up to 4</li>
						</ul>
					</div>
					<div class="grid gap-3">
						<div class="font-serif text-4xl">
							<h2>PLEASE ARRIVE ON TIME ⌚</h2>
						</div>
						<ul class="font-sans md:ml-10 text-xl">
							<li>Tables are held max. 15 min</li>
							<li>After the grace period,</li>
							<li>tables will be given to waiting guests</li>
						</ul>
					</div>
					<div class="grid gap-3">
						<div class="font-serif text-4xl">
							<h2>please keep in mind… 💟</h2>
						</div>
						<ul class="font-sans md:ml-10 text-xl">
							<li>we are a small business with very limited space.</li>
							<li>If there are any changes to your</li>
							<li class="flex flex-row gap-3">
								reservation, <p class="font-bold">please call us</p>
							</li>
						</ul>
					</div>
				</div>

				<div
					class="grid gap-10 text-center md:text-start"
					use:inview={options}
					on:inview_enter={({ detail }) => {
						isInView_pic1 = detail.inView
					}}
				>
					<div class="flex flex-col text-blue mt-[5rem] md:mt-0">
						<div class="grid gap-3">
							<div class="font-serif text-4xl">
								<h2>Special Events & Private Parties</h2>
							</div>
							<ul class="font-sans md:ml-10 text-xl">
								<li>We offer catering service on-site as well as off-site.</li>
								<li>
									From 15 up to 500 guests, our caterings are offered for private functions,
									corporate and cultural events.
								</li>
								<li>Please E-mail us for further information.</li>
								<li class="mt-5">👉info@tossakan-berlin.de</li>
							</ul>
						</div>
					</div>
					{#if isInView_pic1}
						<div in:scale={{ duration: 1500, delay: 100 }}>
							<Image
								width={600}
								height={360}
								src="tossakan/tossakan_prev_1.jpg"
								class="max-h-[360px] w-full object-cover top-0 left-0"
								alt="tossakan/tossakan_drinks"
							/>
						</div>
					{/if}
				</div>

				<div
					class="col-span-full mt-10"
					use:inview={options}
					on:inview_enter={({ detail }) => {
						isInView_pic2 = detail.inView
					}}
				>
					{#if isInView_pic2}
						<div
							class="hidden lg:block max-h-[540px] w-full"
							in:scale={{ duration: 1500, delay: 300 }}
						>
							<Image
								width={600}
								height={540}
								src="tossakan/tossakan_prev_2.jpg"
								class="max-h-[540px] w-full object-cover top-0 left-0"
								alt="tossakan/tossakan_foods"
							/>
						</div>
						<div
							class="block lg:hidden max-h-[540px] w-full"
							in:scale={{ duration: 1500, delay: 300 }}
						>
							<Image
								width={600}
								height={540}
								src="tossakan/tossakan_prev_2m.jpg"
								class="max-h-[540px] w-full object-cover top-0 left-0"
								alt="tossakan/tossakan_foods"
							/>
						</div>
					{:else}
						<div class="h-[600px] md:h-[1000px]" />
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<svelte:head>
	<script
		src="https://s3-eu-west-1.amazonaws.com/quandoo-website/widget-builder/quandoo-widget-builder.js"
	></script>
</svelte:head>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
