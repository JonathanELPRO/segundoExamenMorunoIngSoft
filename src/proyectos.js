
function buscarProyectoPor(nombre, proyectos){
  const TAMANIOPROYECTOS=proyectos.length
  if(TAMANIOPROYECTOS==0)
    {
      return "No existen proyectos"
    }
  for (let i=0;i<TAMANIOPROYECTOS;i++){
    if (proyectos[i]==nombre)
      {
        return proyectos[i]
      }
  }
  return proyectos[0]
}
export default buscarProyectoPor;
