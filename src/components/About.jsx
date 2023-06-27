import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full  h-screen bg-gradient-to-b from-gray-800 to-black text-white '>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Acerca de</p>
        </div>

        <p className='text-xl mt-20'>
        Emiliano ha invertido innumerables horas en adquirir habilidades en tecnologías clave para la programación front-end, como HTML, CSS y JavaScript. Ha realizado cursos en línea, asistido a talleres y participado en proyectos personales para poner en práctica lo aprendido y fortalecer sus habilidades.
        </p>

        <br />

        <p className='text-xl'>
          Su capacidad de aprendizaje rápido y su mentalidad abierta le permiten adaptarse rápidamente a nuevos conceptos y tecnologías. Además, su formación en técnico electromecánico le ha brindado una base sólida en el análisis de problemas y la resolución de los mismos, habilidades que pueden transferirse a la programación front-end de manera efectiva.
        </p>
      
      </div>


    </div>
  );
}

export default About;
