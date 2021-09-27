import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) { }

  run(matches: MatchData[]): string {
    let wins = 0;

    // [10/08/2018, Man United, Leicester, 2, 1, H, A Marriner]
    //    0            1           2       3  4  5   6
    //Want to find whenever Man United was the Home team and the home team won, or whenever Man United was the Away team and the away team won.
    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`
  }
}