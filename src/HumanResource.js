  import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import teacher from "./icons/Graduation Cap.svg";
import male from "./icons/Standing Man.svg";
import students from "./icons/Teaching.svg";
import toilet from "./icons/Toilet.svg";
import female from "./icons/Woman.svg";
import { useAppState } from "./state";

export const HumanResource = () => {
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

  const     saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/ResourceCount");
  };

  const handleBlur = (e) => {
    const formData = getValues();
    console.log("OnBlur: Form data filled inn:", formData);
  };
  return (
    <Form onBlur={handleBlur} onSubmit={handleSubmit(saveData)}>
        <h3> Human Resource</h3>

        <Field error={errors?.firstName}>
          <div className="form-row">
            <label>
            <img src={teacher} alt="clock" className='icons'/>
              How many teachers at the school?
            </label>
            <input
              onBlur={handleBlur}
              {...register("totalTeacher", { required: "You must fill this field" })}
              id="totalTeacher"
            />
          </div>
        </Field>

        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={female} alt="clock" className='icons'/>
              How many teachers are females?    
            </label>
            <input
              {...register("femaleTeacher")}
              id="femaleTeacher"
              onBlur={handleBlur}
            />
          </div>
        </Field>

        <Field error={errors?.email}>
          <div className="form-row">
            <label>
              <img src={male} alt="clock" className='icons'/>
              How many teachers are males?
            </label>
            <input
              onBlur={handleBlur}
              {...register("maleTeacher")}
              id="maleTeacher"
              min="0"
            />
          </div>
        </Field>

        <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={students} alt="clock" className='icons'/>
              How many students are at the school?
              </label>
            <input
              onBlur={handleBlur}
              {...register("totalStudent", { required: "You must fill this field" })}
        
              id="totalStudent"
            />
          </div>
        </Field>

        <Field error={errors?.confirmPassword}>
          <div className="form-row">
            <label>
            <img src={female} alt="clock" className='icons'/>
              How many students are females?
             </label>
            <input
              onBlur={handleBlur}
              {...register("femaleStudent")}
              id="femaleStudent"
            />
          </div>
        </Field>        

        <Field error={errors?.confirmPassword}>
          <div className="form-row">
            <label>
            <img src={male} alt="clock" className='icons'/>
              How many students are males?
             </label>
            <input
              onBlur={handleBlur}
              {...register("maleStudent")}
              id="maleStudent"
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
              {...register("amountToiletsTeachers" )}
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
              {...register("amountToiletsStudent")}
              type="amountToiletsStudent"
              id="amountToiletsStudent"
            />
          </div>
        </Field>

        <Button>Next {">"}</Button>
    </Form>
  );
};
