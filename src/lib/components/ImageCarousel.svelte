<script>
    
    import Image from '$lib/components/Image.svelte'
    import { fade, blur, fly, slide, scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    const images = [
      {
        url: "vertical_left.jpg",
        description: "image1",
        index:1
      },
      {
        url: "vertical_right.jpg",
        description: "image2",
        index:2
      },
      {
        url: "slider/slider_3.jpg",
        description: "image3",
        index:3
      },
      {
        url: "slider/slider_4.jpg",
        description: "image4",
        index:4
      },
      {
        url: "slider/slider_5.jpg",
        description: "image5",
        index:5
      },
    ];
    
    let  index = 0;
    
    // setInterval((function(){
      
    //   index = (index + 1) % images.length


    // }), 3000);

    const prev = function prevSlide(){
        index = (index-1) % images.length;
    }

    const next = function nextSlide(){
      index = (index+1) % images.length;
    }
    
   
    let translate = `translateX(-${index * 100}%)`
      
  </script>

  
    <!-- <div class="flex overflow-x-auto w-fit  gap-6 snap-x snap-mandatory ">
       
        {#each images as slide}
        <div class="shrink-0 snap-center before:schrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw] m-auto scroll-smooth ">
          <Image width={400}
					src={slide.url} 
          class="    p-5 w-full  transition-all ease-in-out duration-500 group-hover:opacity-50"
				  prioritize
				  eager
				  important
				  />
        </div>
        {/each}
       


        
       5

    </div> -->


    
       
      
      <div class="overflow-hidden max-w-[300px] m-4 relative"  >
        
      <div class="flex transition-transform ease-out duration-500 translate-x-4" style = " transform: {translate}"  >
        {#each images as slide}
        <Image width={400}
        src={slide.url} 
       
        prioritize
        eager
        important 
        />
        {/each}
      </div>
      <div class="absolute inset-0 flex items-center justify-between p-4">

          <button on:click={next} class="bg-white/80 text-blue hover:bg-white p-5"></button>
          <button on:click={prev} class="bg-white/80 text-blue hover:bg-white p-5"></button>

      </div>
      </div>
     
          
           
      
    





<!-- 
    <Image width={400} 
          src={ images[index].url} 
          class="  w-full h-full p-4  duration-500"
          prioritize
         eager
          important 
         
           /> -->