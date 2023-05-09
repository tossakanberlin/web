<script>
    import Carousel from "svelte-carousel";
    import Image from '$lib/components/Image.svelte'
   
    const images = [
      {
        url: "/Horizontal_left.jpg",
        description: "image1",
        index:1
      },
      {
        url: "/Horizontal_right.jpg",
        description: "image2",
        index:2
      },
      {
        url: "/Horizontal_left.jpg",
        description: "image3",
        index:3
      },
      {
        url: "/Horizontal_left.jpg",
        description: "image4",
        index:4
      },
      {
        url: "/Horizontal_left.jpg",
        description: "image5",
        index:5
      },
    ];
    let carousel; // for calling methods of the carousel instance
    const handleNextClick = () => {
      carousel.goToNext();
    };

    


    
  </script>
  
  <Carousel
      bind:this={carousel}
      let:loaded
      autoplay
      autoplayDuration={3000}
      infinite
      particlesToShow = 3
      let:showPrevPage
      let:showNextPage
 
  >
  <div slot="prev" >
    <i />
  </div>
  {#each images as src, imageIndex (src)}
      <div class="img-container">
        {#if loaded.includes(imageIndex)}
          <Image
						 src={src.url}
						class=" h-fit  w-full object-cover top-0 left-0 m-5 p-1"
						alt={src.description}
					/>
        {/if}
      </div>
    {/each}
    <div slot="next" >
      <i />
    </div>
  </Carousel>


  