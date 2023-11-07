import * as monaco from 'monaco-editor';
import './style.css';

// Предполагается, что у вас есть элемент с ID 'app' в вашем HTML
const appDiv = document.getElementById('app');

// Инициализация Monaco Editor
const editor = monaco.editor.create(appDiv, {
    value: document.getElementById("schema").innerHTML, // Начальное значение редактора
    language: 'yaml', // Язык по умолчанию для редактора
    theme: 'vs-dark',
    minimap: {
        enabled: true,
    },
});