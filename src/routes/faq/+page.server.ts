import EmailP from '$lib/components/Emails.svelte'
import { fail, type Actions } from '@sveltejs/kit'
import { render } from 'svelte-email'
import { z } from 'zod'

const faqSchema = z.object({
	fname: z
		.string({})
		.nonempty({
			message: 'Firstname is required'
		})
		.min(1, {
			message: 'Firstname must be at least 2 characters'
		})
		.max(50, {
			message: 'Firstname must be less than 50 characters'
		}),
	lname: z
		.string({
			required_error: 'Lastname is required'
		})
		.nonempty({
			message: 'Lastname is required'
		})
		.max(50, {
			message: 'Lastname must be less than 50 characters'
		}),
	email: z
		.string({
			required_error: 'Email is required'
		})
		.nonempty({
			message: 'Email is required'
		})
		.email({
			message: 'Email must be valid'
		})
		.max(200, {
			message: 'Email must be less than 200 characters'
		}),
	subject: z
		.string({
			required_error: 'Subject is required'
		})
		.nonempty({
			message: 'Subject is required'
		})
		.max(300, {
			message: 'Subject must be less than 300 characters'
		}),
	message: z
		.string({
			required_error: 'Message is required'
		})
		.nonempty({
			message: 'Message is required'
		})
		.max(1000, {
			message: 'Message must be less than 1000 characters'
		})
})

export const actions = {
	default: async ({ request, url, fetch }) => {
		const data = await request.formData()
		const fname = data.get('fname')
		const lname = data.get('lname')
		const email = data.get('email')
		const subject = data.get('subject')
		const message = data.get('message')
		const payload = {
			fname,
			lname,
			email,
			subject,
			message
		}
		const v = faqSchema.safeParse(payload)
		if (!v.success) {
			const errors: { [key: string]: string } = {}
			v.error.errors.map((error) => {
				errors[error.path[0]] = error.message
			})
			return fail(400, { error: true, errors, ...payload })
		}

		const emailHtml = render({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			template: EmailP,
			props: {
				email: v.data.email,
				name: `${v.data.fname} ${lname}`,
				subject: v.data.subject,
				message: v.data.message
			}
		})

		const maiyarapSite = url.searchParams.has('maiyarap')

		const options = {
			from: email,
			to: maiyarapSite ? `phoori12@gmail.com` : `xkamail@icloud.com`,
			subject: subject,
			html: emailHtml
		}

		const result = await fetch(`https://tosskan-img.vercel.app/api/email`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(options)
		}).then((r) => {
			if (r.status > 400) {
				return {
					status: r.status,
					message: r.statusText
				}
			}
			return r.json()
		})
		console.log(result)

		return {
			result: result || null
		}
	}
} satisfies Actions
