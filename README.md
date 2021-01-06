# PCS_course_simulator_React
Browser game that simulates programming Course. Project made with React. 

Instructions to quick launch in localhost:
-clone this repo
-open repo in editor
-run in terminal: npm i 
-run in terminal: npm install -g json-server
-run in terminal: npm i react-router-dom --save
-npm install react-sticky
-launch app: npm start
-launch json server: json-server --watch db.json --host 127.0.0.1
-access app through localhost 3001
-access json server through localhost 3000

Game instructions:
--WIP--choose login
--WIP--log in or sign up
-choose start new game
-type in name and proceed to game action screen
-choose from available options-buttons to progress game
-you can also use items from inventory. Your inventory at the start should be empty
-player's stats have impact on game events and exam results, zero in any stat means serious trouble with exams and final project
-game is divided into 7 stages, first six ending with exam, seventh is final project
-player's health going down to zero, failing/skipping/missing(should be 3 days to do) second chance exam, failing to give back final project on time(should be 5 days) or skipping too many classes, results in game over
- after finishing game or game over player staying in data base as trophy

Latest major bugs:
-when creating new player, it replaces (sometimes) last player on player's list

Latest dodgy patches:
-player inventory and whole app looks like is sometimes restarting server, this was when player used to be updated with null and crashed whole app, breaking json file. Major cases were: creating new player, player's inventory, event draw. This was 'patched' with reloading anytime app catches undefined or null where usually should return. Side effect of this is sometimes jumping screen, as it will keep reloading until data loads.  
