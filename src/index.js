const {electron }= require('electron')
const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path')

const notificationBtn = document.querySelector('#notificationBtn')
let mainWindow

notificationBtn.addEventListener('click', () =>{
    console.log('click')
    const modalPath = path.join('file://', __dirname, 'add.html')
    mainWindow = new BrowserWindow({
        width: 700,
        height: 500
      })
    mainWindow = BrowserWindow
    mainWindow.on('close', mainWindow = null)
    mainWindow.loadURL(modalPath)
    mainWindow.show()


})
