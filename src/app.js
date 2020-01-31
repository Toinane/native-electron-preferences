const { app, BrowserWindow, systemPreferences } = require('electron');

const colors = [
    'alternate-selected-control-text',
    'control-background',
    'control',
    'control-text',
    'find-highlight',
    'grid',
    'header-text',
    'highlight',
    'keyboard-focus-indicator',
    'label',
    'link',
    'placeholder-text',
    'quaternary-label',
    'scrubber-textured-background',
    'secondary-label',
    'selected-content-background',
    'selected-control',
    'selected-control-text',
    'selected-text-background',
    'selected-text',
    'separator',
    'shadow',
    'tertiary-label',
    'text-background',
    'text',
    'under-page-background',
    'unemphasized-selected-content-background',
    'unemphasized-selected-text-background',
    'unemphasized-selected-text',
    'window-background',
    'window-frame-text'
];

app.on('ready', () => {
    colors.map(color => {
        console.log(
            '--' + color + ':',
            systemPreferences.getColor(color) + ';'
        );
    });

    console.log(systemPreferences.getAccentColor());

    const win = new BrowserWindow({
        width: 520,
        minimizable: false,
        maximizable: false,
        resizable: false,
        fullscreenable: false,
        titleBarStyle: 'hidden',
        acceptFirstMouse: true
    });

    win.loadURL('file://' + __dirname + '/views/macos.html');
});
