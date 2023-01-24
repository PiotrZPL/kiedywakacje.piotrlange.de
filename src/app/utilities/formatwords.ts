export function formatweeksword(input: number): string {
    if (input == 1) {
        return "tydzień";
    }
    else if ([2, 3, 4].includes(input % 10) && ~~((input%100 - input%10)/10) != 1) {
        return "tygodnie";
    }
    return "tygodni";
}

export function formatdaysword(input: number): string {
    if (input == 1) {
        return "dzień";
    }
    return "dni";
}

export function formathoursword(input: number): string {
    if (input == 1) {
        return "godzina";
    }
    else if ([2, 3, 4].includes(input % 10) && ~~((input%100 - input%10)/10) != 1) {
        return "godziny";
    }
    return "godzin";
}

export function formatminutesword(input: number): string {
    if (input == 1) {
        return "minutę";
    }
    else if ([2, 3, 4].includes(input % 10) && ~~((input%100 - input%10)/10) != 1) {
        return "minuty";
    }
    return "minut";
}
