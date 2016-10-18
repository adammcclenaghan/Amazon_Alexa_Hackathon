'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Belfast Facts';

/**
 * Array containing Belfast facts.
 */
var FACTS = [
    "Belfast is second largest city on the island of Ireland.",
    "The land that makes up Belfast has been occupied since the Bronze Age.",
    "Snow typically falls in Belfast less than 10 days a year.",
    "On average, it rains 157 days a year in Belfast, less than Scotland, but more than Dublin.",
    "Actor Liam Neeson was born in Belfast and had his stage premier at Belfast’s Lyric Theater.",
    "Women could hold any office at Queen’s University in Belfast, twelve years before they could study at Oxford.",
    "John Wood Dunlop invented the pneumatic tyre in Belfast.",
    "One third of the population of Northern Ireland lives in Belfast.",
    "Belfast has the world's largest dry dock.",
    "Oscar Wilde thought that there was only one beautiful building in Belfast. It is now a Mark's and Spencer's.",
    "Over seven million people visit Belfast each year.",
    "There are five thousand acres of park in Belfast.",
    "Belfast Zoo is home to the only group of purple faced langurs in Europe."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random belfast fact from the belfast facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a Belfast fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};