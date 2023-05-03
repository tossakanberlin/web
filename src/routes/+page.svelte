<script lang="ts">
	import Image from '$lib/components/Image.svelte'
	import { hamburger } from '$lib/store'
	import { Hamburger } from 'svelte-hamburgers'
	import { quadOut } from 'svelte/easing'
	import { fade, fly, scale } from 'svelte/transition'
</script>

<article class=" h-fit relative font-serif">
	{#if $hamburger}
	<div class="w-full h-screen p-4 bg-white z-100   flex flex-col items-center text-center text-5xl realtive  " in:fade>
		<nav class="flex flex-row w-full items-center justify-between py-5 px-10 top-0 left-0 absolute">
			<h1 class="text-center "><a href ='/' class="items-center">Tossakan</a></h1>
			<Hamburger bind:open={$hamburger} --color="green" />
		</nav>
		<div class="flex flex-col items-center h-full justify-center m-5">
		{#each ['Home', 'About us', 'Tossakan', 'Maiyarap','FAQ and Contact',] as link, i}
			<p transition:fly={{ y: -15, delay: 50 * i }} class="m-5 bg-growing-underline-green text-green ">
				{link}
			</p>
		
		{/each}
		</div>
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
	</div>

	<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />

	
{/if}
<div class={$hamburger ? 'hidden' : 'block'}>


	
	<div class="left-0 absolute top-0  w-full text-center z-10">
		<h1 class="text-7xl text-white uppercase my-5 md:hidden">Neo-Thai Cuisine</h1>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="relative flex items-center justify-center group    ">
			<div
				class="absolute flex-col z-10 rounded-full  aspect-square bg-pink flex justify-center items-center px-8 md:px-6 group-hover:bg-opacity-0 transition-all duration-700 cursor-pointer"
			>
				<Image
					src="/tossakan_logo.png"
					width={500}
					class=" lg:w-[500px] w-[150px] md:w-[200px] mt-7 object-contain group-hover:scale-[1.2] transition-all ease-in-out duration-500  "
					important
				/>
				<h2
					class="lg:text-5xl lg:m-5 text-center text-white uppercase group-hover:scale-[1.2] transition-all ease-in-out duration-500 m-3 "
				>
					Tossakan<br />P-Berg
				</h2>
			</div>
			<Image
				prioritize
				eager
				important
				src="/vertical_left.jpeg"
				class="z-[-1] object-contain w-full"
			/>
		</div>

		<div class="relative flex items-center justify-center group ">
			<div
				class="  absolute flex-col z-10 rounded-full  aspect-square bg-pink flex justify-center items-center px-8 md:px-6 group-hover:bg-opacity-0 transition-all duration-700 cursor-pointer"
			>
				<Image
					width={500}
					src="/maiyarap_logo.png"
					class=" lg:w-[500px]  w-[150px] md:w-[200px] mt-7 object-contain group-hover:scale-[1.2] transition-all ease-in-out duration-500"
					important
				/>
				<h2
					class="lg:text-5xl lg:m-5 text-center text-white uppercase group-hover:scale-[1.2] transition-all ease-in-out duration-500 m-3 "
				>
					Maiyarap<br />x-Berg
				</h2>
			</div>
			<Image
				src="/vertical_right.jpeg"
				class="  z-[-1] object-contain w-full "
				prioritize
				eager
				important
			/>
		</div>
	</div>
</div>
</article>

<style lang="postcss">
</style>
