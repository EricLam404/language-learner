"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { HOST_NAME } from "@/utils/config/config";

export async function login(formData: FormData) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        console.log(error)
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}

export async function signup(formData: FormData) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        console.log(error)
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}

export async function loginWithGoogle() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: HOST_NAME + "/auth/callback",
        },
    });
    if (error) {
        console.log(error)
        redirect("/error");
    }
    if (data.url) {
        redirect(data.url); // use the redirect API for your server framework
    }

    revalidatePath("/", "layout");
    redirect("/");
}
