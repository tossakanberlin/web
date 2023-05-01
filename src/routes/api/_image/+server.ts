import { requestHandler } from '$lib/api/requestHandler';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = requestHandler({
	leadingUrl: process.env.NODE_ENV === 'production' ? 'https://ezpay.gg' : 'http://localhost:5173'
	// avif: false,
	// ttl: 1000 * 60 * 60 * 24 * 7,
	// storePath: '.svelte-kit/images'
});
