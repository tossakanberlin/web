<script>
    import {slide, fade} from 'svelte/transition'; 
    import {elasticInOut} from 'svelte/easing';
  const gallery_items = [
    {
      url: "/Horizontal_left.jpg",
      description: "Dog",
    },
    {
      url: "/Horizontal_left.jpg",
      description: "Building",
    },
    {
      url: "/Horizontal_left.jpg",
      description: "Staircase",
    },
    {
      url: "/Horizontal_left.jpg",
      description: "Staircase",
    },
  ];
  let currentSlideItem = 0;
  const nextImage = () => {
    currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
  }
  const prevImage = () => {
    if (currentSlideItem != 0) {
        currentSlideItem = (currentSlideItem - 1) % gallery_items.length;
    } else {
        currentSlideItem = gallery_items.length - 1;
    }
  }
</script>

  {#each [gallery_items[currentSlideItem]] as item (currentSlideItem)}
    <img in:slide="{{ duration: 1000, easing: elasticInOut}}" out:fade src={item.url} alt={item.description} width={1000} height={600}/>
  {/each}
  <div class="carousel-buttons">
    <button class="btn" on:click={() => prevImage()}>Previous</button>
    <button class="btn" on:click={() => nextImage()}>Next</button>
  </div>