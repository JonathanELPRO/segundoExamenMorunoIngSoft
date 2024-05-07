
function buscarProyectoPor(nombre, proyectos){
  const TAMANIOPROYECTOS=proyectos.length
  if(TAMANIOPROYECTOS==0)
    {
      return "No existen proyectos"
    }
  return proyectos[0]
}
export default buscarProyectoPor;
