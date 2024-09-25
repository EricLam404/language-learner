import { SupabaseClient, User } from "@supabase/supabase-js";
import { Database } from "../../database.types";
import { PrismaClient } from "@prisma/client";

export interface MyContext {
    cookies: {
        [key: string]: string;
    };
    dataSources: {
        supabase: SupabaseClient<Database>;
        prisma: PrismaClient;
    };
    user: User;
}
