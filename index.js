const inquirer = require('inquirer')
const fs = require('fs')


inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'In what state do you live in?',
        name: 'location'
    }, {
        type: 'input',
        message: 'Tell us about you.?',
        name: 'bio'
    }, {
        type: 'input',
        message: 'What is your LinkedIn account?',
        name: 'linkedin'
    },
    {
        type: 'input',
        message: 'What is your Github account?',
        name: 'github'
    }


])

.then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => {
        err ? console.log(err) : console.log('Success')
    })
})