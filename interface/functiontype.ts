interface SearchFunc{
    (source: string,subString:string):boolean
}
let mySearch: SearchFunc
mySearch = function(src,sub){
    let result = src.search(sub);
    return result > -1;
}