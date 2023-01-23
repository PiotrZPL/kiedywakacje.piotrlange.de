export function formatweeks(input: number): string {
    if (input == 1) {
        return "tydzień";
    }
    else if ((["2", "3", "4"].includes(input.toString().charAt(input.toString().length - 1))) && (input.toString().charAt(input.toString().length - 2) != "1")) {
        return "tygodnie";
    }
    return "tygodni";
}