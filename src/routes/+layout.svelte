<script>
	import { hamburger } from '$lib/store'
	import Image from '$lib/components/Image.svelte'
	import { Hamburger } from 'svelte-hamburgers'
	import '../app.css'
</script>


<svelte:head>
	<title>Tossakan Berlin</title>
	<meta name="description" content="Welcome to Tossakan Berlin. Berlin's most authentic Neo-Thai Cuisine. We keeps things real; the spice , the heat." />
</svelte:head>

<nav>
	<div
		class="bg-blue py-5 px-10 flex flex-row justify-between font-serif text-white text-xl md:text-2xl lg:text-3xl"
	>
		<ul class="flex-1 justify-start mr-auto md:flex hidden items-center">
			<li><a href="/" class="m-3 bg-growing-underline">Home</a></li>
			<li><a href="/about-us" class="m-3 bg-growing-underline">About us</a></li>
			<li><a href="/tossakan" class="m-3 bg-growing-underline">Tossakan</a></li>
			<li><a href="/maiyarap" class="m-3 bg-growing-underline">Maiyarap</a></li>
		</ul>
		<div class="max-h-[100px] max-w-[120px]">
			<a href="/"
				><Image
					src="/tosxmai_logo.png"
					class="w-full h-full object-contain"
					alt="tossakan"
					important
					width={120}
				/></a
			>
		</div>
		<div class="flex-1 flex justify-end ml-auto items-center">
			<h2 class="hidden md:inline-block">
				<a href="/faq" class="m-3 bg-growing-underline">FAQ & Contact</a>
			</h2>
			<h2 class="hidden md:inline-block">
				<a
					href="https://www.instagram.com/tossakanberlin/"
					target="_blank"
					rel="noreferrer"
					class="m-3"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-8 h-8 inline-block"
						><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
							d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
						/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
					>
				</a>
			</h2>
			<div class="md:hidden inline-block">
				<Hamburger bind:open={$hamburger} --color="white" />
			</div>
		</div>
	</div>
</nav>

<slot />

<footer>
	<div class="bg-blue py-5 font-serif text-white md:text-xl md:px-2">
		<div class="mx-6 space-y-5">
			<div class="text-center md:text-left">
				<p class="text-5xl italic">OUR LOCATIONS</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 text-2xl md:gap-0 gap-4">
				<div class="flex flex-col justify-between items-center md:items-start gap-4">
					<div>
						<ul class="text-center">
							<li>TOSSAKAN</li>
							<li>SCHLIEMANNSTR.16</li>
							<li>10437 BERLIN</li>
						</ul>
					</div>
					<div>
						<ul class="text-center">
							<a href="https://www.instagram.com/tossakanberlin/" target="_blank" rel="noreferrer">
								<li>@TOSSAKANBERLIN</li>
							</a>
						</ul>
					</div>
				</div>

				<div class="flex flex-col justify-between items-center">
					<div>
						<ul class="text-center">
							<li>MAIYARAP</li>
							<li>ORANIENSTR. 200</li>
							<li>10999 BERLIN</li>
						</ul>
					</div>
					<div>
						<ul class="text-center">
							<a href="https://www.instagram.com/maiyarapberlin/" target="_blank" rel="noreferrer">
								<li>@MAIYARAPBERLIN</li>
							</a>
						</ul>
					</div>
				</div>

				<div class="flex flex-col justify-between items-center md:items-end">
					<div class="flex flex-col justify-between h-full">
						<div>
							<ul class="text-center">
								<li>TUKTUK</li>
								<li>FOLLOW US ON INSTRAGRAM</li>
								<li>FOR UPCOMING EVENTS</li>
							</ul>
						</div>
						<div>
							<ul class="text-center">
								<a
									href="https://www.instagram.com/tuktukbytossakan/"
									target="_blank"
									rel="noreferrer"
								>
									<li>@TUKTUKBYTOSSAKAN</li>
								</a>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="font-sans text-2xl flex flex-row justify-between text-blue_light">
				<p class="">@ 2021 Tossakan Berlin</p>
				<a href="/datenschutz" class="italic place-self-end text-end">Privacy Policy</a>
			</div>
		</div>
	</div>

	<link rel="stylesheet" href="/cbanner.css" />

	<script type="module" src="https://cdn.jsdelivr.net/npm/@beyonk/gdpr-cookie-consent-banner/dist/index.js"></script>
	<div class="text-lg">
	<cookie-consent-banner cookie-name="foo" heading="" visible="true" 
	description="We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. By clicking accept, you consent to our privacy policy & use of cookies." />
	</div>
</footer>
