var mediaCenter = angular.module('MediaCenter', ['ui.bootstrap'])

mediaCenter.controller('FileListControl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
	
  $scope.files = [
{"uuid":"5ABC","title":"Alphaville","year":"1965","images":["http://upload.wikimedia.org/wikipedia/en/a/ad/Alphaville1965.jpg"],"credits":[{"credit":"Directed by","value":"Jean-Luc Godard"},{"credit":"Produced by","value":"André Michelin"},{"credit":"Written by","value":"Jean-Luc Godard"},{"credit":"Starring","value":"Eddie Constantine\nAnna Karina\nAkim Tamiroff\nHoward Vernon"},{"credit":"Music by","value":"Paul Misraki"},{"credit":"Cinematography","value":"Raoul Coutard"},{"credit":"Distributed by","value":"Athos Films"},{"credit":"Release dates","value":"5 May 1965 (1965-05-05)"},{"credit":"Running time","value":"99 minutes"},{"credit":"Country","value":"France"},{"credit":"Language","value":"French"}],"synopsis":"Alphaville: une étrange aventure de Lemmy Caution (Alphaville: A Strange Adventure of Lemmy Caution) is a 1965 black-and-white French science fiction film noir directed by Jean-Luc Godard. It stars Eddie Constantine, Anna Karina, Howard Vernon and Akim Tamiroff. The film won the Golden Bear award of the 15th Berlin International Film Festival in 1965."}
,
{"uuid":"4E32","title":"Goodfellas","year":"1990","images":["http://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Goodfellas.jpg/220px-Goodfellas.jpg"],"credits":[{"credit":"Directed by","value":"Martin Scorsese"},{"credit":"Produced by","value":"Irwin Winkler"},{"credit":"Screenplay by","value":"Nicholas Pileggi\nMartin Scorsese"},{"credit":"Based on","value":"Wiseguy \nby Nicholas Pileggi"},{"credit":"Starring","value":"Robert De Niro\nRay Liotta\nJoe Pesci\nLorraine Bracco\nPaul Sorvino"},{"credit":"Cinematography","value":"Michael Ballhaus"},{"credit":"Edited by","value":"Thelma Schoonmaker"},{"credit":"Distributed by","value":"Warner Bros."},{"credit":"Release dates","value":"September 19, 1990 (1990-09-19)"},{"credit":"Running time","value":"146 minutes"},{"credit":"Country","value":"United States"},{"credit":"Language","value":"English"},{"credit":"Budget","value":"$25 million[1]"},{"credit":"Box office","value":"$46.8 million[2]"}],"synopsis":"Goodfellas (styled as GoodFellas) is a 1990 American crime film directed by Martin Scorsese. It is a film adaptation of the 1986 non-fiction book Wiseguy by Nicholas Pileggi, who co-wrote the screenplay with Scorsese. The film narrates the rise and fall of Lucchese crime family associate Henry Hill (the first-person narrator in the film) and his friends over a period from 1955 to 1980."}
,
{"uuid":"7780","title":"Laura","year":"1944","images":["http://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Laura23234.jpg/225px-Laura23234.jpg"],"credits":[{"credit":"Directed by","value":"Otto Preminger"},{"credit":"Produced by","value":"Otto Preminger"},{"credit":"Screenplay by","value":"Jay Dratler\nSamuel Hoffenstein\nBetty Reinhardt\nRing Lardner, Jr. (uncredited)"},{"credit":"Based on","value":"Laura\n1943 novel \nby Vera Caspary"},{"credit":"Starring","value":"Gene Tierney\nDana Andrews\nClifton Webb\nVincent Price\nJudith Anderson"},{"credit":"Music by","value":"David Raksin"},{"credit":"Cinematography","value":"Joseph LaShelle"},{"credit":"Edited by","value":"Louis Loeffler"},{"credit":"Distributed by","value":"20th Century Fox"},{"credit":"Release dates","value":"October 11, 1944 (1944-10-11) (US)"},{"credit":"Running time","value":"88 minutes"},{"credit":"Country","value":"United States"},{"credit":"Language","value":"English"},{"credit":"Budget","value":"$1.02 million[1]"},{"credit":"Box office","value":"$2 million (rentals)[2]"}],"synopsis":"Laura is a 1944 American film noir produced and directed by Otto Preminger. It stars Gene Tierney, Dana Andrews and Clifton Webb along with Vincent Price and Judith Anderson. The screenplay by Jay Dratler, Samuel Hoffenstein and Betty Reinhardt is based on the 1943 novel of the same title by Vera Caspary."}
,
{"uuid":"F140","title":"Le Samourai","year":"1967","images":["http://upload.wikimedia.org/wikipedia/en/thumb/2/28/LeSamourai.jpg/220px-LeSamourai.jpg","http://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/32px-Flag_of_France.svg.png","http://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/32px-Flag_of_Italy.svg.png","http://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Video-x-generic.svg/28px-Video-x-generic.svg.png","http://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flowerpowerportfolio.jpg/32px-Flowerpowerportfolio.jpg"],"credits":[{"credit":"Directed by","value":"Jean-Pierre Melville"},{"credit":"Produced by","value":"Raymond Borderie\nEugène Lépicier"},{"credit":"Written by","value":"Jean-Pierre Melville\nGeorges Pellegrin"},{"credit":"Starring","value":"Alain Delon\nFrançois Périer\nNathalie Delon\nCathy Rosier"},{"credit":"Music by","value":"François de Roubaix"},{"credit":"Cinematography","value":"Henri Decaë"},{"credit":"Edited by","value":"Monique Bonnot\nYolande Maurette"},{"credit":"Distributed by","value":"S.N. Prodis"},{"credit":"Release dates","value":"October 25, 1967 (1967-10-25) (France)"},{"credit":"Running time","value":"105 min"},{"credit":"Country","value":"France\nItaly[1]"},{"credit":"Language","value":"French"}],"synopsis":"Le Samouraï (French pronunciation: ​[lə samuʁaj]; The Samurai, Italian: ''Frank Costello faccia d'angelo'') is a 1967 French-Italian crime film directed by French filmmaker Jean-Pierre Melville, starring Alain Delon as Jef Costello."}
,
{"uuid":"11A4","title":"Mildred Pierce","year":"1945","images":["http://upload.wikimedia.org/wikipedia/en/e/e0/Mildred-Pierce-One-Sheet.jpg","http://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Joan_Crawford_in_Mildred_Pierce_trailer.jpg/200px-Joan_Crawford_in_Mildred_Pierce_trailer.jpg"],"credits":[{"credit":"Directed by","value":"Michael Curtiz"},{"credit":"Produced by","value":"Jerry Wald"},{"credit":"Screenplay by","value":"Ranald MacDougall"},{"credit":"Based on","value":"Mildred Pierce \nby James M. Cain"},{"credit":"Starring","value":"Joan Crawford\nJack Carson\nZachary Scott\nEve Arden\nAnn Blyth"},{"credit":"Music by","value":"Max Steiner"},{"credit":"Cinematography","value":"Ernest Haller"},{"credit":"Edited by","value":"David Weisbart"},{"credit":"Distributed by","value":"Warner Bros."},{"credit":"Release dates","value":"September 24, 1945 (1945-09-24) (United States)"},{"credit":"Running time","value":"111 minutes"},{"credit":"Country","value":"United States"},{"credit":"Language","value":"English"},{"credit":"Budget","value":"$1,453,000"},{"credit":"Box office","value":"$5,638,000"}],"synopsis":"Mildred Pierce is a 1945 American drama film directed by Michael Curtiz and starring Joan Crawford, Jack Carson and Zachary Scott and featuring Eve Arden, Ann Blyth and Bruce Bennett, in a film noir about a long-suffering mother and her ungrateful daughter. The screenplay, by Ranald MacDougall and the uncredited William Faulkner and Catherine Turney, is based upon the 1941 novel Mildred Pierce by James M. Cain. The film was produced by Jerry Wald, with studio head Jack L. Warner as executive producer."}
,
{"uuid":"F001","title":"Miller's Crossing","year":"1990","images":["http://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Millerscrossingposter.jpg/220px-Millerscrossingposter.jpg"],"credits":[{"credit":"Directed by","value":"Joel Coen"},{"credit":"Produced by","value":"Ethan Coen"},{"credit":"Written by","value":"Joel Coen and Ethan Coen"},{"credit":"Starring","value":"Gabriel Byrne\nMarcia Gay Harden\nJohn Turturro\nJon Polito\nJ. E. Freeman\nAlbert Finney"},{"credit":"Music by","value":"Carter Burwell"},{"credit":"Cinematography","value":"Barry Sonnenfeld"},{"credit":"Edited by","value":"Michael R. Miller"},{"credit":"Distributed by","value":"20th Century Fox"},{"credit":"Release dates","value":"September 21, 1990 (1990-09-21)"},{"credit":"Running time","value":"115 minutes"},{"credit":"Country","value":"United States"},{"credit":"Language","value":"English"},{"credit":"Budget","value":"$14 million"},{"credit":"Box office","value":"$5,080,409 (North America)"},{"credit":"Released","value":"17 October 1990"},{"credit":"Genre","value":"Film score"},{"credit":"Length","value":"28:03"},{"credit":"Label","value":"Varèse Sarabande"}],"synopsis":"Miller's Crossing is a 1990 American neo-noir black comedy gangster film written and directed by the Coen brothers, and starring Gabriel Byrne, Marcia Gay Harden, John Turturro, Jon Polito, J. E. Freeman, and Albert Finney. The plot concerns a power struggle between two rival gangs and how the protagonist, Tom Reagan (Gabriel Byrne), plays both sides off against each other."}
,
{"uuid":"339A","title":"Murder by Contract","year":"1958","images":["http://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Murder_by_Contract_FilmPoster.jpeg/220px-Murder_by_Contract_FilmPoster.jpeg"],"credits":[{"credit":"Directed by","value":"Irving Lerner"},{"credit":"Produced by","value":"Leon Chooluck"},{"credit":"Written by","value":"Ben Simcoe"},{"credit":"Starring","value":"Vince Edwards\nPhillip Pine\nHerschel Bernardi"},{"credit":"Music by","value":"music composed and played by Perry Botkin"},{"credit":"Cinematography","value":"Lucien Ballard a.s.c."},{"credit":"Edited by","value":"Carlo Lodato"},{"credit":"Distributed by","value":"Columbia Pictures"},{"credit":"Release dates","value":"December 1958 (USA)"},{"credit":"Running time","value":"81 min."},{"credit":"Country","value":"United States"},{"credit":"Language","value":"English"}],"synopsis":"Murder by Contract is a 1958 film noir directed by Irving Lerner. Academy Award-nominated screenwriter Ben Maddow did uncredited work on the film. Centering around an existentialist hit man assigned to kill a woman, the film is often praised for its spare style and peculiar sense of cool."}
,
{"uuid":"2522","title":"Pickup On South Street","year":"1953","images":["http://upload.wikimedia.org/wikipedia/en/thumb/2/26/Pickuponsouthstreet.jpg/220px-Pickuponsouthstreet.jpg"],"credits":[{"credit":"Directed by","value":"Samuel Fuller"},{"credit":"Produced by","value":"Jules Schermer"},{"credit":"Screenplay by","value":"Samuel Fuller"},{"credit":"Story by","value":"Dwight Taylor"},{"credit":"Starring","value":"Richard Widmark\nJean Peters\nThelma Ritter"},{"credit":"Music by","value":"Leigh Harline"},{"credit":"Cinematography","value":"Joseph MacDonald"},{"credit":"Edited by","value":"Nick DeMaggio"},{"credit":"Distributed by","value":"20th Century Fox"},{"credit":"Release dates","value":"June 17, 1953 (1953-06-17) (United States)"},{"credit":"Running time","value":"80 minutes"},{"credit":"Country","value":"United States"},{"credit":"Language","value":"English"},{"credit":"Budget","value":"$780,000[1]"},{"credit":"Box office","value":"$1,900,000[2][3]"}],"synopsis":"Pickup on South Street (1953) is a Cold War spy film noir written and directed by Samuel Fuller and released by the 20th Century Fox studio. The film stars Richard Widmark, Jean Peters and Thelma Ritter. This movie was screened at Venice Film Festival in 1953."}
,
{"uuid":"569C","title":"Point Blank","year":"1967","images":["http://upload.wikimedia.org/wikipedia/en/thumb/1/17/PointBlankPoster.jpg/225px-PointBlankPoster.jpg"],"credits":[{"credit":"Directed by","value":"John Boorman"},{"credit":"Produced by","value":"Judd Bernard\nRobert Chartoff"},{"credit":"Written by","value":"Alexander Jacobs\nDavid Newhouse\nRafe Newhouse"},{"credit":"Based on","value":"The Hunter \nby Richard Stark"},{"credit":"Starring","value":"Lee Marvin"},{"credit":"Music by","value":"Johnny Mandel"},{"credit":"Cinematography","value":"Philip H. Lathrop"},{"credit":"Edited by","value":"Henry Berman"},{"credit":"Distributed by","value":"MGM"},{"credit":"Release dates","value":"August 30, 1967 (1967-08-30) (US)"},{"credit":"Running time","value":"92 minutes"},{"credit":"Country","value":"United States"},{"credit":"Language","value":"English"},{"credit":"Budget","value":"$3 million"},{"credit":"Box office","value":"$3,200,000 (US/ Canada)[1]"}],"synopsis":"Point Blank is a 1967 American neo-noir crime film directed by John Boorman, starring Lee Marvin and featuring Angie Dickinson, adapted from the crime noir pulp novel The Hunter by Donald E. Westlake, writing as Richard Stark. Boorman directed the film at Marvin's request and Marvin played a central role in the film's development and staging. The film was not a box office success in 1967 but has since gone on to become a cult classic, eliciting praise from such critics as film historian David Thomson."}
,
{"uuid":"D44E","title":"The Big Sleep","year":"1946","images":["http://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Bigsleep2.JPG/220px-Bigsleep2.JPG","http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bacall_and_Bogart_on_the_set_of_The_Big_Sleep.jpg/220px-Bacall_and_Bogart_on_the_set_of_The_Big_Sleep.jpg"],"credits":[{"credit":"Directed by","value":"Howard Hawks"},{"credit":"Produced by","value":"Howard Hawks"},{"credit":"Screenplay by","value":"William Faulkner\nLeigh Brackett\nJules Furthman"},{"credit":"Based on","value":"The Big Sleep \nby Raymond Chandler"},{"credit":"Starring","value":"Humphrey Bogart\nLauren Bacall"},{"credit":"Music by","value":"Max Steiner"},{"credit":"Cinematography","value":"Sidney Hickox"},{"credit":"Edited by","value":"Christian Nyby"},{"credit":"Distributed by","value":"Warner Bros."},{"credit":"Release dates","value":"August 23, 1946 (1946-08-23) (United States)"},{"credit":"Running time","value":"114 minutes\n(released cut)\n116 minutes\n(re-released original cut)"},{"credit":"Country","value":"United States"},{"credit":"Language","value":"English"},{"credit":"Box office","value":"$3 million[1]"}],"synopsis":"The Big Sleep is a 1946 film noir directed by Howard Hawks, the first film version of Raymond Chandler's 1939 novel of the same name. The movie stars Humphrey Bogart as detective Philip Marlowe and Lauren Bacall as Vivian Rutledge in a story about the \"process of a criminal investigation, not its results\". William Faulkner, Leigh Brackett, and Jules Furthman co-wrote the screenplay."}
]
			
	$scope.selectedIndex = 0;
	$scope.fileSelected = $scope.files[$scope.selectedIndex];

	$scope.socket = io('http://192.168.1.65:2600', {'force new connection': true});
	
	$scope.removeActiveClass = function(uuid){
		angular.element(document.querySelector('#img-'+uuid)).removeClass('active');
	}
	
	$scope.addActiveClass = function(uuid){
		angular.element(document.querySelector('#img-'+uuid)).addClass('active');
	}
	
	$scope.findFileIndex = function(uuid){
		var index = 0;
		
		
		for (var i = 0; i < $scope.files.length; i++) {			
			if($scope.files[i].uuid == uuid){
				return index
			}else{
				index = index + 1;
			}
		}
		
		return index;
	}
	
	$scope.open = function(uuid){		
		$scope.removeActiveClass($scope.fileSelected.uuid);
		$scope.selectedIndex = $scope.findFileIndex(uuid);			
		$scope.fileSelected = $scope.files[$scope.selectedIndex];				
		$scope.addActiveClass(uuid);		
	}
	
	$scope.socket.on('prev', function(){	
		$scope.$apply(function() {
			
			$scope.removeActiveClass($scope.fileSelected.uuid);					

			if ($scope.selectedIndex > 0) {
				$scope.selectedIndex = $scope.selectedIndex - 1;			
			} else {
				$scope.selectedIndex = $scope.files.length - 1;						
			}
		
			$scope.addActiveClass($scope.fileSelected.uuid);					
		
			$scope.fileSelected = $scope.files[$scope.selectedIndex];					
		});
			
	});

	$scope.socket.on('next', function(){		
		$scope.$apply(function() {
			$scope.removeActiveClass($scope.fileSelected.uuid);					
			
			if ($scope.selectedIndex < $scope.files.length - 1) {
				$scope.selectedIndex = $scope.selectedIndex + 1;			
			} else {
				$scope.selectedIndex = 0;						
			}
			
			$scope.fileSelected = $scope.files[$scope.selectedIndex];					
			
			$scope.addActiveClass($scope.fileSelected.uuid);					
		});

	});
	
	$scope.socket.on('select', function(){	
		$location.path('/file');
		$window.location.href='/file';
	});



}]);
