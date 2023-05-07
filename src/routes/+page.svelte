<script lang="ts">
	import Image from '$lib/components/Image.svelte'
	import { hamburger } from '$lib/store'
	import Menu from '$lib/components/hamburger_menu.svelte'

	
</script>

<article class=" h-fit relative font-serif">
<Menu></Menu>	
<div class={$hamburger ? 'hidden' : 'block'}>
	<div class="left-0 absolute top-0  w-full text-center z-10">
		<h1 class="text-7xl text-white uppercase my-5 md:hidden" >Neo-Thai Cuisine</h1>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="relative flex items-center justify-center group    ">
			<div
				class="absolute flex-col z-10 rounded-full  aspect-square bg-pink flex justify-center items-center px-8 md:px-6 group-hover:bg-opacity-0 transition-all duration-700 cursor-pointer"
			>
				<Image
					src="/tossakan_logo.png"
					width={500}
					class=" lg:w-[500px] w-[150px] md:w-[200px] mt-7 max-h-screen object-contain group-hover:scale-[1.2] transition-all ease-in-out duration-500 p-4 "
					important
				/>
				<h2
					class="lg:text-5xl lg:m-5 text-center text-black uppercase group-hover:scale-[1.2] transition-all ease-in-out duration-500 m-3 "
				>
					Tossakan<br />P-Berg
				</h2>
			</div>
			<Image
				prioritize
				eager
				important
				src="/vertical_left.jpeg"
				class="z-[-1] w-full h-[calc(100vh-130px)] object-cover  transition-all ease-in-out duration-500 group-hover:opacity-50"
			/>
		</div>

		<div class="relative flex items-center justify-center group ">
			<div
				class="  absolute flex-col z-10 rounded-full  aspect-square bg-pink flex justify-center items-center px-8 md:px-6 group-hover:bg-opacity-0 transition-all duration-700 cursor-pointer"
			>
				<Image
					width={500}
					src="/maiyarap_logo.png"
					class=" lg:w-[500px]  w-[150px] md:w-[200px]  max-h-screen mt-7 object-contain group-hover:scale-[1.2] transition-all ease-in-out duration-500 p-4"
					important
				/>
				<h2
					class="lg:text-5xl lg:m-5 text-center text-black uppercase group-hover:scale-[1.2] transition-all ease-in-out duration-500 m-2 "
				>
					Maiyarap<br />x-Berg
				</h2>
			</div>
			<Image
				src="/vertical_right.jpeg"
				class="  z-[-1] object-cover w-full h-[calc(100vh-130px)] transition-all ease-in-out duration-500 group-hover:opacity-50"
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
