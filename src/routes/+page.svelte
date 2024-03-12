<script lang="ts">
	import Image from '$lib/components/Image.svelte'
	import Menu from '$lib/components/Overlay_menu.svelte'
	import Carousel from '$lib/components/ImageCarousel.svelte'
	import { fade, blur, fly, slide, scale } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { inview } from 'svelte-inview'
	// import Carousel from 'svelte-carousel';
	let isInView: boolean
	let options = {}

	const gallery_1 = [
		{
			url: 'slider/display_1.jpg'
		},
		{
			url: 'slider/display_2.jpg'
		},
		{
			url: 'slider/display_3.jpg'
		},
		{
			url: 'slider/display_4.jpg'
		},
		{
			url: 'slider/display_5.jpg'
		},
		// {
		// 	url: 'slider/display_6.jpg'
		// },
		{
			url: 'slider/display_7.jpg'
		}
	]

	const gallery_2 = [
		{
			url: 'slider/display_2.jpg'
		},
		{
			url: 'slider/display_3.jpg'
		},
		{
			url: 'slider/display_4.jpg'
		},
		
	]
	const gallery_3 = [
		
		{
			url: 'slider/display_5.jpg'
		},
		{
			url: 'slider/display_6.jpg'
		},
		{
			url: 'slider/display_7.jpg'
		},
		
	]
	const gallery_4 = [
		
		{
			url: 'slider/display_1.jpg'
		},
		{
			url: 'slider/display_2.jpg'
		},
		{
			url: 'slider/display_3.jpg'
		}
	]
	const gallery_5 = [
		{
			url: 'slider/display_5.jpg'
		},
		{
			url: 'slider/display_6.jpg'
		},
		{
			url: 'slider/display_7.jpg'
		},
		{
			url: 'slider/display_1.jpg'
		},
		{
			url: 'slider/display_2.jpg'
		},
		{
			url: 'slider/display_3.jpg'
		},
		{
			url: 'slider/display_4.jpg'
		}
	]

	const gallery_6 = [
		{
			url: 'slider/display_5.jpg'
		},
		{
			url: 'slider/display_2.jpg'
		},
		{
			url: 'slider/display_4.jpg'
		}
	]
</script>

<article class="  h-fit relative font-serif">
	<div>
		<div class="left-0 absolute top-0 w-full text-center z-10">
			<h1 class="lg:text-7xl text-5xl text-white uppercase my-5 md:my-6">Neo-Thai Cuisine</h1>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div class="relative flex items-center justify-center group">
				
				<div
					class="absolute flex-col z-10 rounded-full aspect-square bg-pink flex justify-center items-center md:px-6 xl:px-4 px-5 group-hover:bg-opacity-0 transition-all duration-700 cursor-pointer"
				>
				
					<a href="/tossakan">
						<Image
							src="tossakan/tossakan_logo.png"
							width={500}
							class=" xl:w-[300px] lg:w-[275px]  w-[200px] sm:w-[250px]  mt-7  max-h-screen object-contain group-hover:scale-[1.2] transition-all ease-in-out duration-500 p-4 "
							important
						/>
					</a>
					<h2
						class="lg:text-5xl lg:m-5 text-3xl sm:text-4xl text-center text-black uppercase group-hover:scale-[1.2] transition-all ease-in-out duration-500 m-2"
					>
						Tossakan
					</h2>
				</div>
				<Image
					prioritize
					eager
					important
					src="/vertical_left.jpg"
					class="z-[-1] w-full h-[calc(100vh-130px)] object-cover  transition-all ease-in-out duration-500 group-hover:opacity-50"
				/>
			</div>

			<div class="relative flex items-center justify-center group">
				<div
					class="  absolute flex-col z-10 rounded-full aspect-square bg-pink flex justify-center items-center md:px-6 xl:px-4 px-5 group-hover:bg-opacity-0 transition-all duration-700 cursor-pointer"
				>
					<!-- <div  
					 class="   opacity-0 group-hover:opacity-100 z-10 absolute lg:text-6x	l lg:m-6 text-4xl sm:text-5xl text-center text-[red] uppercase transition-opacity ease-in duration-700   "
					>
						coming soon
			</div> -->
					<a href="/maiyarap">
						<Image
							width={500}
							src="maiyarap/maiyarap_logo.png"
							class="   xl:w-[300px] lg:w-[275px]  w-[200px] sm:w-[250px] mt-7 max-h-screen  object-contain group-hover:scale-[1.2] transition-all ease-in-out duration-500 p-4  "
							important
						/>
					</a>
					<h2
						class="lg:text-5xl lg:m-5 text-3xl sm:text-4xl text-center text-black uppercase group-hover:scale-[1.2] transition-all ease-in-out duration-500 m-2 "
					>
						Maiyarap
					</h2>

					
				</div>
				<Image
					src="/vertical_right.jpg"
					class="  z-[-1] object-cover w-full h-[calc(100vh-130px)] transition-all ease-in-out duration-500 group-hover:opacity-50"
					prioritize
					eager
					important
				/>
			</div>
		</div>
	</div>
	<Menu />

	<div
		class="bg-blue py-5 px-5"
		use:inview={options}
		on:inview_enter={({ detail }) => {
			isInView = detail.inView
		}}
	>
		<div class="hidden lg:grid lg:grid-cols-2 xl:flex xl:flex-row justify-around items-center">
			{#if isInView}
				<!-- <div in:fade={{ duration: 3000 }}>
					<Image src="slider/display_4.jpg" class="p-2 sm:p-4" alt="slider" />
				</div> -->
				{#each gallery_1 as imgC, index}
					<div in:scale={{ duration: 750, delay: 500 + index*200  }}>
						<Image src={imgC.url} class="p-2 sm:p-4" alt="slider" />
					</div>
				{/each}

				<!-- <Carousel images={gallery_1} />
				<Carousel images={gallery_2} />
				<Carousel images={gallery_3} />
				<Carousel images={gallery_4} />
				<Carousel images={gallery_5} /> -->

			{:else}
				<div class="h-[500px]" />
			{/if}


		</div>

		<div class="flex flex-col lg:hidden justify-around items-center">
			{#if isInView}
				<!-- <div in:fade={{ duration: 3000 }}>
				<Image src="slider/display_4.jpg" class="p-2 sm:p-4" alt="slider" />
			</div> -->
				{#each gallery_6 as imgC}
					<div in:scale={{ duration: 750, delay: 500 }}>
						<Image src={imgC.url} class="p-2 sm:p-4" alt="slider" />
					</div>
				{/each}



		<!-- <div class="  xl:hidden flex justify-around items-center">
			<Carousel images={gallery_2} />
			<Carousel images={gallery_3} />
			<Carousel images={gallery_4} />
		</div> -->
			{:else}
				<div class="h-[500px]" />
			{/if}
		</div>

		
	</div>
	
</article>

<style lang="postcss">
</style>
