import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]; //defined a new tuple inside of our app called match data.

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {

    //we are taking in the array of strings and then do some conversion process, sticking them all into an array, and converting it.
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, //type assertion: Trying to override tyescripts default behavior. 'H', 'A', 'D'
      row[6]

    ]

  }
}