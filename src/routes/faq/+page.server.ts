import type { Actions } from './$types';
import { render } from 'svelte-email';
import nodemailer from 'nodemailer';
import { fail } from '@sveltejs/kit'
import { env } from '$env/dynamic/private';
import EmailP from '$lib/components/Emails.svelte';


export const actions = {
    default: async ({request, url}) => {
        
        let recipientEmail = 'woraphonchwg@gmail.com'

        const data = await request.formData();
        const fname = data.get('fname')
        const lname = data.get('lname')
        const email = data.get('email')
        const subject = data.get('subject')
        const message = data.get('message')

        // TODO: FORM VALIDATION
        if (!fname) {
			return fail(400, { fname, missing: true });
		}
        if (!lname) {
			return fail(400, { lname, missing: true });
		}
        if (!email) {
			return fail(400, { email, missing: true });
		}
        if (!subject) {
			return fail(400, { subject, missing: true });
		}
        if (!message) {
			return fail(400, { message, missing: true });
		}

        if (url.searchParams.has('maiyarap')) {
			recipientEmail = 'phoori12@gmail.com'
		}

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: env.PRIVATE_EMAIL_USERNAME,
                pass: env.PRIVATE_EMAIL_PASSWORD
            }
        });
        
        
        const emailHtml = render({
            template: EmailP,
            props: {
                email: email,
                name: fname + " " + lname,
                subject: subject,
                message: message
            }
        });

        const options = {
            from: email,
            to: recipientEmail,
            subject: subject,
            html: emailHtml
        };
        
        await transporter.sendMail(options);

    }
} satisfies Actions;