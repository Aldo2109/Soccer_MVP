// Three arrays with data to randomly create the MVP
const Names = ['Marco Reus', 'Christiano Ronaldo', 'Lionel Messi', 'Braut Erling Haarland', 'Robert Lewandowski', 'Manuel Neuer', 'Sadio Mané', 'Virgil van Dijk'];
const Teams = ['Bayern München','Borussia Dortmund','Juventus Turin','FC Barcelona','FC Liverpool'];
const Games = [365, 755, 620, 30, 69, 88, 177];
const Year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

//function that will ramdomly generate an MVP with some stats
const generateMVP = () => 
{
    
let generateName = Names[Math.floor(Math.random() * Names.length)];
let generateTeam = Teams[Math.floor(Math.random() * Teams.length)];
let generateGames = Games[Math.floor(Math.random() * Games.length)];
let generateYear = Year[Math.floor(Math.random() * Year.length)];

return `The soccer MVP of ${generateYear} is: ${generateName}, playing for ${generateTeam} with a track record of ${generateGames} Games. Congratulations, ${generateName}`;

};

console.log(generateMVP());