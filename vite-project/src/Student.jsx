import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>Student: {props.isStudent ? "yes" : "no"}</p>
    </div>
  );
}
Student.protoTypes = {};
export default Student;
