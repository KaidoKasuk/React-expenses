function ButtonTwo() {
  const styles = {
    //all styles here need to be camel
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={styles}>INLINE</button>;
}

export default ButtonTwo;
