import { redirect } from "next/navigation";

export default function Page() {
    redirect("/dashboard");
    return <div>Page</div>;
}
