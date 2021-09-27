import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

//Create an object that satifies the 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
//const matchReader = new MatchReader(csvFileReader);
//matchReader.load()
//matchReader.matches

const summary = Summary.winsAnalysisWithHtmlReport('Man United')
const matchReader = MatchReader.fromCsv('football.csv')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)
    


