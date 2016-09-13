

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
function actor ($scope,$http) {

	$scope.getData = function() {
		$http.get("../data/employees.json").success(function(reponse) {
			$scope.employees = reponse.employees;
		});
	}; 
	$scope.getData2=function(){
$http.get('https://api.themoviedb.org/3/search/person?api_key=f24727bdb915ca05f7718876104b211d&query=will$').
success(function (reponse){
	var movies=reponse.results;
	var moviesName1=[];
     var moviesName2=[];
	for(i in movies){
		
		moviesName1.push(movies[i].known_for);
		for(j in moviesName1[i])
		{
			if(moviesName1[i][j].original_title===undefined)
			moviesName2.push(moviesName1[i][j].name);
				
			
			
		else	
			moviesName2.push(moviesName1[i][j].original_title);
			
	}

	}
	moviesName3=moviesName2;	
$scope.listOfMovies=movies;
});

	};


//תעשה קרית גיט ותביא את המידע מהקובץ בצורה אסנכרונית	
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

