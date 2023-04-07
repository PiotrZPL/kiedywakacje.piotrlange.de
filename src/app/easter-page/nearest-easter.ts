export function getNearestEaster(): Date {
    let easterDateList: Date[] = [
        new Date(2023, 3, 6, 0, 0, 0, 0),
        new Date(2024, 2, 28, 0, 0, 0, 0),
        new Date(2025, 3, 17, 0, 0, 0, 0),
        new Date(2026, 3, 2, 0, 0, 0, 0)
    ];

    let nowDate = Date.now();

    for (let date of easterDateList) {
        if (date.getTime() - nowDate > 0) {
            return date;
        }
    }

    return easterDateList[easterDateList.length - 1];
}
