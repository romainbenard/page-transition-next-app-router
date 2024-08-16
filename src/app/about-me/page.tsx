import React from 'react'

const AboutMePage: React.FC = () => {
  const name = 'John Doe'
  const age = 30
  const bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

  return (
    <section className="py-12">
      <div className="container">
        <h1>About Me</h1>

        <div className="flex gap-12">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Bio: {bio}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMePage
