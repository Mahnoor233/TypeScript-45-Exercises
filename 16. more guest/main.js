var guest_list = ['mahnoor', 'daniya', 'masooma'];
// for (var i = 0; i < guest_list.length; i++)
//     {
//         console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.'\n\nTHANK YOU\n ")};
var absent = 'mahnoor';
var new_guest = 'aryan';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.'\n\nTHANK YOU\n ");
}
;
console.log("Mr,' ".concat(absent, "'' will not coming tomorrow dinner."));
guest_list.unshift('sara', 'saba', 'sana');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.we buy a big table so we decide to invite'\n\nTHANK YOU\n ");
}
;
