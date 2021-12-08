
function identity(x){
    return x
}


function addb(a,b){
    return a+b
}

function subb(a,b){
    return a-b
}

function mulb(a,b){
    return a*b
}

function minb(a,b){
   if (a<b){
       return a
   } else {
       return b
   }
}

function maxb(a,b){
   if (a<b){
       return b
   } else {
       return a
   }
}

function add(...nums){
    let total = 0;
    for (let i in nums){
        total += nums[i];        
    }
    return total;
}

function sub(...nums){
    let total = nums[0];
    for (let i=1; i<nums.length; i++){
        total -= nums[i];        
    }
    return total;
}

function mul(...nums){
    let total = 1;
    for (let i in nums){
        total *= nums[i];        
    }
    return total;
}

function min(...nums){
    let lowest = nums[0];
    for (let i in nums){
        let check = minb(nums[i], nums[i+1])
        if (check < lowest){
            lowest = check
        }        
    }
    return lowest;
}




module.exports = { identity, addb , subb, mulb, minb, maxb, add, sub, mul, min, /*max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, */};