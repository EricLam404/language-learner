import { createBrowserClient } from "@supabase/ssr";
import {
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
} from "../config/config";

export function createClient() {
    return createBrowserClient(
        NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookieOptions: {
                domain:
                    process.env.NODE_ENV === "production"
                        ? process.env.NEXT_PUBLIC_PROD_DOMAIN!
                        : "",
                sameSite: "none",
                secure: true,
            },
        }
    );
}
