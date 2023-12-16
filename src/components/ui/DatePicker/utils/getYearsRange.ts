export type YearsRange = {
    from: number
    to: number
}

export function getYearsRange(range: YearsRange) {
    const years = []

    for (let year = range.from; year <= range.to; year += 1) {
        years.push(year)
    }

    return years
}
