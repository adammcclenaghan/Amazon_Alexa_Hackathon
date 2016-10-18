'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Sweden Facts';

/**
 * Array containing sweden facts.
 */
var FACTS = [
    "Sweden is officially called the Kingdom of Sweden.",
    "While being part of the EU Sweden has retained its own currency the krona.",
    "Sweden has a population of 9.5 million people as of 2012.",
    "The capital and largest city in Sweden is Stockholm.",
    "Sweden is the 3rd largest EU country in land area, after France and Spain.",
    "The astronomical lense is a Swedish invention.",
    "Sweden has the highest number of nuclear plants per capita.",
    "Sweden ranks second in Europe (after Finland) in terms of technological achievement.",
    "89% of people in Sweden speak English.",
    "86% of Swedes live in cities.",
    "The average swede works 1644 hours per year.",
    "Only 1% of Sweden's waste goes to a rubbish dump.",
    "There are 56 days of daylight in summer in Sweden."
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
        // Get a random space fact from the sweden facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a sweden fact, or, you can say exit... What can I help you with?";
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