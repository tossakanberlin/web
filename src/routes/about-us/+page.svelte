<script lang="ts">
	import Image from '$lib/components/Image.svelte'
	import { inview } from 'svelte-inview'
	import { fly, fade } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { hamburger } from '$lib/store'
	import Menu from '$lib/components/Overlay_menu.svelte'
	let isInView_panel1: boolean
	let isInView_tossakan: boolean
	let isInView_maiyarap: boolean
	let isInView_tuktuk: boolean
	let options = {}
	let defaultSlideParameters = {
		delay: 250,
		duration: 1000,
		x: '-100vw',
		y: 0,
		opacity: 0.5,
		easing: quintOut
	}
</script>

<Menu />
<div class={$hamburger ? 'hidden' : 'block'}>
	<div class="justify-between items-center bg-white text-blue py-10 mx-6">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mx-6">
			<div
				class="flex flex-col text-blue_light justify-center md:items-center h-full text-4xl sm:text-7xl md:text-5xl lg:text-6xl xl:text-[5rem] px-5 pb-8"
			>
				<div class="flex flex-col text-center md:text-justify">
					<h2 class="">IT DOESN'T</h2>
					<div class="flex flex-row justify-center md:justify-between gap-10 md:gap-0">
						<h2 class="self-start">GET</h2>
						<h2 class="self-end">MORE</h2>
					</div>
					<h2 class="tracking-wider">AUTHENTIC</h2>
					<div class="flex flex-row justify-center md:justify-between gap-10 md:gap-0">
						<h2>THAN</h2>
						<h2>THIS</h2>
					</div>
				</div>
			</div>
			<div class="grid md:col-span-2 gap-10 sm:gap-4 mx-6 md:text-start text-center">
				<h2 class="font-serif text-5xl">
					NEO THAI CUISINE: IT’S MORE THAN JUST PAD THAI AND CURRY
				</h2>
				<p class="font-sans text-xl">
					It all started with Chef Tanadon Santanaviboon, aka Don, 2nd generation Thai-German,
					following his father´s footsteps to become a cook. Though starting in fine dining, Don
					realized his true passion lied in his ultimate comfort food, Thai Cuisine. He decided it
					was time to introduce the Berliners a New Generation of Thai Cuisine.
				</p>
				<p class="font-sans text-xl">
					Tossakan initially opened it´s doors in Charlottenburg, West Berlin. In 2022 reopened in
					Schliemannstr. 16, Prenzlauerberg, East Berlin.
				</p>
				<p class="font-sans text-xl">
					Bangkok is not just a beloved tourist destination for night life. It stands out for being
					a world-known culinary capital. A new generation of passionate cooks have been
					rediscovering their love and interest in traditional recipes and showing off their skills
					to deliver a unique Thai experience.
				</p>
				<p class="font-sans text-xl">
					At Tossakan, our main goal is to introduce a wider range of Thai Cuisine & our
					appreciation to our culture.
				</p>
			</div>
			<div
				use:inview={options}
				on:inview_enter={({ detail }) => {
					isInView_panel1 = detail.inView
				}}
				class="md:col-span-3 font-serif text-5xl mx-6 place-self-center md:place-self-start"
			>
				{#if isInView_panel1}
					<div class="flex text-center md:text-start" in:fly={defaultSlideParameters} out:fade>
						<h2 class="px-2 py-2 bg-blue text-white">We keep things real : the spice the heat</h2>
					</div>
				{/if}
			</div>
			<div
				class="grid md:col-span-3 font-sans text-center md:text-start mx-5 md:mx-[10rem] gap-10 sm:gap-4"
			>
				<p class="text-xl">
					Following our traditional home cooking recipes with a modern touch, Tossakan offers a
					unique culinary experience. Our signature home made dumplings and Chef´s Choice menu stand
					out for it´s most hearty flavors.
				</p>
				<p class="italic text-xl xl:text-2xl">
					Here, we don´t adjust to cheap standards. This is how we THAI do. We love our food and our
					culture
				</p>
			</div>
		</div>
	</div>

	<div class="justify-between bg-blue_light text-white py-10">
		<div
			class="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-[10rem] items-start mx-6 lg:items-center"
			use:inview={options}
			on:inview_enter={({ detail }) => {
				isInView_tossakan = detail.inView
			}}
		>
			{#if isInView_tossakan}
				<div class="block md:hidden" in:fade={{ duration: 750, delay: 100 }}>
					<Image
						width={600}
						height={360}
						src="tossakan/tossakan_logo.png"
						class="block md:hidden max-h-[360px] w-full object-contain top-0 left-0"
						alt="tossakan"
					/>
				</div>
			{/if}
			<div class="relative md:col-span-2 flex w-full h-full items-center">
				{#if isInView_tossakan}
					<div
						class="absolute flex max-h-[380px] max-w-[450px] md:z-10 col-span-2 my-5 -left-[5%]"
						in:fade={{ duration: 750, delay: 100 }}
					>
						<Image
							width={540}
							height={425}
							src="tossakan/tossakan_logo_half.png"
							class="hidden md:block max-h-full w-full object-contain"
							alt="tossakan_half"
						/>
					</div>
				{:else}
					<div class="h-[400px]" />
				{/if}
				{#if isInView_tossakan}
					<div
						class="flex flex-col text-center md:text-end xl:text-start self-start gap-5 md:ml-[18rem]"
					>
						<div
							class="flex flex-col bg-blue font-serif h-min text-5xl sm:text-6xl md:text-5xl xl:text-7xl 2xl:text-9xl px-8 py-5 gap-8 items-center md:items-start"
							in:fly={defaultSlideParameters}
							out:fade
						>
							<h2 class="flex flex-1">THE FEARLESS</h2>
							<h2 class="flex flex-1">THE FIERCEST</h2>
						</div>

						<div
							class="grid md:col-span-2 text-2xl xl:text-3xl font-sans px-5 text-center md:text-start xl:text-start grow-0"
							in:fade={{ duration: 1250, delay: 1000 }}
						>
							<p>
								Inspired by the legendary Great Giant Tossakan, we fearlessly embrace ourselves, our
								Thai culture.
							</p>
						</div>
					</div>
				{:else}
					<div class="h-[500px]" />
				{/if}
			</div>
			<div class="flex flex-col justify-between md:justify-start">
				<ul class="text-center md:text-left text-4xl xl:text-[2.5rem] font-serif mb-10">
					<li>THE DEMON KING</li>
					<li>THE RULER OF RAKASAS</li>
					<li>THE IMMORTAL GIANT</li>
				</ul>
				<div class="flex flex-col items-center md:item-start text-center md:text-start font-serif">
					<div
						class="flex flex-col justify-center md:justify-start md:place-self-start text-center md:text-justify"
					>
						<p class="text-4xl md:text-5xl lg:text-5xl xl:text-6xl -mb-2">NO SUSHI NO PHO</p>
						<div
							class="flex flex-row text-4xl md:text-3xl lg:text-3xl xl:text-4xl justify-between gap-3 md:gap-0"
						>
							<p>NO</p>
							<p>ENTEKROSS</p>
							<p>SÜßSAUER</p>
						</div>
						<!-- <p class="text-4xl md:text-3xl lg:text-4xl justify-between">NO ENTEKROSS SÜßSAUER</p> -->
					</div>
					<div class="flex text-7xl sm:text-8xl md:text-6xl xl:text-8xl 2xl:text-8xl md:w-full">
						<h2 class="px-2 bg-white text-pink">JUST THAI</h2>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="justify-between items-center bg-green_light text-blue py-10">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 md:py-12">
			<div
				class="flex flex-col justify-between text-center md:text-start md:items-start mr-10 ml-10"
			>
				<div class="font-serif text-5xl mb-3">
					<h2>EXCUSE ME?</h2>
					<h2>YOU'VE NEVER TRIED GIEUW TIEUW?</h2>
				</div>

				<div class="grid font-sans text-xl gap-4">
					<p>
						Everybody has their go-to comfort food. For us, definately our noodle soups: Gieuw
						Tieuw.
					</p>
					<p>Ticking all the key values: nutritional, cultural and medical.</p>
					<p>Packed with herbs and spices, Gieuw Tieuw is the most hearty soup.</p>
					<p>
						At our newly opened MAIYARAP, our unique thai noodle bar, you´ll fall in love with Gieuw
						Tieuw.
					</p>
					<p>
						Here we offer the best of the best, perfectly paired with our signature dumplings and
						unique cocktails.
					</p>
				</div>
			</div>
			<div
				class="md:relative flex justify-center md:justify-between items-center lg:items-start m-5 md:m-0"
				use:inview={options}
				on:inview_enter={({ detail }) => {
					isInView_maiyarap = detail.inView
				}}
			>
				{#if isInView_maiyarap}
					<div in:fade={{ duration: 1000 }}>
						<Image
							width={600}
							height={360}
							src="maiyarap/maiyarap_logo.png"
							class="xl:absolute max-h-[360px] md:max-h-full w-full object-contain"
							alt="maiyarap"
						/>
					</div>
				{:else}
					<div class="h-[400px]" />
				{/if}
			</div>
		</div>
	</div>

	<div class="justify-between items-center bg-pink_light text-blue py-20">
		<div
			class="grid grid-cols-1 md:grid-cols-3 gap-5 mx-6"
			use:inview={options}
			on:inview_enter={({ detail }) => {
				isInView_tuktuk = detail.inView
			}}
		>
			{#if isInView_tuktuk}
				<div class="md:relative place-self-center xl:place-self-auto mx-5 xl:mx-0" in:fade={{ duration: 1000 }}>
					<Image
						width={500}
						height={360}
						src="tossakan/tuktuk_logo.png"
						class="xl:absolute max-h-[360px] md:max-h-full w-full object-contain top-0 left-0 mb-10 md:mb-0"
						alt="tuktukbytossakan"
					/>
				</div>
			{:else}
				<div class="h-[400px]" />
			{/if}
			<div
				class="flex flex-col justify-between md:justify-start md:col-span-2 items-center md:items-start"
			>
				<div
					class="flex flex-row font-serif gap-4 mb-5"
				>
					<h2 class="text-4xl sm:text-5xl md:text-8xl self-end">TUK TUK</h2>
					<h2 class="text-2xl sm:text-4xl md:text-5xl self-end md:mb-[0.55rem]">OUR POP UP EVENT</h2>
				</div>
				<div
					class="flex flex-col justify-between text-center md:text-start font-sans text-xl gap-4"
				>
					<p>Every once in a while, we all crave for that different something.</p>
					<p>Something different, something new, but THAI?</p>
					<p>Follow us on Instagram @tuktukbytossakan for upcoming pop up events.</p>
					<p>
						Whether some nostalgic Thai streetfood, dessert or even some unique Thai fusion
						fingerfoods, we got you covered.
					</p>
					<div
						class="flex flex-1 text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif mt-5 md:place-self-start place-content-center items-center"
					>
						<h2 class="px-2 r-5 bg-white text-blue uppercase">stay curious, stay excited</h2>
						<h2 class="ml-2">💚💛💙</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
