import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./css/common.css";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import clock from "./icons/Clock.svg";
import school from "./icons/Inspection.svg";
import { SchoolList } from "./SchoolList";
import { useAppState } from "./state";

export const SchoolRegistration = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const watchPassword = watch("password");
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/SchoolManagement");
  };

  const handleBlur = (e) => {
    const formData = getValues();
    console.log("OnBlur: Form data filled inn:", formData);
  };
  return (
    <Form onBlur={handleBlur} onSubmit={handleSubmit(saveData)}>
        <h3> School Registration</h3>

        <Field error={errors?.schoolName}>
          <div className="form-row">
            <label>
            <img src={school} alt="clock" className='icons'/>
              Name of the School
            </label>
            <SchoolList 
            className="dropdown"
            
            />
            {/* <input
              onBlur={handleBlur}
              {...register("schoolName", { required: "School name is required" })}
              id="schoolName"
            /> */}
          </div>
        </Field>

        <Field error={errors?.date}>
          <div className="form-row">
            <label>
            <img src={clock} alt="clock" className='icons'/>
              Inspection Date
            </label>
            <input
              {...register("date")}
              id="date"
              onBlur={handleBlur}
            />
          </div>
        </Field>

        <Field error={errors?.cluster}>
          <div className="form-row">
            <label>
            <img src={school} alt="clock" className='icons'/>
             Cluster
            </label>
            <input
              onBlur={handleBlur}
              {...register("cluster", { required: "cluster is required" })}
              type="cluster"
              id="cluster"
            />
          </div>
        </Field>

        <Button>Next {">"}</Button>
    </Form>
  );
};
