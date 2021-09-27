import fs from 'fs';

/* 
!This refactor is with INHERITANCE: 
    *Have the abstract class of CsvFileReader, then we have a child class of MatchReader.
    *any time we inherit from a parent class we refer to that as inheritance

! CHARACTERIZED BY AN 'IS A' RELATIONSHIP BETWEEN TWO CLASSES

!Generics:
  *Like function arguments, but for types in class/function definitions. 
  *Allows us to define the type of a property/argument/return value at a future point. 
  *Used Heavily when writing reusable code.
  * Treat generics like function arguments. 
  * By convention we usually refer to generics as <T>
  
  !EX: 
  class HoldAnything<TypeOfData> {
    data: TypeOfData;
  }

  const holdNumber = new HoldAnything<number>();
  holdNumber.data = 123; 

  const holdString = new HoldAnything<string>();
  holdString.data = 'asfsda'
  */
export abstract class CsvFileReader<T> { //Want to use this class for different csv files
  data: T[] = [];
  
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
      this.data = fs.readFileSync(this.filename, {
        encoding: 'utf-8' //with encoding flag we are telling readFilesSync what type of content we expect to find inside of football.csv. We expect there to be text content in there encoded with utf-8. Tell it to return a string to us.
      }).split('\n') //an array of indivdual strings where each string represents one match. So now we can map over this array.
        .map((row: string): string[] => {
          return row.split(',') //an array of arrays, and each inner array represents one match.
        })
        .map(this.mapRow)  
  }
}