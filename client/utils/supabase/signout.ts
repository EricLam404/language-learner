'use client'
import { createClient } from "./client";

export async function signout() {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut({ scope: "local" });

    if (error) {
        console.log(error);
    } else {
        console.log("Signed out successfully!")
    }
}
