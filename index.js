// ANCHOR TODO:
//Create a menu app as seen in this week's video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

//Guitars


//Menu Guitars

//class Guitar
    //make
    //model

class Guitar{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}

//class Menu
class Menu{
    constructor() {
        //Guitars Array
        this.guitars=[];
    }


    //add a guitar
    //prompt for make
    //prompt for model
    //create new guitar and push guitar into array

    addGuitar(){
        let guitarMake = prompt('Enter guitar make:');
        let guitarModel = prompt('Enter guitar model:');
        this.guitars.push(new Guitar(guitarMake, guitarModel));
    }
    

    //delete a guitar

    deleteGuitar(){
        let guitarIndex = prompt('Enter guitar index to DELETE');
        this.guitars.splice(guitarIndex, 1);
    }
    //view all guitars
    viewGuitars() {
        let displayGuitars = '';
        for(let i=0; i < this.guitars.length; i++){
            displayGuitars += `
            ${i}) ${this.guitars[i].make} ${this.guitars[i].model}`
        }

        alert(`
        Guitar Inventory:
        ------------------------
            
        ${displayGuitars}
        `);
    }

    //see a menu
    showMainMenu(){
        return prompt(`
        Main Menu:
        ----------------------
        0) Exit Menu
        1) Add Guitar
        2) Delete Guitar
        3) View All Guitars   
        `);
    }

    //start menu
    start(){
        let selection = this.showMainMenu();

        while(selection != 0){
            switch(selection){
                case '1': this.addGuitar();
                break;

                case '2': this.deleteGuitar();
                break;

                case '3': this.viewGuitars();
                break;

                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert('Exiting Menu.. Goodbye!');
    }
}

    



//instantiate the menu and invoke the start method

let menu = new Menu();

menu.start();