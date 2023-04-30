<script>
	import '../app.css';
</script>

<nav class="bg-blue py-5 px-10 flex flex-row justify-between font-serif text-2xl text-white">
	<ul class="flex-1 justify-start mr-auto md:flex hidden">
		<li><a href="/" class="m-3">Home</a></li>
		<li><a href="/about-us" class="m-3">About us</a></li>
		<li><a href="/about-us" class="m-3">Tossakan</a></li>
		<li><a href="/about-us" class="m-3">Maiyarab</a></li>
	</ul>
	<div class="">
		<h2>Tossakan</h2>
	</div>
	<div class="flex-1 flex justify-end ml-auto">
		<h2><a href="/about-us" class="m-33">FAQ and Contact</a></h2>
		<h2>
			<a href="/about-us" class="m-3">
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
	</div>
</nav>

<slot />

<footer class="bg-blue py-5 font-serif text-white">
	<div class="mx-6 space-y-5">
		<div class="text-center md:text-left">
			<p class="text-5xl italic">OUR LOCATIONS</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 text-2xl md:gap-0 gap-4">
			<div class="flex flex-col justify-between items-center md:items-start gap-4">
				<div>
					<ul class="text-center">
						<li><a href="/">TOSSAKAN</a></li>
						<li><a href="/">SCHLIEMANNSTR.16</a></li>
						<li><a href="/">10437 BERLIN</a></li>
					</ul>
				</div>
				<div>
					<ul class="text-center">
						<li><a href="/">TEL:030-81477638</a></li>
						<li><a href="/">OPEN DAILY:12-22</a></li>
					</ul>
				</div>
				<div>
					<ul class="text-center">
						<li><a href="/">@TOSSAKANBERLIN</a></li>
					</ul>
				</div>
			</div>

			<div class="flex flex-col justify-between items-center">
				<div>
					<ul class="text-center">
						<li><a href="/">MAIYARAP</a></li>
						<li><a href="/">ORANIENSTR.200</a></li>
						<li><a href="/">10999 BERLIN</a></li>
					</ul>
				</div>
				<div>
					<ul class="text-center">
						<li><a href="/">TEL:030-12345678</a></li>
						<li><a href="/">OPEN DAILY: 12-22</a></li>
					</ul>
				</div>
				<div>
					<ul class="text-center">
						<li><a href="/">@MAIYARAPBERLIN</a></li>
					</ul>
				</div>
			</div>

			<div class="flex flex-col justify-between items-center md:items-end">
				<div class="flex flex-col justify-between h-full">
					<div>
						<ul class="text-center">
							<li><a href="/">TUKTUK</a></li>
							<li><a href="/">FOLLOW US ON INSTRAGRAM</a></li>
							<li><a href="/">FOR UPCOMING EVENTS</a></li>
						</ul>
					</div>
					<div>
						<ul class="text-center">
							<li><a href="/">@TUKTUKBYTOSSAKAN</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="m-5">
			<p class=" text-2xl">
				Copyright &copy; 2021 All Rights Reserved by
				<a href="#">TOSSAKAN BERLIN</a>.
			</p>
		</div> -->
	</div>
</footer>
