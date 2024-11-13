import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import chair from "./icons/chair.svg";
import desk from "./icons/desk.svg";
import toilet from "./icons/Toilet.svg";
import { useAppState } from "./state";

export const ResourceCount = () => {
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
    navigate("/Summary");
  };

  const handleBlur = (e) => {
    const formData = getValues();
    console.log("OnBlur: Form data filled inn:", formData);
  };
  return (
    <Form onBlur={handleBlur} onSubmit={handleSubmit(saveData)}>
        <h3> ResourceCount</h3>

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
      
       
        
        <Field error={errors?.password}>
          <div className="form-row">
            <label>
            <img src={desk} alt="clock" className='icons'/>
              Total Number of Desks
            </label>
            <input
              onBlur={handleBlur}
              {...register("numberDesk", { required: "number Desks is required" })}
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


        <Button>submit {">"}</Button>
    </Form>
  );
};
