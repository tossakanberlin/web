<script>

	import '../app.css';
	import { Hamburger } from 'svelte-hamburgers';
	  let open = false;
	
</script>

<nav class="bg-blue py-5 px-10 flex flex-row justify-between font-serif text-xl text-white  md:text-2xl md:px-10 ">
	
	<ul class="flex-1 justify-start mr-auto md:flex hidden items-center">
		<li>
			<a href="/" class="m-3 bg-growing-underline">Home</a>
		</li>
		<li><a href="/about-us" class="m-3 bg-growing-underline">About us</a></li>
		<li><a href="/tossakan" class="m-3 bg-growing-underline">Tossakan</a></li>
		<li><a href="/maiyarap" class="m-3 bg-growing-underline">Maiyarab</a></li>
	</ul>
	<div class="max-h-[100px] max-w-[120px]">
		<a href='/'><img src='/tosxmai_logo.png' class="w-full h-full object-contain" alt="tossakan"></a>
	</div>
	<div class="flex-1 flex justify-end ml-auto items-center  ">
		<h2><a href="/faq" class="m-33 bg-growing-underline">FAQ and Contact</a></h2>
		<h2>
			<a href="https://www.instagram.com/tossakanberlin/" target="_blank" class="m-3">
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
		<div class='md:hidden inline-block' >
			<Hamburger
   			 bind:open
    		--color="white" />


		</div>
		

	</div>
</nav>



<slot />

<footer class="bg-blue py-5 font-serif text-white md:text-xl md:px-2">
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
						<li>TEL:030-81477638</li>
						<li>OPEN DAILY:12-22</li>
					</ul>
				</div>
				<div>
					<ul class="text-center">
						<li>@TOSSAKANBERLIN</li>
					</ul>
				</div>
			</div>

			<div class="flex flex-col justify-between items-center">
				<div>
					<ul class="text-center">
						<li>MAIYARAP</li>
						<li>ORANIENSTR.200</li>
						<li>10999 BERLIN</li>
					</ul>
				</div>
				<div>
					<ul class="text-center">
						<li>TEL:030-12345678</li>
						<li>OPEN DAILY: 12-22</li>
					</ul>
				</div>
				<div>
					<ul class="text-center">
						<li>@MAIYARAPBERLIN</li>
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
							<li>@TUKTUKBYTOSSAKAN</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="font-sans text-2xl flex flex-row justify-between text-blue_light">
			<p class="">
				@ 2021 Tossakan Berlin
			</p>
			<a href="/datenschutz" class="italic">Privacy Policy</a>
		</div>
	</div>
</footer>
