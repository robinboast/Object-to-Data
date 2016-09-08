angular.module('marijn-teaching', ['ngRoute']).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl:'partials/teaching.html',
				controller: 'MainCtrl'
			}).
			/*
			when('/FOtD/2014/overview', {
				templateUrl:'partials/FOtD/2014/overview.html',
				controller: 'FOtD2014Ctrl'
			}).
			when('/FOtD/2014/slides', {
				templateUrl:'partials/FOtD/2014/slides.html',
				controller: 'FOtD2014Ctrl'
			}).
			when('/FOtD/2014/exercises', {
				templateUrl:'partials/FOtD/2014/exercises.html',
				controller: 'FOtD2014Ctrl'
			}).
			when('/FOtD/2014/deliverables', {
				templateUrl:'partials/FOtD/2014/deliverables.html',
				controller: 'FOtD2014Ctrl'
			}).
			when('/FOtD/2014/tools', {
				templateUrl:'partials/FOtD/2014/tools.html',
				controller: 'FOtD2014Ctrl'
			}).
			when('/FOtD/2015/overview', {
				templateUrl:'partials/FOtD/2015/overview.html',
				controller: 'FOtD2015Ctrl'
			}).
			when('/FOtD/2015/slides', {
				templateUrl:'partials/FOtD/2015/slides.html',
				controller: 'FOtD2015Ctrl'
			}).
			when('/FOtD/2015/exercises', {
				templateUrl:'partials/FOtD/2015/exercises.html',
				controller: 'FOtD2015Ctrl'
			}).
			when('/FOtD/2015/deliverables', {
				templateUrl:'partials/FOtD/2015/deliverables.html',
				controller: 'FOtD2015Ctrl'
			}).
			when('/FOtD/2015/tools', {
				templateUrl:'partials/FOtD/2015/tools.html',
				controller: 'FOtD2015Ctrl'
			}).
			when('/FOtD/2015/datasets', {
				templateUrl:'partials/FOtD/2015/datasets.html',
				controller: 'FOtD2015Ctrl'
			}).
			*/
			when('/FOtD/2015/', {
				templateUrl:'partials/FOtD/2015/overview.html',
				controller: 'FOtD2015Ctrl'
			}).
			when('/CtH/2015/', {
				templateUrl:'partials/CtH/2015/overview.html',
				controller: 'CtH2015Ctrl'
			}).
			when('/CtH/2015/:name', {
				templateUrl: function(urlattr) {
					return 'partials/CtH/2015/' + urlattr.name + '.html';
					console.log(urlattr);
				},
				controller: 'CtH2015Ctrl'
			}).
			when('/FOtD/2015/:name', {
				templateUrl: function(urlattr) {
					return 'partials/FOtD/2015/' + urlattr.name + '.html';
					console.log(urlattr);
				},
				controller: 'FOtD2015Ctrl'
			}).
			when('/FOtD/2015/exercises/:name', {
				templateUrl: function(urlattr) {
					return 'partials/FOtD/2015/exercises/' + urlattr.name + '.html';
					console.log(urlattr);
				},
				controller: 'FOtD2015Ctrl'
			}).
			when('/CtH/2015/assignments/:name', {
				templateUrl: function(urlattr) {
					return 'partials/CtH/2015/assignments/' + urlattr.name + '.html';
					console.log(urlattr);
				},
				controller: 'CtH2015Ctrl'
			}).
			when('/CtH/2015/tutorials/:name', {
				templateUrl: function(urlattr) {
					return 'partials/CtH/2015/tutorials/' + urlattr.name + '.html';
					console.log(urlattr);
				},
				controller: 'CtH2015Ctrl'
			}).
			otherwise({
				redirectTo:'/', 
			});
	});

function MainCtrl($scope, $location, $http) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
	$http.get('json/courses.json').success(function(data) {
		$scope.courses = data;
	});
}

function FOtD2014Ctrl($scope, $location, $http) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
	$http.get('json/FOtD_2014.json').success(function(data) {
		$scope.fotd2014 = data;
	});
}

function FOtD2015Ctrl($scope, $location, $http) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
	$http.get('json/FOtD_2015.datasets.json', {headers: {'Cache-Control': 'no-cache'}}).success(function(data) {
		$scope.datasets = data;
	});
	$http.get('json/FOtD_2015.exercises.json', {headers: {'Cache-Control': 'no-cache'}}).success(function(data) {
		$scope.exercises = data;
	});
	$http.get('json/FOtD_2015.weeks.json', {headers: {'Cache-Control': 'no-cache'}}).success(function(data) {
		$scope.weeks = data;
	});
	$http.get('json/FOtD_2015.admin.json', {headers: {'Cache-Control': 'no-cache'}}).success(function(data) {
		$scope.admin = data;
	});
}


function CtH2015Ctrl($scope, $location, $http) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
	$http.get('json/CtH_2015.weeks.json', {headers: {'Cache-Control': 'no-cache'}}).success(function(data) {
		$scope.weeks = data;
	});
	$http.get('json/CtH_2015.admin.json', {headers: {'Cache-Control': 'no-cache'}}).success(function(data) {
		$scope.admin = data;
	});
	$http.get('json/CtH_2015.examples.json', {headers: {'Cache-Control': 'no-cache'}}).success(function(data) {
		$scope.examples = data;
	});
}


