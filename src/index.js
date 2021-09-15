import { buildStructure } from './structure.js';
import { generateHome } from './home.js';
import { generateMenu } from './menu.js';
import { generateContact } from './contact.js';
import './style.css';

// Create initial HTML
buildStructure($("#content"));

// Defaults to "home" page
generateHome($("main"));

// Nav event handlers

$("#home").click(function() {
  clearContainer ()
  generateHome($("main"));
});

$("#menu").click(function() {
  clearContainer ()
  generateMenu($("main"));
});

$("#contact").click(function() {
  clearContainer ()
  generateContact($("main"));
});

// Helper function

function clearContainer () {
  $("main").html("")
}
