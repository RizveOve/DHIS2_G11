import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import chair from "./icons/chair.svg";
import classroom from "./icons/Classroom.svg";
import clock from "./icons/Clock.svg";
import desk from "./icons/desk.svg";
import school from "./icons/Inspection.svg";
import male from "./icons/Standing Man.svg";
import students from "./icons/Teaching.svg";
import toilet from "./icons/Toilet.svg";
import female from "./icons/Woman.svg";
import { useAppState } from "./state";

export const Summary = () => {
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
    navigate("/SchoolManagement"); // vis summary, så fjern navigate
  };

  const handleBlur = (e) => {
    const formData = getValues();
    console.log("OnBlur: Form data filled inn:", formData);
  };
  return (
    <Form onBlur={handleBlur} onSubmit={handleSubmit(saveData)}>
        <h3> Summary </h3>

        <Field error={errors?.firstName}>
          <div className="form-row">
            <label>
            <img src={school} alt="clock" className='icons'/>
              Name of the School
            </label>
            <input
              onBlur={handleBlur}
              {...register("schoolName")}
              id="schoolName"
            />
          </div>
        </Field>

        <Field error={errors?.lastName}>
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

        <Field error={errors?.email}>
          <div className="form-row">
            <label>
            <img src={classroom} alt="clock" className='icons'/>
              Total Number of Classrooms
            </label>
            <input
              onBlur={handleBlur}
              {...register("numberOfClassrooms", { required: "number Of Classrooms is required" })}
              type="numberOfClassrooms"
              id="numberOfClassrooms"
            />
          </div>
        </Field>


        <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={desk} alt="clock" className='icons'/>
              Total Number of Desks
            </label>
            <input
              onBlur={handleBlur}
              {...register("numberDesk", { required: "number of desks is required" })}
              type="numberDesk"
              id="numberDesk"
            />
          </div>
        </Field>      
        
          <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={chair} alt="clock" className='icons'/>
              Total Number of Chairs
            </label>
            <input
              onBlur={handleBlur}
              {...register("numberChairs", { required: "numberChairs is required" })}
              type="numberChairs"
              id="numberChairs"
            />
          </div>
        </Field>

        <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={male} alt="clock" className='icons'/>
              Total Number of Male Students
            </label>
            <input
              onBlur={handleBlur}
              {...register("maleStudent", { required: "amountMaleStudents is required" })}
              type="maleStudent"
              id="maleStudent"
            />
          </div>
        </Field>

        <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={female} alt="clock" className='icons'/>
              Total Number of Female Students
            </label>
            <input
              onBlur={handleBlur}
              {...register("femaleStudent", { required: "amountFemaleStudents is required" })}
              type="femaleStudent"
              id="femaleStudent"
            />
          </div>
        </Field>

        <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={students} alt="clock" className='icons'/>
              Total Number of Students
            </label>
            <input
              onBlur={handleBlur}
              {...register("totalStudent", { required: "totalStudents is required" })}
              type="totalStudent"
              id="totalStudent"
            />
          </div>
        </Field>

        <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={toilet} alt="clock" className='icons'/>
              Total Number of Toilets for Teachers
            </label>
            <input
              onBlur={handleBlur}
              {...register("amountToiletsTeachers", { required: "amountToiletsTeachers is required" })}
              type="amountToiletsTeachers"
              id="amountToiletsTeachers"
            />
          </div>
        </Field>

        <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={toilet} alt="clock" className='icons'/>
              Total Number of Toilets for Students
            </label>
            <input
              onBlur={handleBlur}
              {...register("amountToiletsStudent", { required: "amountToiletsStudent is required" })}
              type="amountToiletsStudent"
              id="amountToiletsStudent"
            />
          </div>
        </Field>

        <Button>Next {">"}</Button>
    </Form>
  );
};
