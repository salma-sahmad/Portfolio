import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>The Skills I Have</h5>
      <h2>My Skills</h2>
{/* -------frontend part--------- */}
      <div className="container skills_container">
        <div className="skills_frontend">
            <h3>Frontend Development</h3>
            <div className='skills_content'>
              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>BootStrap</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
            </div>
        </div>
{/* --------------backend part------------- */}
        <div className="skills_backend">
        <h3>Backend Development</h3>
            <div className='skills_content'>
              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='skills_details'>
                <BsFillPatchCheckFill className="skills_details-icon" />
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Skills