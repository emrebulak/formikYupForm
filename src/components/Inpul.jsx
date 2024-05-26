import React from "react";

const Inpul = ({ formik, data }) => {
  const { label, name, type } = data;
  return (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
        className={`form-control p-2 ${
          formik.touched[name] && formik.errors[name] && "is-invalid"
        }`}
      />

      <h6 className="text-danger mt-1">
        {formik.touched[name] && formik.errors[name] && formik.errors[name]} &nbsp;
      </h6>
    </div>
  );
};

export default Inpul;
