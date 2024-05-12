"use strict";
function make_t_shirt(size = "large", message = "I Love Typescript") {
    console.log(`Making a "${size}" t-shirt with the message "${message}" printed on it.`);
}
make_t_shirt();
make_t_shirt("medium");
make_t_shirt("small", "Dive into coding");
