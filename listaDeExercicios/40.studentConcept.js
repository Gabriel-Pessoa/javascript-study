Number.prototype.interval = function (start, end) {
    return this >= start && this <= end; // 'this' is the number. Return true our false from interval
}

const studentConcept = function (note) {
    if (note.interval(9, 10)) {
        console.log('Concept A')
    }
    else if (note.interval(7, 8.9)) {
        console.log('Concept B')
    }
    else if (note.interval(5, 6.9)) {
        console.log('Concept C')
    }
    else if (note.interval(0, 4.9)) {
        console.log('Concept D')
    }
    else{
        console.log('Invalid note');
    }
}

studentConcept(9.5)
studentConcept(7.5)
studentConcept(6.5)
studentConcept(4.5)
studentConcept(-1)

