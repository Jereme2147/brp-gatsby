import Variables from "../variables.js"
const FormStyle = {
  form: {
    width: "90%",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: "0 10px 10px 10px", 
    width: "100%",
    maxWidth: "800px",
    fontSize: "1.2rem",
    borderRadius: "5px",
    background: `${Variables.white}`,
  },
}

export default FormStyle;