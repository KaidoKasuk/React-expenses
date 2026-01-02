import PropTypes from "prop-types";

// function Student(props) {
//   return (
//     <div className="student">
//       <p>name: {props.name}</p>
//       <p>age: {props.age}</p>
//       <p>Student: {props.isStudent ? "yes" : "no"}</p>
//     </div>
//   );
// }

//et konsool sulle arusaadava veateate saadaks ja endal lihtsam mis type prop on
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

//enam ei toota??????????
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

//chati lahendus opetajalt kusib
function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="student">
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>Student: {isStudent ? "yes" : "no"}</p>
    </div>
  );
}
export default Student;
