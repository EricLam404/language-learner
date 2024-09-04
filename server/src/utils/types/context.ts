import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";

export interface MyContext {
    cookies: {
        [key: string]: string;
    };
    supabase: SupabaseClient<Database>;
}
