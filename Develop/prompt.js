const inquirer = require('inquirer');
'use strict';

roleChioce=""
y=""
intern=[]
manager=[]
engineer=[]
EmployeeRoster=[]
function mainPrompt(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'role',
        message: 'What do you want to do?',
        choices: ['Manager','Engineer','Intern',"Done"]
      },
     
    ])
    .then(answers => {
      roleChioce = answers.role;
        promptbranch()
    })};
    
    async function promptbranch(){
        switch (roleChioce) {
            case 'Manager':
               await inquirer.prompt(Manager).then(answers => {
                    manager=['manager',answers.id,answers.officeNumber,answers.email]
                    EmployeeRoster.push(manager);
                    console.log(EmployeeRoster);console.log(manager)
                    mainPrompt();
                   })
              break;
            case 'Engineer':
                await inquirer.prompt(Engineer).then(answers => {
                  engineer=['engineer',answers.id,answers.officeNumber,answers.email]
                  EmployeeRoster.push(engineer);
                  console.log(EmployeeRoster);console.log(engineer)
                  mainPrompt();
                 })
              break;
            case 'Intern':
                await inquirer.prompt(Intern).then(answers => {
                  intern=['intern',answers.id,answers.officeNumber,answers.email]
                  EmployeeRoster.push(intern);
                  console.log(EmployeeRoster);console.log(intern)
                  mainPrompt();
                 })
              break;
            case "Done":
              return
    }}
    let Intern=[{
        type: 'input',
        name:'school',
        message: 'Employee School',
        default: 'msu'  
        },{
            type: 'input',
            name:'id',
            message: 'Employee Id number',
            default: '10'  
            },
            {type: 'input',
            name:'email',
            message: 'Employee Email',
            default: 'Biteme@ahole.com'  }]
    
    let Engineer=[{
        type: 'input',
        name:'gitHub',
        message: 'Employee github account',
        default: 'tonyb'  
        },{
            type: 'input',
            name:'id',
            message: 'Employee Id number',
            default: '10'  
            },
            {type: 'input',
            name:'email',
            message: 'Employee Email',
            default: 'Biteme@ahole.com'  }]


    let Manager=[{
            type: 'input',
            name:'officeNumber',
            message: 'Employee office numeber',
            default: '10'  
            },{
                type: 'input',
                name:'id',
                message: 'Employee Id number',
                default: '10'  
                },
                {type: 'input',
                name:'email',
                message: 'Employee Email',
                default: 'Biteme@ahole.com'  }]
           
    mainPrompt()