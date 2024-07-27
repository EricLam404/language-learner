// import { GraphQLError } from "graphql";

export default function parseCookies(cookieString: string) {
    const cookieObject: { [key: string]: string } = {};
    const cookies = cookieString.split('; ');

    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        cookieObject[name] = decodeURIComponent(value);
    }

    // throw new GraphQLError('User is not authenticated', {
    //     extensions: {
    //       code: 'UNAUTHENTICATED',
    //       http: { status: 401 },
    //     },
    //   });

    return cookieObject;
}