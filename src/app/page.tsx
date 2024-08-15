import Image from 'next/image';

// Mini descripcion de que hago + enlaces a RRSS
// heading de Educacion con enlaces a los cursos
// heading de Experiencia con enlaces a los proyectos
// heading de Skills con enlaces a los proyectos
// heading de Contacto con enlaces a los proyectos
// Heading de hobbies con enlaces a los proyectos

const MainPage = () => {
  return (
    <main className="w-1/2 md:2/3 sm:w-full mx-auto">
      <div className="flex flex-row justify-between items-center">
        <Image
          src="/perfil.jpg"
          alt="Foto Perfil"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Manuel Martín Morante</h1>
          <p className="text-lg">Desenvolvedor Front-end</p>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
