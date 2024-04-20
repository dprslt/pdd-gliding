import { permanentRedirect } from 'next/navigation';

export default async function Page() {
    permanentRedirect('spaces/notams');
    return null;
}
