function testTruthy (val) {
    return val ? console.log('verdadeiro') : console.log('falso')
}   

testTruthy(true)
testTruthy(false)
testTruthy(new Boolean (false))