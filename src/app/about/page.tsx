import React from 'react'

const AboutMePage: React.FC = () => {
  const name = 'John Doe'
  const age = 30
  const bio =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="mb-12 text-3xl font-bold">About Me</h1>

        <div className="flex gap-12">
          <div>
            <p className="font-bold">Name: </p>
            <p> {name}</p>
          </div>
          <div>
            <p className="font-bold">Age: </p>
            <p>{age}</p>
          </div>
          <div>
            <p className="font-bold">Bio: </p>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMePage
