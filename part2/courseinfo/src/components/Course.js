const Header = ({ course }) => <h1>{course}</h1>
const Total = ({parts}) => {
  return(
    <b>Total of {parts.reduce((sum,part) =>(sum+=part.exercises),0)} exercises</b>
  )
}

const Part = ({ part }) => {
  return (
    <p>
    {part.name} {part.exercises}
  </p>
  )
  }

const Content = ({ parts }) => 
  <>
  {parts.map((part) => (
   <Part part={part} />
  ) )}
    
  </>

const Course = ({course}) => {
  return(
    <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>
  )
}

export default Course