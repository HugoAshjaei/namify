const distance = require('jaro-winkler');
const fs = require('fs');
const path = require('path');

const names = fs.readFileSync(path.join(__dirname, 'data/names.txt'), 'utf8').split('\n');

const similarity = (yourName, percent) => {
    return (names.map(name => {
        const distancePercent = distance(yourName, name);
        if (distancePercent > Number(percent)/100) {
            return {
                name,
                percent: distancePercent
            }
        }
    })).filter(Boolean).sort((a, b) => b.percent - a.percent);
};

console.log(similarity('hossein', 80));