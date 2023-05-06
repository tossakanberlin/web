<script lang="ts">
	import Image from '$lib/components/Image.svelte'
	import { inview } from 'svelte-inview'
	import { fade, scale } from 'svelte/transition'
	import { hamburger } from '$lib/store'
	import { Hamburger } from 'svelte-hamburgers'
	import Menu from '$lib/components/hamburger_menu.svelte'
	let isInView_maiyarap: boolean
	let isInView_pic: boolean
	let options = {}
</script>
<Menu></Menu>	
<div class={$hamburger? "hidden":  "block"}> 
<div class="flex flex-col justify-between items-center bg-blue text-white py-20">
	<div
		class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
		use:inview={options}
		on:inview_enter={({ detail }) => {
			isInView_maiyarap = detail.inView
		}}
	>
		{#if isInView_maiyarap}
			<div in:fade={{ duration: 500 }}>
				<Image
					width={600}
					src="maiyarap_logo.png"
					class="max-h-[360px] w-full object-contain top-0 left-0"
					alt="maiyarap"
				/>
			</div>
		{:else}
			<div class="h-[360px] md:h-full" />
		{/if}
		<div
			class="flex flex-col justify-between text-center md:text-start md:items-start mr-10 ml-10 font-serif"
		>
			<div class="grid text-xl gap-10">
				<div
					class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-serif sm:gap-5 xl:gap-0"
				>
					<div class="flex flex-col col-span-full xl:col-span-1">
						<h2 class="text-5xl sm:text-8xl">MAIYARAP</h2>
						<h2 class="text-2xl font-sans md:-mt-5">ORANIENSTRASSE 200, 10999 BERLIN</h2>
					</div>
					<div
						class="flex flex-col md:flex-row xl:flex-col col-span-full xl:col-span-1 items-center justify-center md:justify-start xl:justify-center"
					>
						<button
							type="submit"
							class=" bg-pink text-white rounded-md shadow-none font-serif text-2xl mx-5 md:mx-0 xl:mx-5 sm:mt-0 my-5 py-1 w-[15rem]"
							>MENU
						</button>
					</div>
					<div class="flex flex-col justify-center items-center" />
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 text-3xl gap-5 font-sans">
					<div>
						<h2>OPEN DAILY</h2>
						<h2>12:00 - 22:00</h2>
					</div>
					<div>
						<h2>KITCHEN CLOSE</h2>
						<h2>21:00</h2>
					</div>
				</div>
				<div
					class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-sans gap-5 md:gap-5 xl:gap-0"
				>
					<h2 class="text-xl col-span-full xl:col-span-1">*no reservations, just walk ins 😊</h2>
					<div
						class="flex flex-col md:flex-row xl:flex-col col-span-full xl:col-span-1 items-center justify-center md:justify-start xl:justify-center"
					>
						<button
							type="submit"
							class=" bg-green_light text-blue rounded-md shadow-none font-serif text-2xl mx-5 md:mx-0 xl:mx-5 sm:mt-0 place-self-center my-5 py-1 px-5 w-[15rem]"
							>CONTACT US
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div
	class="flex flex-col justify-between items-center md:items-start bg-white text-blue py-10 gap-10 mx-10 mt-10"
>
	<div class="flex flex-col place-items-center md:place-items-start text-center md:text-start">
		<h2 class="text-5xl">THAI NOODLE BAR</h2>
		<div class="flex flex-col md:flex-row gap-5">
			<h2 class="font-sans text-5xl">thai noodle soup aka</h2>
			<h2 class="font-sans text-5xl bg-pink text-white">gieuw tieuw</h2>
		</div>
	</div>

	<div
		class="flex flex-col justify-between text-center md:text-start font-sans text-2xl gap-5 mb-10"
	>
		<p>
			If you´ve been to Thailand, you know how much we love our noodle soups. The diverse & hearty
			soup is sold in every corner 24/7 in Bangkok.
		</p>
		<p>Here at Maiyarap, our new location in Kreuzberg, we offer only the best of the best.</p>
		<p>Gieuw Tieuw paired with our signature dumplings and unique cocktails🥂</p>
	</div>
	<div class="w-full">
		<div
			class="grid w-full mb-5 grid-cols-1 md:grid-cols-2 gap-5"
			use:inview={options}
			on:inview_enter={({ detail }) => {
				isInView_pic = detail.inView
			}}
		>
			{#if isInView_pic}
				<div in:scale={{ duration: 1500, delay: 100 }}>
					<Image
						width={600}
						src="maiyarap_pic.jpeg"
						class="max-h-full w-full object-contain top-0 left-0"
						alt="maiyarap"
					/>
				</div>
				<div class="flex flex-col gap-5">
					<div class="md:relative h-[50%] w-full" in:scale={{ duration: 1500, delay: 750 }}>
						<Image
							src="maiyarap_pic1.jpg"
							class="md:absolute h-[100%] w-full object-cover top-0 left-0"
							alt="maiyarap"
						/>
					</div>
					<div class="relative h-[50%] w-full" in:scale={{ duration: 1500, delay: 1250 }}>
						<Image
							src="maiyarap_pic2.jpeg"
							class="md:absolute h-[100%] w-full object-cover top-0 left-0"
							alt="maiyarap"
						/>
					</div>
				</div>
			{:else}
				<div class="h-[500px] md:h-[1000px]" />
			{/if}
		</div>
	</div>
</div>
</div>
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
