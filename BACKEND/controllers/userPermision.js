export function isHasAccount(req){
    let answer = false
    if(req.user == null){
        answer = false
    }else{
        answer = true
    }
    return answer
}

export function itIsAdmin(req){
    let answer = false
    if(req.user.role == "admin"){
        answer = true
    }
    return answer
}

export function isCustomer(req){
    let answer = false
    if(req.user.role == "customer"){
        answer = true
    }
    return answer

}