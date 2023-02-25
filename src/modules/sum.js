export function sum(...args) {
    if(args.length === 0) {
        throw Error("sum requiered at least 1 argument"); 
    };
    return args.reduce((acc, val) => acc + val, 0);
}