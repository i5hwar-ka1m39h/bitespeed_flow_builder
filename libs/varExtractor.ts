export const extractVar = (text:string) =>{
    const regex = /{{\s*([\w$][\w\d$]*(?:\.[\w$][\w\d$]*)*)\s*}}/g;
    const vars = new Set()
    let match;
    while((match = regex.exec(text))!== null){
        vars.add(match[1])
    }
    return Array.from(vars)
}