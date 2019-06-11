
window.onload = function() {
    injectProjects();
   
};

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



	 



$("#about").click(function(){
	
	$("#header,#footer_top") .hide()
		   $("#cross") .fadeIn(200)
		   $("#aboutme") .fadeIn(200)
		   

	

});

$("#contact").click(function(){
	
	$("#header,#footer_top") .hide()
		   $("#cross") .fadeIn(200)
		   $("#contactme") .fadeIn(200)
		   

	

});





$("#cross").click(function(){
	
	$("#header,#footer_top") .show()
		   $("#cross") .hide()
		      $("#aboutme") .hide()
			    $("#contactme") .hide()
				 $("#my_projects") .hide()
		   

	

});




var projects = [
  {
    "title": "Shots",
    "description": "An application that tracks your weekly drinking consumption. Made using Meteor.js and React.js.",
    "url": "https://github.com/AkashMalhotra/shots"
  },
  {
    "title": "Bored",
    "description": "An android app that contains over 100 interesting facts. Implemented a shake detector algorithm for transitions between facts. ",
    "url": "https://github.com/AkashMalhotra/Bored"
  },
  
  {
    "title": "Galaxy Warfare",
    "description": "An arcade game similar to the classic space shooter. Written in C# and written in Unity's game engine. ",
    "url": "https://github.com/AkashMalhotra/Galaxy-Warfare"
  },
  
    {
    "title": "WealthBeing",
    "description": "A Ruby web application linked with WealthSimple's API that rounds your daily purches and invests the rest.Injected artificial noise into data to create a more realistic spending trend ",
    "url": "https://github.com/AkashMalhotra/ht6ws2018-1"
  },
  
    {
    "title": "Encrypt",
    "description": "A secure SMS android application that encrypts text message using an AES cipher algorithm. A 16-character(128-bit )secret key  is required in order to decrypt the message. ",
    "url": ""
  },

  
  ];
  
function htmlForProject(project) {
  return "<p ><a href=" + project.url + ">" + 
  project.title + ':'+ "</a> <div >" + project.description + "</div></p>";
}

function injectProjects() {
  $('#my_projects').append(projects.map(htmlForProject));
}

$("#project").click(function(){
	
	$("#header,#footer_top") .hide()
		   $("#cross") .fadeIn(200)
		   $('#my_projects').fadeIn(200)
		 
});

	$.fn.show_items = function(duration, delay) {
    return this.each(function(index) {
        var thisLi = $(this);
        setTimeout(function(){
            thisLi.fadeIn(duration);
        }, delay * index);
    });
};

// function usage
$('#list3 li').show_items(500, 1000);
