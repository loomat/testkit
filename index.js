const assert = (t, s, f) => {
    console.log('\x1b[3'+(t?'2':'1')+'m%s\x1b[0m', t?'[\u2713 ] \u0009'+s:'[\u2717 ] \u0009'+f )
}
export default function (cases){
    let count_fail = 0
    cases.forEach( t => {
        if( t.fn===undefined || !t.name){
            console.log('\x1b[31m%s\x1b[0m', '!ERROR test case failed to test')
            return
        }
        console.log('\x1b[3'+(t.fn()?'2':'1')+'m%s\x1b[0m', t.fn()?'[\u2713 ] \u0009'+(t.success||t.name):'[\u2717 ] \u0009'+(t.fail||t.name))
        if(!t.fn()) count_fail ++
    })
    console.log('\n----------------------------------------------------------------------')
    console.log('TOTAL cases tested:',cases.length,'of which has failed:',count_fail)
}
