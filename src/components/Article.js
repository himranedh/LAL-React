import Stats from './Stats'

const Article = () => {
  return (
    <>
      {/* Article
      https://www.nba.com/lakers/news/2020-21-lakers-season-summary */}
      <div>
        <div className="p-4">
          <p className="author d-flex justify-content-between p-4">
            <strong>Mike Trudell</strong>June 25, 2021 (1:04 PM PDT)
          </p>
        </div>
        <p className="p-4">
          With LeBron James and Anthony Davis combining to miss over half the pandemic-shortened 72-game season, L.A. wound up with the No. 7 seed, before falling 4-2 to No. 2 Phoenix in Round 1. The Lakers took home court from the Suns and led 2-1 before AD went down with a groin injury just ahead of halftime of Game 4, and Phoenix capitalized with three straight wins.
        </p>
        <p className="p-4">
          It’s hard to separate the physical and mental toll the longest season in NBA history took on the Lakers, who had only 60 days between Game 6 and their first preseason game, on Dec. 11. Some might call it the Bubble Tax. Miami (0-4 to MIL) and Boston (1-4 to BKN), the two Eastern Conference finalists in the Bubble, both lost in Round 1 in 2021, while LAL’s 2020 WCF opponent, Denver, managed to beat a banged up Portland team in Round 1 before being swept by Phoenix in Round 2.
        </p>
        <p className="p-4">
          Injuries happen to every NBA team, every season, but when those injuries are to star players like LeBron James and AD, they come to define the season. On Media Day leading into the season, Davis hinted at the difficulty of the short offseason, especially for him and LeBron.
        </p>
        <p className="p-4">
          “Both of us, we want to play, but it is a quick turnaround,” he said, days after signing a maximum extension with the Lakers. “We have to make sure we’re able to have our bodies healthy enough to make sure we can repeat … hopefully it all ends well where we’re able to get our rest but still get out there and compete.”
        </p>
        <p className="p-4">
          However, Feb. 14 was also when Davis injured his calf/Achilles area against Denver, on the same leg where some issues kept him out the previous week. He wouldn’t return until April 22, and the All-NBA First Teamer started only 36 of 72 games.
        </p>
        <p className="p-4">
          So, despite closing the season with five straight wins to finish 42-30, the Lakers had to beat Golden State in a difficult play-in matchup, with the NBA having instituted a mini tournament for the rights to the No.'s 7 and 8 seeds. With a 103-100 victory clinched by a deep LeBron 3, LAL locked in that 7 seed.
        </p>
        <p className="p-4">
          The Lakers drew Phoenix, the NBA’s healthiest team in the regular season. Indeed, Chris Paul played 70 games for Phoenix, and Devin Booker 67, while Mikal Bridges didn’t miss a game, and Deandre Ayton started the first 69 until resting for the final three ahead of Round 1. The Suns won Game 1 convincingly, but it was the presence of Davis that Phoenix couldn’t handle in Games 2 and 3, as he went for 34 points in each win.
        </p>
        <p className="p-4">
          Then his groin injury tilted the balance of the series.
        </p>
        <p className="p-4">
          The injuries also made it difficult for the players to develop cohesion with one another on the floor. Vogel was able to keep whatever players were on the floor in their defensive shape, and draw out the type of energy it takes to be good on that end most every night, but the offense struggled without LeBron most of all, and certainly AD as well. The Lakers finished the season ranked 24th on that end.
        </p>
      </div>

      <Stats />

      {/* Next Season */}
      <div>
        <p className="p-4">
          <strong>Future Outlook</strong><br/>Even with all the missed time, LeBron still earned a spot on the All-NBA Second Team, his record 17th All-NBA appearance (13 First Teams). He was the leading MVP candidate before his injury, continuing to refuse to show any signs of showing down in his 18th NBA season, at age 36.
        </p>
        <p className="p-4">
          In averaging 25.0 points per game to lead the Lakers, LeBron secured his 17th consecutive season, adding to his standing NBA record, with the next closest players reaching 12 seasons (Michael Jordan, Kobe Bryant, Kevin Durant and Karl Malone). LeBron closed the gap on Malone for second on the All-Time scoring list (36,928 to 35,367). And, oh yeah, he also ranks 8th on the NBA’s All-Time assist list after leading LAL with 7.8 per game, trailing No. 7 Oscar Robertson 9,887 to 9,696, with Magic Johnson (10,141) also in view
        </p>
        <p className="p-4">
          AD, Caruso*, KCP and Schroder all received All-Defensive Team votes in recognition of the team that finished the year ranked No. 1 in defensive efficiency despite all of the injury absences, and Frank Vogel deserves considerable credit for that.<br/><i>*Caruso finished third in the NBA in defensive rating.</i>
        </p>
        <p className="p-4">
          Now, here’s the good news for the Lakers: they have a full offseason to get their bodies back on track for the 2021-22 season. After a 71-day offseason last year, they’ll get all of June, July, August and September to get right mentally and physically before training camp starts in October.
        </p>
        <p className="p-4">
          And then, once again, the goal of a team built around LeBron and AD will be simple, in Rob Pelinka’s words: “We have an insatiable desire to bring banner No. 18 here.”
        </p>
      </div>
    
      {/* Youtube Video */}
      <div className="ratio ratio-16x9">
        <iframe className="p-4" src="https://www.youtube.com/embed/hlWJxBuk8Uo?si=4ht-N1mhOApKLkGe" title="YouTube video" allowFullScreen>
        </iframe>
      </div>
    </>
  )
}

export default Article