let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'
let cell = ''
let table = []
let row = []
for (let i = 0; i < csv.length; i++) {
    let char = csv[i] 
    
    if (char !== ',' && char !== '\n') {
        cell = cell + char
    } 
    if (char === ',') {
        row.push(cell)
        cell = ''
    } 
    if (char === '\n' || i === csv.length - 1) {
        row.push(cell)
        cell = ''
        table.push(row)
        row = []
    }
}
console.log(table)
        // new table practice 3 :
        
        let newTable =[]; // the array that will store the objects. we need 4 objects that will have their values...
        let keys = table[0]; // the keys are the property names.seperate them from the table. THEY ARE NOW STORED HERE
        // looping through each row that is not the first index[0] because they have the peoples data 
        for(let i=1; i<table.length; i++){ // table length does not include headers because they are stored... my head hurts  thats why we start at 1 with i 
            let obj = {}// created an empty object to put each row in  WE... (ME) ARE CREATING AN ARRAY OF OBJECTS. THIS MAKES EACH OBJECT (FROM THE ROWS IN THE OLD ARRAY) HAVE ITS OWN INDEX IN THE NEW ARRAY
            for( let j=0; j < keys.length; j++) {// it has to be keys.length because the keys are the labels/column and we want to iterate over each row of people data for each label/column...this is hard. keys have indicies 0,1,2,3 there are 4 of them :(  
                let key = keys[j].toLowerCase();//defined key as a new variable so that the lowercase letters can print instead of caps on the labels. 
                obj[key]= table[i][j]//  creates a new object for the row. loop j finishes first so that it prints first in the console
            }
                newTable.push(obj);// new table will have objects as the arrays. there will be 4 ( i think :(  ... )
        }
        console.log(newTable) // TRUST ME. IM STILL CONFUSED... THE UNIVERSE IS JUST GOOD TO ME (I NEEDED A NESTED FOR LOOP ...)
        //part 4 
        newTable.pop()
        console.log(newTable) 
        newTable.splice(1,0,{id: "48", name: "Barry", occupation: "Runner", age: "25"})
        console.log(newTable) 
        newTable.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
        console.log(newTable) 
        console.log(newTable.length)
        let avgAge = 0;
        let sum = 0;
        for(let i=0; i< newTable.length; i++){
            sum = sum + parseInt(newTable[i].age) // parseint converst a string into a integer. 
    
            
    }
    avgAge = sum/newTable.length; 
    console.log(avgAge)
    // part 5 
    let newChar = ""  
    
    for(let i=0; i < newTable.length; i++){
        
        newChar += "ID,Name,Occupation,Age" + newTable[i].id + "," + newTable[i].name + "," + newTable[i].occupation+ "," + newTable[i].age + "\/n"
    
    }
    
    console.log(newChar)
    
    