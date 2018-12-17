function getFoodGroup() {
    var foodGroup = new XMLHttpRequest();
    foodGroup.open('GET', 'https://api.nal.usda.gov/ndb/list?format=json&&sort=n&offset=0&max=1500&ds=Standard+Reference&api_key=SjzawXpF9flRsDmnFLiJEv3DT84DcAu4rWwM7VdJ&lt=g', true);
    foodGroup.send();

    foodGroup.onload = function (){
        var foodInfo = JSON.parse(foodGroup.responseText).list.item;
       console.log(foodInfo);
        const foodG = document.getElementById("foodGroupSelect");
foodInfo.forEach(function(item) {
foodG.innerHTML += `<option value="${item.id}" name="${item.name}">${item.name}</option>`

});
    }
}


function searchApi(event) {
//change nutrients in api to search
    event.preventDefault(); //prevents form from submitting and reloading the page
    let query = document.forms[0]["search"].value; //user input
    let FG = document.forms[0]["foodGroupSelect"].selectedOptions[0].value;
    console.dir(FG);
    var food = new XMLHttpRequest();
    food.open('GET','https://api.nal.usda.gov/ndb/search/?format=json&&sort=n&offset=0&max=1500&ds=Standard+Reference&api_key=SjzawXpF9flRsDmnFLiJEv3DT84DcAu4rWwM7VdJ&q=' + query + "&fg=" + FG ,true);
    
    // + &lt=g or &g=searchFoodGroup()
    food.send(); //send it to the food.onload
    

    food.onload = function (){
        var foodInfo = JSON.parse(food.responseText).list.item;
        console.log(foodInfo);
        var myDiv = document.querySelector('div');//selecting the div on html
        myDiv.innerHTML = "";
        var myUl = document.createElement('ul'); //creating a new ul. nothing inside
    
        for(i = 0; i < foodInfo.length; i++){
            var myLi = document.createElement('li'); //put inside for loop or else it will override the element
            myLi.textContent = foodInfo[i].name; //write inside li from my json. just bullet points --the li
           // myLi.setAttribute("value", foodInfo[i].name);
//            myLi.setAttribute('id', foodInfo[i].name);
            myUl.appendChild(myLi); //add elements to the li. actually add the elements
            console.log(foodInfo[i].name);
            
            var btn = document.createElement("button");
            btn.innerHTML = "Add to Shopping list";
            btn.setAttribute("id", foodInfo[i].name);
            var body = document.getElementsByTagName("body")[0];
            myUl.appendChild(btn);
            
            btn.setAttribute("onclick", "addItemtoCart(this)");
             //btn.addEventListener("click", getElem(btn));
//             btn.addEventListener("click", function() {
//                 
////                    myShoppingCart += foodInfo[i].name;
////                    console.log(myShoppingCart);
//                alert("did something");
//            });
            
        }
    
        myDiv.appendChild(myUl); //adding everything on to the page 
        
       
    }
}

function addItemtoCart(elem) {
    var list = document.getElementById("shoppingList");
    
    var p = document.createElement('p');
    
    p.textContent = elem.id;
    
    list.appendChild(p);
    
}

function getSelectedItems() {
    
}

function viewShoppingList() {
    
}

//function validation() {
//    let input = document.getElementById("input").value;
//    
//    if(input == "" || input)
//}
