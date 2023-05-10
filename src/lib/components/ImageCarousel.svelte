<script>
    
    import Image from '$lib/components/Image.svelte'
   
    const images = [
      {
        url: "slider/slider_1.jpg",
        description: "image1",
        index:1
      },
      {
        url: "slider/slider_2.jpg",
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
  </script>

  
    <div class="flex overflow-x-auto w-fit  gap-6 snap-x snap-mandatory w-[">
       
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
       

    </div>
    






 
  