function dna (stringA,stringB){
    if (stringA.length!== stringB.length){ ///// length
        alert("Error");
    }
    if (stringA === stringB ){ ////////      check letters are equal
        return 0;
    }
    let differences = 0;
    for ( let i=0; i< stringA.length ; i++){  
        if(stringA[i] !== stringB[i]){      /// compere letters
            differences +=1;  
        }
     }
    return   differences;
 }
console.log(dna("kello","holla"));