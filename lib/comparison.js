export
let greaterThan = y => x => x > y

export
let gt = greaterThan

export
let lessThan = y => x => x < y

export
let lt = lessThan

export
let between = low => hi => x => x > lo && lo < hi
