<script lang="ts">
	import Image from '$lib/components/Image.svelte'
	import { inview } from 'svelte-inview'
	import { fade, scale } from 'svelte/transition'

	let isInView_tossakan: boolean
	let isInView_pic1: boolean
	let options = {}
</script>

<div class="justify-between items-center bg-green_light text-pink py-10">
	<div
		class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
		use:inview={options}
		on:inview_change={({ detail }) => {
			isInView_tossakan = detail.inView
		}}
	>
		{#if isInView_tossakan}
			<div transition:fade={{ duration: 500 }}>
				<Image
					width={600}
					src="tossakan_logo.png"
					class="max-h-[360px] w-full object-contain top-0 left-0"
					alt="tossakan"
				/>
			</div>
		{/if}
		<div
			class="flex flex-col justify-between text-center md:text-start md:items-start mr-10 ml-10 font-serif"
		>
			<div class="grid text-xl gap-10">
				<div
					class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-serif gap-10 xl:gap-0"
				>
					<div class="flex flex-col col-span-full xl:col-span-1">
						<h2 class="text-5xl sm:text-8xl">TOSSAKAN</h2>
						<h2 class="text-2xl font-sans">SCLIEMANNSTRASSE 16, 10437 BERLIN</h2>
					</div>
					<div
						class="flex flex-col md:flex-row xl:flex-col col-span-full xl:col-span-1 justify-center items-center lg:items-start xl:items-center"
					>
						<button
							type="submit"
							class=" bg-pink text-white rounded-md shadow-none font-serif text-2xl mx-5 lg:mx-0 xl:mx-5 sm:mt-0 my-5 py-1 w-[15rem]"
							>MENU
						</button>
						<button
							type="submit"
							class=" bg-pink text-white rounded-md shadow-none font-serif text-2xl mx-5 sm:mt-0 my-5 py-1 w-[15rem]"
							>BOOK A TABLE
						</button>
					</div>
				</div>
				<h2 class="text-5xl font-sans">OPEN DAILY</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 font-sans text-3xl">
					<h2>SUNDAY - THURSDAY</h2>
					<h2>12:00 - 22:00</h2>
					<h2>FRIDAY - SATURDAY</h2>
					<h2>12:00 - 22:30</h2>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 font-sans text-3xl">
					<div class="flex flex-col">
						<h2>KITCHEN CLOSE</h2>
					</div>
					<div class="flex flex-col">
						<h2>21:00</h2>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 font-sans text-3xl gap-5 xl:gap-0">
					<div class="flex flex-col col-span-full xl:col-span-1">
						<h2 class="text-3xl">TEL: +49 30 81477638</h2>
					</div>
					<div
						class="flex flex-col mt-10 md:mt-0 place-self-center md:place-self-start xl:place-self-center"
					>
						<button
							type="submit"
							class=" bg-blue_light text-white rounded-md shadow-none font-serif text-2xl xl:mx-5 sm:mt-0 place-self-center my-5 py-1 w-[15rem]"
							>CONTACT US
						</button>
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
					<div class="font-serif text-5xl">
						<h2>TABLE RESERVATION 🍷</h2>
					</div>
					<ul class="font-sans md:ml-10 text-xl">
						<li>9 mins for groups up to 3</li>
						<li>120 mins for groups up to 4</li>
					</ul>
				</div>
				<div class="grid gap-3">
					<div class="font-serif text-5xl">
						<h2>PLEASE ARRIVE ON TIME ⌚</h2>
					</div>
					<ul class="font-sans md:ml-10 text-xl">
						<li>Tables are held max. 15 min</li>
						<li>After the grace period, tables will be given to waiting guests</li>
					</ul>
				</div>
				<div class="grid gap-3">
					<div class="font-serif text-5xl">
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
				on:inview_change={({ detail }) => {
					isInView_pic1 = detail.inView
				}}
			>
				<div class="flex flex-col text-blue mt-[5rem] md:mt-0">
					<div class="grid gap-3">
						<div class="font-serif text-5xl">
							<h2>Special Events & Private Parties</h2>
						</div>
						<ul class="font-sans md:ml-10 text-xl">
							<li>We offer catering service on-site as well as off-site.</li>
							<li>
								From 15 up to 500 guests, our caterings are offered for private functions, corporate
								and cultural events.
							</li>
							<li>Please E-mail us for further information.</li>
							<li class="mt-5">👉info@tossakan-berlin.de</li>
						</ul>
					</div>
				</div>
				{#if isInView_pic1}
					<div in:scale={{ duration: 1500 }} out:fade>
						<Image
							width={600}
							src="tossakan_prev_1.jpeg"
							class="max-h-[360px] w-full object-cover top-0 left-0"
							alt="tossakan_drinks"
						/>
					</div>
				{/if}
			</div>
			{#if isInView_pic1}
				<div class= "max-h-[540px] w-full col-span-full" in:scale={{ duration: 1500 }} out:fade>
					<Image
						width={600}
						src="tossakan_prev_2.jpeg"
						class="max-h-full w-full mt-10 object-cover top-0 left-0"
						alt="tossakan_foods"
					/>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
