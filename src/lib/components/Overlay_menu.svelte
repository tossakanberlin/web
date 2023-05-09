<script lang="ts">
	
	import { hamburger } from '$lib/store'
	import { Hamburger } from 'svelte-hamburgers'
	import { quadOut } from 'svelte/easing'
	import { fade, fly, scale } from 'svelte/transition'
	
	const handleClick = () => $hamburger = !$hamburger
</script>


{#if $hamburger}
	<div class="w-full h-screen fixed top-0 right-0 py-5 px-10 bg-white z-100   flex flex-col items-center text-center text-5xl  font-sans " in:fade>
		<nav class="flex-row flex justify-between ml-auto  w-screen h-[130px] items-center py-2 px-10 absolute top-0   ">
			<h1 class="text-center "><a href ='/' class="items-center text-green">Tossakan</a></h1>    
			
			<div class=' flex-1 flex justify-end ml-auto items-center  '>	
				
				<Hamburger bind:open={$hamburger} --color={"#00c69d"}  />		
			</div>	
		</nav>
		<div class="flex flex-col items-center h-full justify-center m-5 p-5">
		
			<p transition:fly={{ y: -15, delay: 50  }} class="m-3 md:m-5  bg-growing-underline-green text-green "><a href='/' on:click={handleClick} >Home</a></p>
			<p transition:fly={{ y: -15, delay: 50  }} class=" m-3 md:m-5 bg-growing-underline-green text-green "><a href='/about-us' on:click={handleClick} >About us</a></p>
			<p transition:fly={{ y: -15, delay: 50  }} class=" m-3 md:m-5 bg-growing-underline-green text-green "><a href='/tossakan' on:click={handleClick}>Tossakan</a></p>
			<p transition:fly={{ y: -15, delay: 50  }} class=" m-3 md:m-5 bg-growing-underline-green text-green "><a href='/maiyarap ' on:click={handleClick}>Maiyarap</a></p>
			<p transition:fly={{ y: -15, delay: 50  }} class=" m-3 md:m-5 bg-growing-underline-green text-green "><a href='/faq' on:click={handleClick}>FAQ & Contact</a></p>
		
		</div>
        <a href ='https://www.instagram.com/tossakanberlin/' class="items-center text-green" target="blank">
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
		class="w-8 h-8 inline-block text-green" transition:fly={{ y: -15, delay: 50  }}
		><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
			d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
		/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
    </a>
	</div>
	<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}