(function () {
  'use strict';

  // Custom scripts
  document.addEventListener("DOMContentLoaded", function() {

    // Live Awesomplete Search 
  	var inputHero = document.getElementById("search-hero");
  	var inputNavbar = document.getElementById("search-navbar");

    var list = [
          { label: "Basics of getting started", 					              value: "https://wiki.evoseedbox.com/" },
          { label: "Login details", 						                        value: "https://wiki.evoseedbox.com/login-details" },
          { label: "Login Rutorrent", 				                          value: "https://wiki.evoseedbox.com/login-rutorrent" },
          { label: "Using Electorrent", 	                              value: "https://wiki.evoseedbox.com/using-electorrent" },
          { label: "FTP Credentials", 					                        value: "https://wiki.evoseedbox.com/ftp-credentials" },
          { label: "FTP Credentials",                                   value: "https://wiki.evoseedbox.com/ftp-credentials" },
          { label: "FTP Credentials",                                   value: "https://wiki.evoseedbox.com/ftp-credentials" },
          { label: "FTP Credentials",                                   value: "https://wiki.evoseedbox.com/ftp-credentials" },
          { label: "FTP Credentials",                                   value: "https://wiki.evoseedbox.com/ftp-credentials" },
          { label: "FTP Credentials",                                   value: "https://wiki.evoseedbox.com/ftp-credentials" },
          { label: "FTP Credentials",                                   value: "https://wiki.evoseedbox.com/ftp-credentials" },
          { label: "FTP Credentials",                                   value: "https://wiki.evoseedbox.com/ftp-credentials" },
          { label: "FTP Credentials",                                   value: "https://wiki.evoseedbox.com/ftp-credentials" },
        ];

    if (inputHero) {
      inputHero.addEventListener("awesomplete-selectcomplete", function(e) {
        window.location.href = e.text.value;
      }, false);
      
      new Awesomplete(inputHero, {
        autoFirst: true,
        list: list,
        replace: function(suggestion) {
          this.input.value = suggestion.label;
        }
      });
    }

    if (inputNavbar) {
      inputNavbar.addEventListener("awesomplete-selectcomplete", function(e) {
        window.location.href = e.text.value;
      }, false);
      
      new Awesomplete(inputNavbar, {
        autoFirst: true,
        list: list,
        replace: function(suggestion) {
          this.input.value = suggestion.label;
        }
      });
    }

  });

}());
