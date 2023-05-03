<script lang="ts">
	import { dev } from '$app/environment'

	export let src: string
	export let width: number | undefined = undefined
	export let height: number | undefined = undefined
	export let alt: string | undefined = undefined
	export let sync: boolean | undefined = undefined
	export let eager: boolean | undefined = undefined
	export let prioritize: boolean | undefined = false
	export let important: boolean | undefined = false
	export let quality: number = 73
	export let clip: boolean = true
	let klass: string | undefined = undefined
	export { klass as class }

	export let loader = (src: string, width: number, quality: number) =>
		dev
			? src
			: `https://tosskan-img.vercel.app/api/_image?${new URLSearchParams({
					url: src,
					w: width.toString(),
					q: quality.toString()
			  }).toString()}`

	// all possible sizes from devices width to regular placeholders
	const allSizes = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]

	// generate all widths to be used for optimizations
	const widths = [
		...new Set(
			// > This means that most OLED screens that say they are 3x resolution,
			// > are actually 3x in the green color, but only 1.5x in the red and
			// > blue colors. Showing a 3x resolution image in the app vs a 2x
			// > resolution image will be visually the same, though the 3x image
			// > takes significantly more data. Even true 3x resolution screens are
			// > wasteful as the human eye cannot see that level of detail without
			// > something like a magnifying glass.
			// https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
			[width, width! * 2 /*, width * 3*/].map(
				(w) => allSizes.find((p) => p >= w!) || allSizes[allSizes.length - 1]
			)
		)
	]

	$: builtSrcset = widths.map((o, i) => `${loader(src, o, quality)} ${i + 1}x`).join(', ')
	$: builtSrc = loader(src, widths[widths.length - 1], quality)

	//
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
	src={builtSrc}
	srcset={builtSrcset}
	decoding={sync || important ? 'sync' : 'async'}
	loading={eager || important ? 'eager' : 'lazy'}
	sizes="(min-width: 1024px) 800px, (min-width: 768px) 80vw, 100vw"
	{...{
		alt,
		height,
		width,
		class: clip ? 'sveltekit-image ski-clip_allowed ' + klass : 'sveltekit-image ' + klass
	}}
	fetchpriority={prioritize || important ? 'high' : 'auto'}
/>

<style global>
	.sveltekit-image {
		color: transparent !important;
	}
	/* Fix known safari bug showing grey outline while images load */
	@supports (font: -apple-system-body) and (-webkit-appearance: none) {
		.sveltekit-image.ski-clip_allowed[loading='lazy'] {
			clip-path: inset(0.6px);
		}
	}
</style>
