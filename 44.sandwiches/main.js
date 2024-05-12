"use strict";
function make_sandwhich(...items) {
    console.log(`Makin a sandwhich with :${items.join(',')}.`);
}
make_sandwhich("ham", "cheese");
make_sandwhich("ham", "tomato", "onion");
make_sandwhich("avacado", "cheese", "mayo", "mustard");
