import React from 'react'

const skills=[
  {name:"HTML","logo":"/assets/skills/html-1.svg"},
  {name:"CSS","logo":"/assets/skills/css-3.svg"},
  {name:"TailwindCSS","logo":"/assets/skills/tailwind-css-2.svg"},
  {name:"JavaScript","logo":"/assets/skills/javascript-1.svg"},
  {name:"TypeScript","logo":"/assets/skills/typescript-2.svg"},
  {name:"React","logo":"/assets/skills/react.svg"},
  {name:"Angular","logo":"/assets/skills/angular-icon-1.svg"},
  {name:"Flutter","logo":"/assets/skills/flutter-logo.svg"},
  {name:"NodeJS","logo":"/assets/skills/nodejs-1.svg"},
  {name:"PHP","logo":"/assets/skills/php-6.svg"},
  {name:"Java","logo":"/assets/skills/java.svg"},
  {name:"Python","logo":"/assets/skills/python-5.svg"},
  {name:"C#","logo":"/assets/skills/c--4.svg"},
  {name:"MySQL","logo":"/assets/skills/mysql-ar21.svg"},
  {name:"PostgreSQL","logo":"/assets/skills/postgresql.svg"},
  {name:"Firebase","logo":"/assets/skills/firebase-1.svg"}
]

const Skills = () => {
  return (
    <section className="flex flex-col mt-25 justify-center text-white mb-5" id='skills'>
        <h2 className='text-3xl font-bold text-center mb-8'>
            My <span className='text-primary'>Skills</span>
        </h2>
        <div className="grid justify-center">
          
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
    {skills.map((skill)=>(
            <div className="bg-[#2C2C2C]  rounded shadow-md w-52 py-6 text-xl text-center place-items-center justify-center ">
              {skill.name}
            <img src={skill.logo} alt="" className='h-15 w-20 mt-3' />
          </div>
          ))}
  </div>
</div>
    </section>
  )
}

export default Skills