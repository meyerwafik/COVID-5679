var OwnerFactoryCont;
var PointsFactoryCont;
var TransferingCont;




App = {
	web3Provider: null,
	contracts: {},

	init: async function () {

		window.addEventListener('load', async () => {
			// Modern dapp browsers...

			if (window.ethereum) {
				App.web3Provider= new Web3(ethereum);
				try {
					await ethereum.enable();
					var accounts = await web3.eth.getAccounts();
					var option = { from: accounts[0] };
					console.log(option);
					// var myContract = new web3.eth.Contract(abi, contractAddress);
				
				}catch (error) {
					// User denied account access...
				}
			}
			// Legacy dapp browsers...
			else if (window.web3) {
				App.web3Provider = new Web3(web3.currentProvider);
				// Acccounts always exposed
				web3.eth.sendTransaction({/* ... */ });
			}
			// Non-dapp browsers...
			else {
				console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
			}
			ethereum.enable().then(function (accounts) { }).catch(function (error) { console.error(error) });
		
	} )
return App.startApp()},
	OwnerCreation : function (name) {
	return OwnerFactoryCont.methods.createOwner(name);
},
sending:function (_from, _to, _tokenId, t) {
	return TransferingCont.methods._transfer(_from, _to, tokenId, t).send({ from: account });
},
getownerbyaddress:function (a) {
	return OwnerFactoryCont.owners(OwnerFactoryContract.methods.getAdd()).call();
},
login:function (a) {
	
	OwnerFactoryCont.ownerpresent(a).then(
		function (b) {
			if (b) {

				window.location = "myprofile.html";
				//   var child = 
				getownerbyaddress(a).then(function (owner) {
					$('#points').Append(`<div class="point">
				 	  <ul>
				 		  <li><strong>Tradable</strong>points: $(owner.getpointcount('f',owner.freepoints))</li>
				 		  <li><strong>Innovation</strong>points: $(owner.getpointcount('i',owner.points).call())</li>
				 		  <li><strong>Creativity</strong>points: $(owner.getpointcount('c',owner.points).call())</li>
				 		  <li><strong>Helpful</strong>points: $(owner.getpointcount('h',owner.points).call())</li>
				 		  <li><strong>Trustworthy</strong>points: $(owner.getpointcount('t',owner.points).call())</li>
				 		  <li><strong>Resourceful</strong>points: $(owner.getpointcount('r',owner.points).call())</li>
				 	  </ul>
				   </div>`);
				});
			}
			else window.location = "signup.html";
		})
	}, getotherprofile: function (a) {

		OwnerFactoryCont.ownerpresent(a).then(
			function (b) {
				if (b) {

					window.location = "othersprofile.html";
					//   var child = 
					getownerbyaddress(a).then(function (owner) {
						$('#points').Append(`<div class="point">
				 	  <ul>
				 		  <li><strong>Innovation</strong>points: $(owner.getpointcount('i',owner.points).call())</li>
				 		  <li><strong>Creativity</strong>points: $(owner.getpointcount('c',owner.points).call())</li>
				 		  <li><strong>Helpful</strong>points: $(owner.getpointcount('h',owner.points).call())</li>
				 		  <li><strong>Trustworthy</strong>points: $(owner.getpointcount('t',owner.points).call())</li>
				 		  <li><strong>Resourceful</strong>points: $(owner.getpointcount('r',owner.points).call())</li>
				 	  </ul>
				   </div>`);
					});
				}
				else window.location = "signup.html";
			})
	},
	startApp:function () {
	
	$.getJSON('OwnerFactory.json', function (data) {
		// Get the necessary contract artifact file and instantiate it with @truffle/contract
		var OwnerFactoryArtifact = data;
		App.contracts.OwnerFactory = TruffleContract(OwnerFactoryArtifact);

		// Set the provider for our contract
		App.contracts.OwnerFactory.setProvider(App.web3Provider);

	});
	
	$.getJSON('PointsFactory.json', function (data) {
		// Get the necessary contract artifact file and instantiate it with @truffle/contract
		var PointsFactoryArtifact = data;
		App.contracts.PointsFactory = TruffleContract(PointsFactoryArtifact);

		// Set the provider for our contract
		App.contracts.PointsFactory.setProvider(App.web3Provider);

	});
	$.getJSON('transfering.json', function (data) {
		// Get the necessary contract artifact file and instantiate it with @truffle/contract
		var transferingArtifact = data;
		App.contracts.transfering = TruffleContract(transferingArtifact);

		// Set the provider for our contract
		App.contracts.transfering.setProvider(App.web3Provider);

	});

		App.contracts.OwnerFactory.deployed().then(function (instance) {
			OwnerFactoryCont = instance;
		});
		

		App.contracts.PointsFactory.deployed().then(function (instance) {
			PointsFactoryCont = instance;
		});
		App.contracts.transfering.deployed().then(function (instance) {
			TransferingContract = instance;
		});



	return App.appBegin();
	},
	appBegin:function(){
		var signin1 = document.getElementById("signin1");
		signin1.addEventListener('click', function () {
			App.login(option);
	});
		var signin2 = document.getElementById("signin2");
		signin1.addEventListener('click', function () {
			App.login(option);
		})

		var g1 = document.getElementById("g1");
		g1.addEventListener('click', function () {
			App.sending(option,$(window).attr('address'),OwnerFactoryCont.freepoints,'i');
			location.reload();
		})
		var g2 = document.getElementById("g2");
		g2.addEventListener('click', function () {
			App.sending(option, $(window).attr('address'), OwnerFactoryCont.freepoints, 'c');
			location.reload();
		})
		var g3 = document.getElementById("g3");
		g3.addEventListener('click', function () {
			App.sending(option, $(window).attr('address'), OwnerFactoryCont.freepoints, 'h');
			location.reload();
		})
		var g4 = document.getElementById("g4");
		g4.addEventListener('click', function () {
			App.sending(option, $(window).attr('address'), OwnerFactoryCont.freepoints, 't');
			location.reload();
		})
		var g5 = document.getElementById("g5");
		g5.addEventListener('click', function () {
			App.sending(option, $(window).attr('address'), OwnerFactoryCont.freepoints, 'r');
			location.reload();
		})


	var input = document.getElementById("searchbar");

	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function (event) {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			// event.preventDefault();
			// Trigger the button element with a click
			var add=document.getElementById("searchbar").value;
			window.location = 'otherprofile.html';
			window.location.attr('address')=add;
		}
	});
	}};

	
	
	// Now you can start your app & access web3js freely:
	


(function($) {



	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	//Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

	

	// alert('Before sign in');
	
	// var signin = document.getElementById("signin1");
	// signin.addEventListener("click", function (event){ 
	// 	window.location="myprofile.html";
	// });

	
	// var input = document.getElementById("searchbar");

	// // Execute a function when the user releases a key on the keyboard
	// input.addEventListener("keyup", function (event) {
	// 	// Number 13 is the "Enter" key on the keyboard
	// 	if (event.keyCode === 13) {
	// 		// Cancel the default action, if needed
	// 		// event.preventDefault();
	// 		// Trigger the button element with a click
	// 		window.location = 'otherprofile.html';
	// 	}
	// });

	App.init();

})(jQuery);




	 

 


 
///////////////////ABI///////////////////////
/////////////////ABI////////////////
///////////////////ABI///////////
///////////////////ABI/////////////

