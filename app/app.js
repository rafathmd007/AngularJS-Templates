

app=angular.module("app",[]);

app.controller("list",menu1);//control1
app.controller("ctrlImg",actor);//control2
function menu1 ($scope) {
	

	$scope.categories = [{
		name : "שחקנים",
		path : "pages/actors.html"
	}, {
		name : "המובלים",
		path : "#"
	}, {
		name : "חיפוש",
		path : "#"
	}]; 

  
}
function actor ($scope) {
	
$scope.imageFolder="../img/";
	var listOfActors = [{
		name : "Jason statham",
		pic : "Jason_Statham.jpg",
		path : "http://www.imdb.com/name/nm0005458/?ref_=fn_al_nm_1"
	}, {
		name : "Jean-Claude Van Damme",
		pic : "Jean-Claude_Van_Damme.jpg",
		path : "http://www.imdb.com/name/nm0000241/?ref_=fn_al_nm_1"

	}, {
		name : "Kristen Stewart",
		pic : "Kristen_Stewart.jpg",
		path : "http://www.imdb.com/name/nm0829576/?ref_=fn_al_nm_1"
	},{
		name:"Milla Jovovich",
		pic:"Milla_Jovovich.jpg",
		path:"http://www.imdb.com/name/nm0000170/?ref_=fn_al_nm_1"
		
		
	},{
			name:"Wes Bentley",
		pic:"Wes_Bentley.jpg",
		path:"http://www.imdb.com/name/nm0004747/?ref_=fn_al_nm_1"
		
	},{
			name:"Will Smith",
		pic:"Will_Smith.jpg",
		path:"http://www.imdb.com/name/nm0000226/?ref_=fn_al_nm_1"
		
	}
	
	]; 


  $scope.NewListOfActor=listOfActors;
  	$scope.sort=function(dir){
		if(dir=='up'){
		$scope.upDown='name';	
			
		}
	else{
			$scope.upDown='-name';	
	}
		
	};
	
}

 {
	
	
}
