<script>
    
   
    import { fade, blur, fly, slide, scale } from "svelte/transition";
  
    import { onDestroy, onMount } from "svelte";

    export let images;
    

    let index = 0;
    let timer;
    
    onMount(() => {
    let timer = setInterval(next, 5000);
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
      <img   in:fly="{{delay:50, duration:2000}}"  {src} alt="none"  
       class="  p-4   w-[350px] sm:w-[400px] md:w-[300px] lg:w-[400px] md:h-[200px] sm:h-[175px] h-[150px]  lg:h-[300px] ">
       {/key}
   
      </section>
     


