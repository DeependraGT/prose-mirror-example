var myModule = require('myModule');
var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'

/*
Now, that works great on the server but, unfortunately, makes it harder to use when writing JavaScript for the browser. 
Suffice it to say that reading a module from the web takes a lot longer than reading from disk. 
For as long as the script to load a module is running, it blocks the browser from running anything else until it finishes loading. 
It behaves this way because the JavaScript thread stops until the code has been loaded. 
(I’ll cover how we can work around this issue in Part 2 when we discuss module bundling. 
    For now, that’s all we need to know).
    */