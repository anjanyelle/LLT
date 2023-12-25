
    import React, { useState } from 'react';
    import { Button, Input, message, Steps, theme } from 'antd';
    
    import '../build.css'
import Buildtable from './Buildtable';
     const Introduction=() =>{
      const { token } = theme.useToken();
      const [current, setCurrent] = useState(0);
      const [inputValue, setInputValue] = useState(''); // State for the input value
    
      const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };
    
      const steps = [
        {
          title: 'Introduction',
          content: <>
          <div   style={{marginTop:'2rem',}}>
          <Buildtable />
          <h6 id="profile">STATEMENT OF PURPOSE :-</h6>
          <p style={{ marginTop: "1rem" }}>
                      In the scenario where you have a background in mechanical
                      engineering and professional experience in the mechanical
                      field but are looking to transition to a master's in
                      Computer Science and Engineering (CSE), it's crucial to
                      effectively communicate your motivations, relevant skills,
                      and how your unique background enhances your candidacy.
                    </p>



                    <br></br>
                    <h6>Why this Course - Key Emphasis Section :-</h6>
                    <p>
                      <strong >Introduction:</strong> In the introduction, you
                      want to grab the reader's attention by clearly stating the
                      academic field you are passionate about. Rather than
                      beginning with personal details, dive into the subject
                      matter. Explain what aspects of this field interest you
                      and why. This could include specific experiences, classes,
                      or personal moments that sparked your interest. Convey
                      your enthusiasm for the subject and provide a brief
                      glimpse into what you hope to achieve within this domain.
                    </p>
                    <br></br>
                    <h6>Mistakes that need to be taken care of:-</h6>
                    <ul>
                      <br></br>
                      <li id="background">
                        <strong>Avoid Ambiguity:</strong> Clearly articulate why
                        this field captures your interest. Vague statements may
                        leave the reader unsure about your genuine passion.
                      </li>
                      <li>
                        <strong>Steer Clear of Clichés: </strong>Be original in
                        expressing your interest. Avoid clichés that might make
                        your introduction sound generic.
                      </li>
                    </ul>
                    <br></br>
           
            </div></>,
        },
        {
          title: 'background',
          content: <>
      <div className='martop'  > <p>
                      <strong>Background:-</strong> This section is an
                      opportunity to showcase your academic and, if applicable,
                      professional journey. Detail your academic achievements,
                      focusing on relevant courses or projects that have
                      prepared you for the desired program. If you have work
                      experience, highlight how it has contributed to your
                      skills and knowledge. In the case of extracurricular
                      activities, emphasize those that demonstrate skills
                      applicable to the academic and professional world.
                    </p>
                    <p>
                      <strong>Mistakes that need to be taken care of:</strong>
                    </p>
                    <p>
                      <strong>Irrelevant Details:- </strong>While providing your
                      background, stay focused on elements that directly
                      contribute to your suitability for the program. Avoid
                      unnecessary details.{" "}
                    </p>
                    <p>
                      <strong>Overemphasis on Grades:- </strong> While academic
                      achievements are important, balance the discussion with
                      other aspects of your background to present a holistic
                      picture.
                    </p>   </div> </>,
        },
        {
            title: 'Course',
            content: <>  <div class="alert alert-info martop" role="alert">
            <p>
              <strong>
                Why this Course - Key Emphasis Section :-
              </strong>
            </p>
            <p>
              <strong>What to Include:- </strong>
            </p>
            <p>
              <strong>1. Motivation for Transition:-</strong> Clearly
              articulate your motivation for transitioning from
              mechanical engineering to CSE. Explain the factors that
              led to this decision, such as a growing interest,
              industry trends, or a desire for a new challenge.
            </p>
            <p>
              <strong>
                2. Relevant Skills from Mechanical Engineering::-
              </strong>
              Highlight skills from your mechanical engineering
              background that are transferable to CSE. This could
              include problem-solving, analytical thinking, project
              management, or any programming skills you may have
              developed.
            </p>
            <p>
              <strong>
                3. Professional Experience in Mechanical Field:-
              </strong>{" "}
              Discuss your professional experience in the mechanical
              field. Emphasize projects, responsibilities, or
              achievements that showcase your adaptability, technical
              prowess, and any intersection with CSE concepts or
              technologies.
            </p>
            <p>
              <strong>
                4. Self-Learning and Skill Development::-
              </strong>{" "}
              If applicable, mention any self-learning initiatives,
              online courses, or projects you undertook to build
              foundational CSE skills. This demonstrates your
              proactive approach to acquiring the necessary knowledge.{" "}
            </p>
            <p>
              <strong>5. Alignment with Career Goals:-</strong>{" "}
              Clearly state how the master's program in CSE aligns
              with your career goals. Discuss specific aspects of the
              program, such as courses, specializations, or research
              opportunities, that will help you achieve your
              objectives in the tech industry.
            </p>
            </div>
            </>,
          },
          {
            title: 'Goals',
            content: <>
            <div className='martop'></div>
              <p >
                        <strong>How to Pen It:</strong>
                      </p>
                      <li>
                        Begin by expressing your motivation for transitioning
                        from mechanical engineering to CSE. Clearly articulate
                        your passion for the field and the factors that
                        influenced your decision.
                      </li>
                      <li>
                        Showcase skills from your mechanical engineering
                        background that are applicable to CSE, demonstrating
                        your ability to bring a unique perspective to the
                        program.
                      </li>
                      <li>
                        Discuss your professional experience in the mechanical
                        field, emphasizing projects or responsibilities that
                        have equipped you with valuable skills relevant to CSE.
                        Highlight any exposure to programming or technology
                        integration.
                      </li>
                      <li>
                        Mention any self-learning initiatives or courses you
                        have undertaken to prepare for the transition. Emphasize
                        your commitment to acquiring the necessary skills
                        independently.
                      </li>
                      <li>
                        Conclude by summarizing how your unique background,
                        skills, and experiences make you a strong candidate for
                        the master's program in CSE. Express your eagerness to
                        contribute to the program and leverage your diverse
                        background in the tech industry.
                      </li>
                      <li></li>
            </>,
          },
          {
            title: 'Second',
            content: <>
            
            </>,
          },
      ];
    
      const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
      }));
    
      const contentStyle = {
        // lineHeight: '260px',
        // textAlign: 'center',
        // color: token.colorTextTertiary,
        // backgroundColor: token.colorFillAlter,
        // borderRadius: token.borderRadiusLG,
        // border: `1px dashed ${token.colorBorder}`,
        // marginTop: 16,
      };
    
      return (
        <>
          <Steps current={current} items={items} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success(`Processing complete! Input: ${inputValue}`)}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: '0 8px',
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </>
      );
    };
    
    export default Introduction;
    