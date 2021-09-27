import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader'
/* 
!This refactor is COMPOSITION: 
    * Characterized by the fact that we had a class called MatchReader that had a reference to some other object that satisfied the DataReader interface

    * Then anytime we call the load method, rather than relying on the Matc Reader to 100% source our data, we instead sort of delegated the actual action of loading up some data to this outside data reader.

    * Benefit to this approach was that we could very easily swap in different styles of reader to customize how the matchRader behanved

    *GENERALLY WE LIKE TO USE COMPOSITION BECAUSE IT IS EASIER TO MAKE AN OBJECT WITH A LOT MORE REUSABLE CODE. KEEPS US FROM HAVING TO DUPLICATE CODE IF WE JUST WANT TO MAKE A SMALL CHANGE TO A PARTICULAR ATTRIBUTE.
        !FAVOR OBJECT COMPOSTION OVER CLASS INHERITANCE

!CHARACTERIZED BY A 'HAS A' RELATIONSHIP BETWEEN TWO CLASSES
*/
interface DataReader {
  read(): void;
  data: string[][]
}

export class MatchReader {
  //Use static class method to return a preconfigured instance of the class
  static fromCsv(filename:string): MatchReader {
      return new MatchReader(new CsvFileReader(filename))
  }

  matches: MatchData[] = []
  constructor(public reader: DataReader) { }

  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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
    })
  }
}

