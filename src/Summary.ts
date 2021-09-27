import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
//We don't have to export an interface. Other objects inside of TS can implicitely satisfy an interface.

//In this case we can optionally use an interface definition to help us satisy that interface when we write out a class. To do that we need to export that interface.
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisWithHtmlReport(team:string):Summary {
      return new Summary(
        new WinsAnalysis(team),
        new HtmlReport()
      )
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

  buildAndPrintReport(matches: MatchData[]): void {
     const output = this.analyzer.run(matches);
     this.outputTarget.print(output);
  }
}

