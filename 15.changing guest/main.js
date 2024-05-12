var guest_list = ['mahnoor', 'daniya', 'masooma'];
for (var i = 0; i < guest_list.length; i++)
    [
        console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.'\n\nTHANK YOU\n ")
    ];
var absent = 'mahnoor';
var new_guest = 'aryan';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++)
    [
        console.log('Respected Sir/Madam ' + guest_list[i] + ",\n' We invited you on dinner tomorrow.'\n\nTHANK YOU\n ")
    ];
console.log("Mr,' ".concat(absent, "'' wil not coming tomorrow dinner."));
