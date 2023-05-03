<script>
	import Image from '$lib/components/Image.svelte'
</script>

<div class="flex flex-col justify-between items-center bg-blue text-white py-10">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
		<div class="block md:hidden max-h-[360px] w-full">
			<Image
				important
				src="maiyarap_logo.png"
				class="max-h-full w-full object-contain top-0 left-0"
				alt="maiyarap"
			/>
		</div>
		<div
			class="flex flex-col justify-between text-center md:text-start md:items-start mr-10 ml-10 font-serif"
		>
			<div class="grid text-xl gap-10">
				<div
					class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-serif sm:gap-5 xl:gap-0"
				>
					<div class="flex flex-col col-span-full xl:col-span-1">
						<h2 class="text-5xl sm:text-8xl">MAIYARAP</h2>
						<h2 class="text-2xl sm:text-4xl">ORANIENSTRASSE 200, 10999 BERLIN</h2>
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
				<div class="grid grid-cols-1 md:grid-cols-2 text-3xl gap-5">
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
					class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-serif gap-5 md:gap-5 xl:gap-0"
				>
					<h2 class="text-xl font-sans col-span-full xl:col-span-1">
						*no reservations, just walk ins 😊
					</h2>
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
		<div class="hidden md:block max-h-[360px] w-full">
			<Image
				important
				src="maiyarap_logo.png"
				class="max-h-full w-full object-contain top-0 left-0"
				alt="maiyarap"
			/>
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
			<h2 class="font-sans text-5xl bg-orange">gieuw tieuw</h2>
		</div>
	</div>

	<div
		class="flex flex-col justify-between text-center md:text-start font-sans text-3xl gap-5 mb-10"
	>
		<p>If you´ve been to Thailand, you know how much we love our noodle soups.</p>
		<p>
			You´ll see Gieuw Tieuw sold in every corner 24/7 in Bangkok. That´s how great, diverse &
			hearty our noodle soups are.
		</p>
		<p>Here at Maiyarap, our new location in Kreuzberg, we offer only the best of the best.</p>
		<p>Gieuw Tieuw paired with our signature dumplings and unique cocktails🥂</p>
	</div>
	<div class="flex max-h-[540px] w-full mb-5">
		<img src="maiyarap_prev_1.jpg" class=" max-h-full w-full object-cover" alt="maiyarap_noodle" />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
