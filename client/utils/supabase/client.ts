import { createBrowserClient } from "@supabase/ssr";
import {
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
} from "../config/config";

export function createClient() {
    return createBrowserClient(
        NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY, {
            cookieOptions: {
                sameSite: "none",
                secure: true,
            }
        }
    );
}
