const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    result += 1
    const first = result
    console.log(result);
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        console.log(result)
        writeFile(
            './content/async-result.txt',
            `here is result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(result);
            })
    })

})