function make_car(manufacturer: string, model:string,...options:[string, any][]):
object
{
    let car = {manufacturer,model};
    options.forEach(([key, value]) => car [key]=value);
    return car;

}
console.log(make_car("toyota","suzuki",["colour","red"],["year",2020]));
console.log(make_car("corola","ford",["colour","blue"],["sunroof","true"]));