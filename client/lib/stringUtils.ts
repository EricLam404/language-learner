export function capitalizeFirstLetter(word: string): string {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function replaceUnderscoreAndCapitalize(word: string): string {
    if (!word) return word;
    const replaced = word.replace(/_/g, ' ');
    return capitalizeFirstLetter(replaced);
}
