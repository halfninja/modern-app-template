
export async function load({ cookies }) {
  const user = cookies.get('sso');
  return { user };
}

export const actions = {
  default: async(event) => {
    const data = await event.request.formData();
    const user = data.get('user')?.toString() ?? 'anon';
    event.cookies.set('sso', user);
    return { success: true, user };
  }
}