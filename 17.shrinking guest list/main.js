var guest_list = ['mahnoor', 'daniya', 'masooma'];
// for (var i = 0; i < guest_list.length; i++)
//     {
//         console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.'\n\nTHANK YOU\n ")};
var absent = 'mahnoor';
var new_guest = 'aryan';
guest_list[0] = new_guest;
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.'\n\nTHANK YOU\n ");
// }
// ;
// console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.we buy a big table so we decide to invite'\n\nTHANK YOU\n ");
guest_list.unshift('sara','saba','sana');
// for (var i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.we buy a big table so we decide to invite'\n\nTHANK YOU\n ");
// }
// ;
console.log('\nUnfortunately we can not arrange big table , only two people allow. ');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner. "));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam " + guest_list[0] + ',\nYes you are still invited on tomorrow dinner\nThank You\n');
}
guest_list.splice(0,2);
console.log(guest_list);
