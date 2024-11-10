import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../../database.types";
import { supabaseUrl, supabaseServiceRoleKey } from "../../config/config";

declare global {
    var supabaseServiceClient: SupabaseClient | undefined;
    var supabaseClient: SupabaseClient | undefined;
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
    const client = global.supabaseClient || createSupabaseClient(token);

    if (process.env.NODE_ENV !== "production") {
        global.supabaseClient = client;
    }

    return client;
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

function createSupabaseClient(token: string) {
    return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
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
