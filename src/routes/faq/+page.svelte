<div class="flex flex-col md:flex-row bg-white text-green pt-10">
	<div class="flex justify-center ml-10 text-6xl md:text-8xl gap-4">
		<h2>IMPRESSUM</h2>
	</div>
	<div class="flex flex-col justify-between items-start font-sans text-xl my-10 mx-10 gap-4">
		<div class="font-sans">
			<p>ChaCha Sweet Creations GmbH</p>
			<p>Geschäftsführer: Tanadon Santanviboon</p>
		</div>
		<div class="font-sans">
			<p>Schliemannstrasse 16</p>
			<p>10437 Berlin</p>
			<p>+49 30 81477638</p>
			<p>info@tossakan-berlin.de</p>
		</div>
		<div class="font-sans">
			<p>USt-ID-Nr: 37/250/50947</p>
			<p>Amtsgericht Mitte</p>
		</div>
		<div class="font-sans">
			<p>Ansprechspartner für Webauftritt und Social-Marketing: Bo-kyung Lee</p>
		</div>
	</div>
</div>

<div class="flex flex-col md:flex-row bg-green text-white pt-10">
	<div class="flex justify-center items-center md:items-start sm:ml-10 text-6xl md:text-8xl md:gap-4">
		<h2>CONTACT</h2>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 shadow-none rounded sm:gap-10 md:w-full mx-10 my-10 items-center md:items-start">
		<form class="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div class="grid">
				<label for="name">Name *</label>
				<input
					class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
					id="name"
					type="text"
					placeholder="First Name"
				/>
			</div>
			<div class="flex flex-col justify-end">
				<input
					class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
					id="name"
					type="text"
					placeholder="Last Name"
				/>
			</div>
			<div class="grid sm:col-span-2">
				<label for="name">Email *</label>
				<input
					class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
					id="name"
					type="text"
				/>
			</div>
			<div class="grid sm:col-span-2">
				<label for="name">Subject *</label>
				<input
					class="shadow rounded h-[2.5rem] text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
					id="name"
					type="text"
				/>
			</div>
			<div class="grid sm:col-span-2">
				<label for="name">Message *</label>
				<textarea
					class="shadow rounded text-black px-3 py-[0.32rem] leading-[1.6] outline-none"
					id="name"
					rows="3"
				/>
			</div>
		</form>

		<button
			type="submit"
			class="flex justify-center items-center bg-pink rounded-md col-span-2 py-5 w-[10rem] shadow-none font-serif text-5xl mt-5 sm:mt-0">
			Send
		</button>
	</div>
</div>


<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
