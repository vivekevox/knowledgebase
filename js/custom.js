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
          { label: "Extracting an archive with ruTorrent",              value: "https://wiki.evoseedbox.com/extracting-an-archive-with-rutorrent" },
          { label: "How to create torrents using ruTorrent",            value: "https://wiki.evoseedbox.com/how-to-create-torrents-using-rutorrent" },
          { label: "Common ruTorrent errors and how to fix them",       value: "https://wiki.evoseedbox.com/OSv--common-rutorrent-errors-and-how-to-fix-them" },
          { label: "Guide to increase download and upload queues in Rutorrent.",  value: "https://wiki.evoseedbox.com/guide-to-increase-download-and-upload-queues-in-rutorrent" },
          { label: "Reroute your seedbox",                              value: "https://wiki.evoseedbox.com/reroute-your-seedbox" },
          { label: "Open VPN connect",                                  value: "https://wiki.evoseedbox.com/open-vpn-connect" },
          { label: "Why my seedbox is slow?",                           value: "https://wiki.evoseedbox.com/fQE0-why-my-seedbox-is-slow" },
          { label: "How to get maximum transfer speed using FTP in Filezilla?",  value: "https://wiki.evoseedbox.com/how-to-get-maximum-transfer-speed-using-ftp-in-filezilla" },
          { label: "How to transfer data from the previous provider to your Seedbox via FTP",   value: "https://wiki.evoseedbox.com/how-to-transfer-data-from-the-previous-provider-to-your-seedbox-via-ftp" },
          { label: "How to access your seedbox files using HTTP access",                        value: "https://wiki.evoseedbox.com/how-to-access-your-seedbox-files-using-http-access" },
          { label: "How to restart your Seedbox",                       value: "https://wiki.evoseedbox.com/how-to-restart-your-seedbox" },
          { label: "How to change your rutorrent client password?",     value: "https://wiki.evoseedbox.com/how-to-change-your-rutorrent-client-password" },
          { label: "How to use your Seedbox Dashboard?",                value: "https://wiki.evoseedbox.com/how-to-use-your-seedbox-dashboard" },
          { label: "Why I have slow FTP download speeds",               value: "https://wiki.evoseedbox.com/why-i-have-slow-ftp-download-speeds" },
          { label: "OwnCloud",                                          value: "https://wiki.evoseedbox.com/owncloud" },
          { label: "Electorrent set-up",                                value: "https://wiki.evoseedbox.com/electorrent-set-up" },
          { label: "Ombi",                                              value: "https://wiki.evoseedbox.com/ombi" },
          { label: "Tautulli",                                          value: "https://wiki.evoseedbox.com/tautulli" },
          { label: "Setting up Team Speak",                             value: "https://wiki.evoseedbox.com/setting-up-team-speak" },
          { label: "Installing and setting up Clarkson",                value: "https://wiki.evoseedbox.com/installing-and-setting-up-clarkson" },
          { label: "Using Emby",                                        value: "https://wiki.evoseedbox.com/using-emby" },
          { label: "Firefox Torrent Control remote torrent adder",      value: "https://wiki.evoseedbox.com/firefox-torrent-control-remote-torrent-adder" },
          { label: "FileBot Renaming Files",                            value: "https://wiki.evoseedbox.com/filebot-renaming-files" },
          { label: "Chrome remote torrent adder",                       value: "https://wiki.evoseedbox.com/chrome-remote-torrent-adder" },
          { label: "Using electorrent as torrent client",               value: "https://wiki.evoseedbox.com/using-electorrent-as-torrent-client" },
          { label: "How to set up ZNC",                                 value: "https://wiki.evoseedbox.com/how-to-set-up-znc" },
          { label: "Setting up irssi with rutorrent",                   value: "https://wiki.evoseedbox.com/dRBi-setting-up-irssi-with-rutorrent" },
          { label: "Setting up Plex",                                   value: "https://wiki.evoseedbox.com/setting-up-plex" },
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
