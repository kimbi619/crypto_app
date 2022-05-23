// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const shell = require('electron').shell

let mainWindow 
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 700,
    height: 500,
    maxHeight: 500,
    maxWidth: 800,
    // resizable: false,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
            nodeIntegration: true,
            contextIsolation: false,
    }
  })

  // and load the index.html of the app.  
  mainWindow.loadFile('src/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  // let menu = Menu.buildFromTemplate([
  //   {
  //     label: 'menu',
  //     submenu: [
  //       {
  //         label: 'Adjust notification value',
  //         click(){

  //         }
  //         },
  //       {
  //         label: 'CoinMarketCap',
  //         click(){
  //           shell.openExternal('https://www.coinmarketcap.com')
  //         }
  //       },
  //       {type: 'separator'},
  //       {
  //         label: 'Exit',
  //         click(){
  //           app.exit();
  //         }
  //       },
  //     ]
  //   },
  //   {
  //     label: 'File',
  //     submenu: [
  //         {label: 'New File'},
  //         {label: 'New File...'},
  //         {label: 'New Window'},
  //         {type: 'separator'},
  //         {label: 'Open File'},
  //         {label: 'Open Folder'},
  //         {type: 'separator'},
  //         {label: 'Save'},
  //         {label: 'Save As'},
  //         {label: 'This is a really long tab for design'},
  //         {label: 'Save All'},
  //     ]
  //   },
  // ])
  
  Menu.setApplicationMenu(menu)

})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
