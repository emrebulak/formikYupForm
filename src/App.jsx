import React from "react";
import Header from "./components/Header";
import logo from "./assets/img/coin.png";
import { useFormik } from "formik";
import { schema } from "./constant/schema";
import { inputArray } from "./constant/constant";
import Inpul from "./components/Inpul";


const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("Values :", values);
    },
  });

  return (
    <div className="p-3">
      <Header />
      <div className="mt-3 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <img width={50} height={50} src={logo} alt="Logo" />
          <h1>Coinmania</h1>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-3">
          {
            inputArray.map((data, index)=> <Inpul key={index} formik={formik} data={data}/>)
          }
          <div className="mt-4">
            <button disabled={!formik.isValid} className="btn btn-primary w-100">Gönder</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
