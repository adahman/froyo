// prompt to enter flavors
let flavorsInput = prompt("Please enter the froyo flavors you want separated by commas.");


//
let flavorsArray = flavorsInput.split(",");


counts(flavorsArray);

function counts(flavorsArray){
    //creating the object
    var flavors = {}

    //making the flavors an array
    for(var i = 0; i < flavorsArray.length; i++){
        flavors[flavorsArray[i]] = [];

        //making a count of duplicate flavors
        for(var d = 0; d < flavorsArray.length; d++){
            if(flavorsArray[i] == flavorsArray[d]){
                (flavors[flavorsArray[i]].push(d));
            }else{
                console.log('')
            }
        }
        flavors[flavorsArray[i]] = flavors[flavorsArray[i]].length;
    }
    console.log(flavors);
    return flavors;
}
