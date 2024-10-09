import { render } from 'svelte/server';

import mjml2html from 'mjml'
import Newsletter from "$lib/Newsletter.svelte";

/**
 * Removes classes added to elements by the Svelte compiler because MJML does
 * not support them.
 */
const stripSvelteClasses = (html: string) =>
  html
    .replace(/class="s-[A-Za-z0-9-]+"/g, '')
    .replace(/class="svelte-[A-Za-z0-9-]+"/g, '')
const stripSvelteCSS = (css: string) =>
  css.replace(/\.s-[A-Za-z0-9-]+/g, '').replace(/\.svelte-[A-Za-z0-9-]+/g, '')

/** Renders a Svelte component as email-ready HTML. */

export const buildEmail = async (title: string): Promise<string> => {
// Render the component to MJML
  const { html: body, head } = render(Newsletter, {props: {title}})

  const mjml = `<mjml lang="fr">
        <mj-head>
          ${stripSvelteClasses(head)}
          <mj-breakpoint width="500px" />
          <mj-attributes>
            <mj-all font-family="system-ui, 'Segoe UI', Helvetica, Arial, sans-serif" />
          </mj-attributes>
        </mj-head>
        <mj-body>${stripSvelteClasses(body)}</mj-body>
      </mjml>`

  // Render MJML to HTML
  const { html, errors } = mjml2html(mjml)
  // eslint-disable-next-line no-console
  if (errors.length > 0) console.warn(errors)

  return html
}
