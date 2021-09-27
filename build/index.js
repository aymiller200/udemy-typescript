"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//Create an object that satifies the 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
//const matchReader = new MatchReader(csvFileReader);
//matchReader.load()
//matchReader.matches
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
