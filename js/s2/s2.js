// object in class

// factory function
// we can made more than one object using same lines of code
// function creatObject(length,breadth){
//     // returning as a object
//     return rectangle = {
//         length,
//         breadth,
//         draw: function(){
//             console.log("Print");
//         }
//     }   
// }

// constructor Function
    // pascal notation -> first letter of every word is capital NumbeOfStudent
    // function rec1(){
    //     this.length = 1;
    //     this.breadth = 2;
    //     this.draw = function(){
    //         console.log("DraWing");
    //     }
    // }

    // let a = new rec1();
    // a.draw();

// --------------------------------------------homeWorkStartedFromHere-----------------------------

    // --------------------------------objects---------------------------------
    // instente of class
    // solo object
        // let human = {
        //     hand:2,
        //     leg:2,
        //     eyes:2,
        //     ear:2,
        //     walk:function(){
        //         console.log("Walk until tired")
        //     }
        // } 
    // factory function
    function factoryFun(){
        // returning as a object
        return human = {
            hand:2,
            leg:2,
            eyes:2,
            ear:2,
            walk:function(){
                console.log("Walk until tired");
            }
        }
    }
        let ex = factoryFun();
        console.log(ex.walk());
    // constructor function
