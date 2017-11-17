 

let actionButton = document.getElementById("btnAction");
 
var Singleton = (function (){

	var instance ;

	function instantiate (){
		var object = new Object("new Instance");
	}

	function someAction(text){


			//PROMISE
			let pr = new Promise (


				(resolve,reject) =>{

						if(text != ""){
							resolve(text);
						}else {
							reject("null text");
						}


				}

			);

			pr.then (
				function(val){

					println(val);
				}

			).catch(

				(reason)=>{
					println("FAIL");
				}
			);

	}

	return {

			getInstance : function (){
				if(!instance){
					instance = instantiate();
				}
			},

			action : function (text){
				someAction(text);
				
			}

	}

})();


//aditional methods ---------------------------------------------

function testMethod(){

	let data = document.getElementById("txtInputText").value;

	//Singleton implementations 

	//all methods are in Singleton 
	let sigl = Singleton.getInstance();
	Singleton.action(data);

}

function println (text){

	let log = document.getElementById("divDados");
	log.insertAdjacentHTML("beforeend",text);

}

//----------------------------------------------------------------

actionButton.addEventListener("click",testMethod);
