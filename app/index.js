'use strict';

var path = require('path');
var spawn = require('child_process').spawn;
var request = require('request');

var app = require('app');
var Tray = require('tray');
var Menu = require('menu');
var MenuItem = require('menu-item');
var tray;

require('crash-reporter').start();
var menu = new Menu();

app.dock.hide();

function createTrayMenu() {

		menu.append(new MenuItem({label: '⧉ Browsersverige'}));
		menu.append(new MenuItem({type: 'separator'}));
		
		var url = 'http://browsersverige.se/browsers.json';

		request({
				method: 'GET',
				url: url
			}, function(error, response, body) {

				if (!error && response.statusCode == 200) {
					var body = JSON.parse(body);

					for(var i = 0; i < body.length; i++) {
						populateMenu(body[i].browser+': '+body[i].market+' %');
					}

					addSeparator();

				}
		});
}

function populateMenu(browser) {
	if(browser) {
		menu.append(new MenuItem({
			label: browser
		}));
	}
}

function addSeparator() {
	
	menu.append(new MenuItem({type: 'separator'}));
	
	menu.append(new MenuItem({
		label: 'Om',
		click: function () {
			spawn('open', ['http://browsersverige.se/om']);
		}
	}));

	menu.append(new MenuItem({
		label: 'www.browsersverige.se',
		click: function () {
			spawn('open', ['http://browsersverige.se']);
		}
	}));

	menu.append(new MenuItem({type: 'separator'}));
	
	menu.append(new MenuItem({
		label: 'Avsluta',
		click: app.quit,
	}));

	tray.setContextMenu(menu);

	return menu;
}

app.on('ready', function () {
	tray = new Tray(path.join(__dirname, '/menubar-icon.png'));
	tray.setPressedImage(path.join(__dirname, 'menubar-icon-alt.png'));

	createTrayMenu();
	populateMenu();

});	