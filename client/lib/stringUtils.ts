export function capitalizeFirstLetter(word: string): string {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function replaceUnderscoreAndCapitalize(word: string): string {
    if (!word) return word;
    const replaced = word.replace(/_/g, " ");
    return capitalizeFirstLetter(replaced);
}

export function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
    };
    return new Intl.DateTimeFormat("en-US", options).format(
        new Date(dateString)
    );
}
