<script>
    import Image from '$lib/components/Image.svelte'
   
    import { fade, blur, fly, slide, scale } from "svelte/transition";
  
    import { onDestroy, onMount } from "svelte";

    export let images;
    

    let index = 0;
    let timer;
    
    onMount(() => {
    let timer = setInterval(next, 4000);
  });

   onDestroy(() => {
    clearInterval(timer);
  });

    const next = function nextSlide(){
      index = (index+1) % images.length;
    }
    
    $: src = images[index].url;
      
  </script>

      <section  class=" flex justify-center   ">
       
        {#key src}
    
        <div in:fly="{{delay:50, duration:2000}}">
       
       <Image
								{src}
								class="p-2 sm:p-4  w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]    h-[200px] sm:h-[250px] md:h-[300px]    lg:h-[350px]"
								alt="slider"
							/>
        </div>
       {/key}
   
      </section>
     


