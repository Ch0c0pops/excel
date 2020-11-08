console.log("test.js on air")

const asyncFunction = async (text)=>{
    return (
        await Promise.resolve()
            .then(()=> console.log(text)
        )

    )
}
asyncFunction('async on air')