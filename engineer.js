const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = this.githubUsername
    }
}

const manager = new Engineer()

module.exports = Engineer