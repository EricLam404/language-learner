export default function parseCookies(cookieString: string) {
    const cookieObject: { [key: string]: string } = {};
    const cookies = cookieString.split('; ');

    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        cookieObject[name] = decodeURIComponent(value);
    }

    return cookieObject;
}