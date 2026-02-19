// assets/stimulus_bootstrap.js

import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

// Démarrage de Stimulus
const application = Application.start();

// Chargement automatique des controllers présents dans ./controllers
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

// Ici tu peux enregistrer des controllers personnalisés, par exemple :
// import SomeController from './controllers/some_controller.js';
// application.register('some', SomeController);
