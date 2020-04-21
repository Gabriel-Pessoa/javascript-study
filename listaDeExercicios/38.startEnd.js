function startEnd(start = 0, end = 100) {
    let pairs = []

//Data processing. If the user enters an initial value greater than the end of the interval.
    if(start > end) { 
       [end, start] = [start, end] 
    }

    for(let i = start; i <= end; i++) {
        if((i % 2) == 0) {
        pairs.push(i)
        }
    }
   console.log(pairs)
}
startEnd()
startEnd(100,200)
startEnd(100,0)