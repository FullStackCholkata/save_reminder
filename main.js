// Backend of the Save Reminder app
// This file is responsible for the main process of the Electron application

// Imports
const path = require('path');
const { app, BrowserWindow } = require('electron');

// Constants
const isMac = process.platform === 'darwin';

// Function to create the main application window
const createMainWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 400,
		height: 500
	})

	mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

// Event listener for when the app is ready; opens the main window
app.whenReady().then(() => {
	createMainWindow()

	app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
});

// Mac specific: dont't quit the app when all windows are closed
app.on('window-all-closed', () => {
	if (!isMac) {
		app.quit();
	}
});
