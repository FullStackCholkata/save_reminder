// Backend of the Save Reminder app
// This file is responsible for the main process of the Electron application

const path = require('path');
const { app, BrowserWindow } = require('electron');

const createMainWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 400,
		height: 500
	})

	mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
	createMainWindow()
});