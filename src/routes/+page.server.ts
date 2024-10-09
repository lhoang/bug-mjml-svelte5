import type { PageServerLoad } from './$types'
import { buildEmail } from "$lib/generator";

export const load: PageServerLoad = async () => {
  const email = await buildEmail('Newsletter Title')
  return {
    email,
  }
}
