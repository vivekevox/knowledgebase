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
          { label: "How to get faster FTP downloads?",                  value: "https://wiki.evoseedbox.com/how-to-get-faster-ftp-downloads" },
          { label: "Getting started with Seedbox one-click Installs",   value: "https://wiki.evoseedbox.com/SSce-getting-started-with-seedbox-one-click-installs" },
          { label: "How to reset your seedbox?",                        value: "https://wiki.evoseedbox.com/how-to-reset-your-seedbox" },
          { label: "Why you are not able to access your seedbox?",      value: "https://wiki.evoseedbox.com/why-you-are-not-able-to-access-your-seedbox" },
          { label: "Choosing a Seedbox Plan",                           value: "https://wiki.evoseedbox.com/choosing-a-seedbox-plan" },
          { label: "How to terminate my service?",                      value: "https://wiki.evoseedbox.com/how-to-terminate-my-service" },
          { label: "Unavailable Applications in Seedbox",               value: "https://wiki.evoseedbox.com/unavailable-applications-in-seedbox" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Setting up irssi with rutorrent",                   value: "https://wiki.evoseedbox.com/setting-up-irssi-with-rutorrent" },
          { label: "Restarting Rutorrent on Seedbox",                   value: "https://wiki.evoseedbox.com/restarting-rutorrent-on-seedbox" },
          { label: "Creating an archive with ruTorrent",                value: "https://wiki.evoseedbox.com/creating-an-archive-with-rutorrent" },
          { label: "Adding torrent to seedbox",                         value: "https://wiki.evoseedbox.com/adding-torrent-to-seedbox" },
          { label: "Using watch folder(large torrents)",                value: "https://wiki.evoseedbox.com/using-watch-folderlarge-torrents" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },
          { label: "Rutorrent getting started",                         value: "https://wiki.evoseedbox.com/rutorrent-getting-started" },

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
