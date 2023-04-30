<script>
	import '../app.css';
</script>

<nav class="bg-blue py-5 px-10 flex flex-row justify-between font-serif text-4xl text-white">
	<ul class="flex-1 flex justify-start mr-auto">
		<li><a href="/" class="m-6">Home</a></li>
		<li><a href="/about-us" class="m-6">About us</a></li>
		<li><a href="/about-us" class="m-6">Tossakan</a></li>
		<li><a href="/about-us" class="m-6">Maiyarab</a></li>
	</ul>
	<div class="">
		<h2>Tossakan</h2>
	</div>
	<div class="flex-1 flex justify-end ml-auto">
		<h2><a href="/about-us" class="m-6">FAQ and Contact</a></h2>
		<h2><a href="/about-us" class="m-6">Instagram Logo</a></h2>
	</div>
</nav>

<slot />


<footer class="bg-blue py-5 font-serif text-white">
	<div class="mx-6 space-y-5">
		<div class="">
			<p class="text-5xl italic">OUR LOCATIONS</p>
		</div>
		<div class="grid grid-cols-3 text-2xl">
			<div class="flex flex-col justify-between items-start gap-4">
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

			<div class="flex flex-col justify-between items-end">
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
