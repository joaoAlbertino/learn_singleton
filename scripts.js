<script>
	 

	 
 	 function mySingleton (){
 	 	if(!mySingleton.instance){
 	 		mySingleton = this ;
 	 	}


 	 	function alertMessage (){
 	 		alert("teste");
 	 	}
 	 	return mySingleton.instance;
 	 }



 	 let mySingleton1 = new mySingleton ();

 	 mySingleton1.alertMessage();


</script>