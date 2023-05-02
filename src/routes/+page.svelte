<script>
	export let open;
</script>

<article class="w-screen h-fit relative font-serif">
	{#if open}
    <div>
        {#each ['Home', 'Example', 'About', 'Contact'] as link, i}
            <p transition:fly={{ y: -15, delay: 50 * i }}>
                {link}
            </p>
        {/each}
    </div>

    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}
	<div class=" absolute top-0 m-2 w-full text-center z-10">
		<h1 class="text-7xl text-white uppercase my-5">Neo-Thai Cuisine</h1>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="  relative flex items-center justify-center group    ">
			
			<div
				class="   absolute flex-col z-10 rounded-full  aspect-square bg-pink flex justify-center items-center px-8 md:px-6 group-hover:bg-opacity-0 transition-all duration-700 cursor-pointer"
			>
				<img
					src="/tossakan_logo.png"
					class=" lg:w-[500px] w-[150px] md:w-[200px] mt-7 object-contain group-hover:scale-[1.2] transition-all ease-in-out duration-500  "
				/>
				<h2
					class="lg:text-5xl lg:m-5 text-center text-white uppercase group-hover:scale-[1.2] transition-all ease-in-out duration-500 m-3 "
				>
					Tossakan<br />P-Berg
				</h2>
			</div>
			<img src="/vertical_left.jpeg" class="  z-[-1] object-contain w-full" />
		</div>

		<div class="relative flex items-center justify-center group ">
			<div
				class="  absolute flex-col z-10 rounded-full  aspect-square bg-pink flex justify-center items-center px-8 md:px-6 group-hover:bg-opacity-0 transition-all duration-700 cursor-pointer"
			>
				<img
					src="/maiyarap_logo.png"
					class=" lg:w-[500px]  w-[150px] md:w-[200px] mt-7 object-contain group-hover:scale-[1.2] transition-all ease-in-out duration-500"
				/>
				<h2
					class="lg:text-5xl lg:m-5 text-center text-white uppercase group-hover:scale-[1.2] transition-all ease-in-out duration-500 m-3 "
				>
					Maiyarap<br />x-Berg
				</h2>
			</div>
			<img src="/vertical_right.jpeg" class="  z-[-1] object-contain w-full " />
		</div>
	</div>
</article>

<style lang="postcss">

	
</style>
