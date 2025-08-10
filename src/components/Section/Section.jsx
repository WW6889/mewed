import './Section.css'

const Section = ({ title, children, id }) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default Section