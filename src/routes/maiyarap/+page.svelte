<script lang="ts">
	import Image from '$lib/components/Image.svelte'
	import { inview } from 'svelte-inview'
	import { fade, scale } from 'svelte/transition'
	import Menu from '$lib/components/Overlay_menu.svelte'
	let isInView_maiyarap: boolean
	let isInView_pic: boolean
	let options = {}
</script>

<Menu />
<div>
	<div class="flex flex-col justify-between items-center bg-blue text-white py-10">
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center w-full"
			use:inview={options}
			on:inview_enter={({ detail }) => {
				isInView_maiyarap = detail.inView
			}}
		>
			{#if isInView_maiyarap}
				<div class="flex md:max-w-[450px] max-h-[270px] md:ml-5" in:fade={{ duration: 500 }}>
					<Image
						width={600}
						height={360}
						src="maiyarap/maiyarap_logo.png"
						class="max-h-[360px] w-full object-contain top-0 left-0"
						alt="maiyarap"
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
						class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-serif gap-0 md:gap-10 xl:gap-0"
					>
						<div class="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
							<h2 class="text-5xl sm:text-8xl">MAIYARAP</h2>
							<h2 class="text-2xl font-sans md:-mt-5">ORANIENSTRASSE 200</h2>
							<h2 class="text-2xl font-sans md:-mt-2">10999 BERLIN</h2>
						</div>
						<div
							class="flex flex-col md:flex-row lg:flex-col col-span-full lg:col-span-1 justify-center md:justify-start lg:justify-center items-center md:items-start lg:items-center gap-0 md:gap-10 lg:gap-0"
						>
							<a href="menu_maiyarap.pdf" target="_blank">
								<button
									type="submit"
									class="bg-pink hover:bg-[#ff64b9] text-white rounded-md shadow-none font-serif text-2xl mx-5 md:mx-0 lg:mx-5  my-5 md:my-0 lg:my-5 py-1 w-[15rem]"
									>MENU
								</button>
							</a>
						</div>
						<div class="flex flex-col justify-center items-center" />
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 font-sans text-3xl md:text-2xl lg:text-3xl">
						<h2>OPEN DAILY</h2>
						<h2>12:00 - 22:00</h2>
						<h2>KITCHEN CLOSE</h2>
						<h2>21:00</h2>
					</div>
					<h2 class="text-xl col-span-full font-sans lg:col-span-1">*no reservations, just walk ins 😊</h2>
					<div
						class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-sans gap-0 md:gap-5 xl:gap-0"
					>
						
						<div class="flex flex-col col-span-full lg:col-span-1 gap-0">
							<h2 class="text-3xl">TEL: +49 12 34567890</h2>
						</div>
						<div
							class="flex flex-col mt-10 md:mt-0 place-self-center md:place-self-start lg:place-self-center"
						>
							<a href="/faq?maiyarap">
								<button
									type="submit"
									class=" bg-blue_light hover:bg-[#878bef] text-white rounded-md shadow-none font-serif text-2xl lg:mx-5 sm:mt-0 place-self-center my-5 py-1 w-[15rem]"
									>CONTACT US
								</button>
							</a>
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
			class="flex flex-col justify-between text-center md:text-start font-sans text-xl gap-5 mb-10"
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
							src="maiyarap/maiyarap_pic1.jpg"
							class="max-h-full w-full object-contain top-0 left-0"
							alt="maiyarap"
						/>
					</div>
					<div class="flex flex-col gap-5">
						<div class="md:relative h-[50%] w-full" in:scale={{ duration: 1500, delay: 750 }}>
							<Image
								src="maiyarap/maiyarap_pic2.jpg"
								class="md:absolute h-[100%] w-full object-cover top-0 left-0"
								alt="maiyarap"
							/>
						</div>
						<div class="relative h-[50%] w-full" in:scale={{ duration: 1500, delay: 1250 }}>
							<Image
								src="maiyarap/maiyarap_pic3.jpg"
								class="md:absolute h-[100%] w-full object-cover top-0 left-0"
								alt="maiyarap"
							/>
						</div>
					</div>
				{:else}
					<div class="h-[1000px]" />
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
