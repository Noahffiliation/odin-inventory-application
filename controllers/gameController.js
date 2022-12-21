const Game = require('../models/game');
const Genre = require('../models/genre');
const { body, validationResult } = require('express-validator');
const async = require('async');

exports.index = (req, res) => {
    async.parallel({
        game_count(callback) {
            Game.countDocuments({}, callback);
        },
        genre_count(callback) {
            Genre.countDocuments({}, callback);
        },
    },
    (err, results) => {
        res.render("index", {
            title: "Inventory Home",
            error: err,
            data: results,
        });
    });
}