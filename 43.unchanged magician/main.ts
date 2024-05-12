let magician :string[]=["David ","Alice ","Chris "];
function show_magnicians(magician:string[]){
    magician.forEach(magician=>{
        console.log(magician);
    });
}

    function make_great(magician:string[]){
        for(let i=0; i< magician.length; i++){
            magician[i] = magician[i] + "The Great";
        }
}
make_great(magician);
show_magnicians(magician);