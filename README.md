# PCS_course_simulator_React
Browser game that simulates programming Course. Project made with React. Contains: starting/login page, game body, final score leader board, special game event popus (different for morning evening and weekend), success game end screen with several ending possibilities, game over screen, warning popups, exam day screen, exam result screen.
Six modules, each cosists of: 4-day learning phase, one day exam phase, weekend phase. One(or two) exam re-tries week after in case of failed exam. After six weeks if survived - final project phase.
Random events to be drawn/not drawn after each day. Either positive or negative depending on luck. First week one possible event, week 2, 3 4 - max two events. Week 5, 6 - max three events. Pre-project - drawing four events. Player stats: health, attitude, sleep, knowledge, focus, luck, points, name, status(buffs and debuffs). **Optionally: Inventory to keep special items that could be drawn from events. Items that modify some stat, give points, gives third chance with exam, add buff, stop negative debuff, clear all buffs and debuffs. Will be using Python course as source for this one.

Using React witch fetch
Using firebase.
Saving only possible after completing full week.




Gameplay: 
Title screen appears, player signs up for new game or logs in to continue.
Engine draws entry stats and renders day 1 screen for new game and last time progress for players coming back to game.
Player knows his/her stats, it is day one, morning. Player has few choices to make: keep sleeping, go to school, skip school. Option to use item. Some items automaticcaly work as a move done, other ones work instantly and player still can choose what to do.
Engine adds or deducts stat points, draws IF random event occurs. If yes, draws random event. Depending on luck factor, positive or negative event.
Engine modifies stats if needed. Adds buffs/debuffs and items in case of such event. Buffs and debuffs and stats go to data base.
Day 1 afternoon screen appears with choices: do homework, go straight to sleep, go to party, choice modifies stats accordingly. Must do events can narrow choice options.
Event draw.
Day 2 morning
Repeat until day 4, upcoming exam popup appears. Choices, draw, evening choices.
Draw
Exam day: choice to have an exam or chicken out(busted exam will deduct points, player can use chickenning out to avoid it with low stats and redo exam). If player chooses to continue, engine draws points and result if passed or failed. Then shows proper screen and saves status.
Weekend event draw
Weekend screen and choices what to do: party, rest, extra work, aid family, charity.
Week 2 - second module goes, engine now draws up to two events.
Exam correction occurs day 2(tuesday) and day 4 thursday(in case of third chance) and takes whole day, player still can use item.
Repeat until week 6 ends
Final project - engine draws ending result depending on overall score, screen renders appropriate ending screen.
Hall of fame appears with top 3 players and player ranking underneath. Options to exit to main menu or retry.

