 
//IDENTIFICA O BOTAO
let actionButton = document.getElementById("btnAction");
 
 
 //SINGLETON
 
 //O design pattern Singleton limita a quantidade de instâncias de um objeto particular,
 //somente uma e centraliza assim todo o controle a essa instância em tempo de execução .
 //Singleton é um design pattern muito útil quando se deseja limitar o acesso ao controle 
 //recursos em um sistema . Exemplificando a conexão ao banco de dados. Essas instâncias por exemplo
 // podem ter um tempo de validade , ou mesmo controle de acesso e restrição de acesso .
 //Singleton reduz fortemente a quantidade de variáveis globais.
var Singleton = (function (){
	
	
	//INSTANCIA DO SINGLETON
	var instance ;
	
	
	//METODO PARA INSTANCIAR O SINGLETON
	function instantiate (){
		var object = new Object("new Instance");
	}
	
	
	//METODO QUE VAI ESCREVER NA DIV
	function someAction(text){


			//PROMISE PARA TRATAR O INPUT DE DADOS
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
	
	
	// RETORNA OS METODOS PARA SEREM UTILIZADOS SOMENTE PELO SINGLETON 
	return {
			
			
			//INSTANCIAR
			// Vale salientar que o método de design pattern singleton em tempo de execução terá apenas 
			// uma instância , ou seja , ele sempre retornará a mesma instância  mesmo executando várias 
			//vezes a instanciação.
			getInstance : function (){
				if(!instance){
					instance = instantiate();
				}else {
					return instance;
				}
			},
			
			//ESCREVER NA DIV
			action : function (text){
				someAction(text);
				
			}

	}

})();


//aditional methods ---------------------------------------------

//MÉTODO QUE VAI STARTAR O EVENTO NO BOTÃO
function testMethod(){

	let data = document.getElementById("txtInputText").value;

	//Singleton implementations 

	//all methods are in Singleton 
	let sigl = Singleton.getInstance();
	Singleton.action(data);

}

//MÉTODO SIMPLES PARA ESCREVER
function println (text){

	let log = document.getElementById("divDados");
	log.insertAdjacentHTML("beforeend",text);

}

//----------------------------------------------------------------


// ADICIONA EVENTO AO BOTÃO
actionButton.addEventListener("click",testMethod);
