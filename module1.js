function myModule(){

    this.hello = function(){
        return "Hello Guys!!";
    }

    this.goodBye = function(){
        return "Good Bye Guys!!";
    }

}

//We use the special object module and place a reference of our function into module.exports. 
//This lets the CommonJS module system know what we want to expose so that other files can consume it.
//This should be unique in every file
//we can define multiple in each files
module.exports = myModule;