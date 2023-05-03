<script>
	import Image from '$lib/components/Image.svelte'
</script>

<div class="justify-between items-center bg-green_light text-pink py-10">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
		<Image
			width={600}
			src="tossakan_logo.png"
			class="max-h-[360px] w-full object-contain top-0 left-0"
			alt="tossakan"
		/>
		<div
			class="flex flex-col justify-between text-center md:text-start md:items-start mr-10 ml-10 font-serif"
		>
			<div class="grid text-xl gap-10">
				<div
					class="grid grid-cols-1 md:grid-cols-2 justify-between md:justify-start text-center md:text-start font-serif gap-10 xl:gap-0 "
				>
					<div class="flex flex-col col-span-full xl:col-span-1">
						<h2 class="text-5xl sm:text-8xl">TOSSAKAN</h2>
						<h2 class="text-4xl">SCLIEMANNSTRASSE 16, 10437 BERLIN</h2>
					</div>
					<div class="flex flex-col md:flex-row xl:flex-col col-span-full xl:col-span-1 justify-center items-center lg:items-start xl:items-center">
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
				<h2 class="text-5xl">OPEN DAILY</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 text-3xl">
					<h2>SUNDAY - THURSDAY</h2>
					<h2>12:00 - 22:00</h2>
					<h2>FRIDAY - SATURDAY</h2>
					<h2>12:00 - 22:30</h2>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 text-3xl">
					<div class="flex flex-col">
						<h2>KITCHEN CLOSE</h2>
					</div>
					<div class="flex flex-col">
						<h2>21:00</h2>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 text-3xl gap-5 xl:gap-0">
					<div class="flex flex-col col-span-full xl:col-span-1">
						<h2 class="text-3xl">TEL: +49 30 81477638</h2>
					</div>
					<div class="flex flex-col mt-10 md:mt-0 place-self-center md:place-self-start xl:place-self-center">
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
					<ul class="font-sans md:ml-10 text-2xl">
						<li>9 mins for groups up to 3</li>
						<li>120 mins for groups up to 4</li>
					</ul>
				</div>
				<div class="grid gap-3">
					<div class="font-serif text-5xl">
						<h2>PLEASE ARRIVE ON TIME ⌚</h2>
					</div>
					<ul class="font-sans md:ml-10 text-2xl">
						<li>Tables are held max. 15 min</li>
						<li>After the grace period, tables will be given to waiting guests</li>
					</ul>
				</div>
				<div class="grid gap-3">
					<div class="font-serif text-5xl">
						<h2>please keep in mind… 💟</h2>
					</div>
					<ul class="font-sans md:ml-10 text-2xl">
						<li>we are a small business with very limited space.</li>
						<li>If there are any changes</li>
						<li>(number of guests, time of arrival)</li>
						<li class="font-bold">please inform us via phone call</li>
					</ul>
				</div>
			</div>

			<div class="grid gap-10 text-center md:text-start">
				<div class="flex flex-col text-blue mt-[5rem] md:mt-0">
					<div class="grid gap-3">
						<div class="font-serif text-5xl">
							<h2>Special Events & Private Parties</h2>
						</div>
						<ul class="font-sans md:ml-10 text-2xl">
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
					<Image
						width={600}
						src="tossakan_prev_1.jpeg"
						class="max-h-[360px] w-full object-cover top-0 left-0"
						alt="tossakan_drinks"
					/>
			</div>
				<Image
					width={600}
					src="tossakan_prev_2.jpeg"
					class="max-h-[540px] w-full col-span-full mt-10 object-cover top-0 left-0"
					alt="tossakan_foods"
				/>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
