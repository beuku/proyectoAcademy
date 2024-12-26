import "../styless/HeaderStyless.css"

function HeaderComponemts() {
  return (
    <>
        <nav className="nav">
            <li className="li">
                <span className="link">Inicio</span>
            </li>
            <li className="li">
                <span className="link">Sobre el juego</span>
            </li>
            <li className="li">
                <span className="link">DevLog</span>
            </li>
            <li className="li">
                <span className="link">Comunidad</span>
            </li>
            <li className="li">
                <span className="link">Descarga</span>
            </li>
            <li className="li">
                <span className="link">Aviso legal</span>
            </li>
        </nav>
        <header className="header">
            <h1 className="title">ShaqVeyter</h1>
        </header>
    </>
  )
}

export default HeaderComponemts