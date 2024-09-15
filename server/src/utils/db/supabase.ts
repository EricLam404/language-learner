import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";
import dotenv from "dotenv";
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;
const supabaseServiceRoleKey = process.env.SUPBASE_SERVICE_ROLE_KEY as string;

declare global {
    var supabaseServiceClient: SupabaseClient | undefined;
}

// export const supabase = createClient<Database>(
//   supabaseUrl,
//   supabaseKey,
//   {
//     auth: {
//       autoRefreshToken: false,
//       persistSession: false,
//       detectSessionInUrl: false
//     },
//   }
// )

export default function supabaseClient(token: string) {
    return createClient<Database>(supabaseUrl, supabaseAnonKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false,
        },
        global: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    });
}

export const getServiceSupabase = (): SupabaseClient => {
    const client =
        global.supabaseServiceClient ||
        createClient(supabaseUrl, supabaseServiceRoleKey);

    if (process.env.NODE_ENV !== "production") {
        global.supabaseServiceClient = client;
    }

    return client;
};
