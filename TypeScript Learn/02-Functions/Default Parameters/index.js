"use strict";
function proclaim1(status = "not ready...", repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}
proclaim1();
proclaim1('ready?');
proclaim1('ready!', 3);
