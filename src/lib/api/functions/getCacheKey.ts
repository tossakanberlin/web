import { cacheVersion } from '$lib/api/constants/cacheVersion'
import { getHash } from '$lib/api/functions/getHash'

export const getCacheKey = (href: string, width: number, quality: number, mimeType: string) => {
	return getHash([cacheVersion, href, width, quality, mimeType])
}
