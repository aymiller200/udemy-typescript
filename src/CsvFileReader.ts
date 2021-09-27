import fs from 'fs';

/* 
!This refactor is COMPOSITION: 
    * Characterized by the fact that we had a class called MatchReader that had a reference to some other object that satisfied the DataReader interface

    * Then anytime we call the load method, rather than relying on the Matc Reader to 100% source our data, we instead sort of delegated the actual action of loading up some data to this outside data reader.

    * Benefit to this approach was that we could very easily swap in different styles of reader to customize how the matchRader behanved

    *GENERALLY WE LIKE TO USE COMPOSITION BECAUSE IT IS EASIER TO MAKE AN OBJECT WITH A LOT MORE REUSABLE CODE. KEEPS US FROM HAVING TO DUPLICATE CODE IF WE JUST WANT TO MAKE A SMALL CHANGE TO A PARTICULAR ATTRIBUTE.
            !FAVOR OBJECT COMPOSTION OVER CLASS INHERITANCE
            
!CHARACTERIZED BY A 'HAS A' RELATIONSHIP BETWEEN TWO CLASSES
*/

export class CsvFileReader { //Want to use this class for different csv files
  data: string[] []= [];
  
  constructor(public filename: string) {}

  read(): void {
      this.data = fs.readFileSync(this.filename, {
        encoding: 'utf-8' //with encoding flag we are telling readFilesSync what type of content we expect to find inside of football.csv. We expect there to be text content in there encoded with utf-8. Tell it to return a string to us.
      }).split('\n') //an array of indivdual strings where each string represents one match. So now we can map over this array.
        .map((row: string): string[] => {
          return row.split(',') //an array of arrays, and each inner array represents one match.
        })
        
      
  }
}