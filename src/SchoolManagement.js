import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Forms/Button";
import { Field } from "./Forms/Field";
import { Form } from "./Forms/Form";
import classroom from "./icons/Classroom.svg";
import cleanHand from "./icons/Clean Hands.svg";
import Dining from "./icons/Dining Room.svg";
import Laptop from "./icons/Laptop with cursor.svg";
import Library from "./icons/Library Building.svg";
import Soccer from "./icons/Soccer.svg";
import TestTube from "./icons/Test Tube.svg";
import toilet from "./icons/Toilet.svg";
import { useAppState } from "./state";

export const SchoolManagement = () => {
  const [state, setState] = useAppState();

 // const { handleSubmit, register,     getValues } = useForm({ defaultValues: state });
  const {
    handleSubmit,
    register,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/HumanResource");
  };

  const handleBlur = (e) => {
    const formData = getValues();
    console.log('OnBlur: Form data filled inn:', formData);
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
        <h2>School Management</h2>



        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={Laptop} alt="clock" className='icons'/>
              The school has computer lab for learners?
            </label>
            <input
              {...register("computerLab")}
              id="computerLab"
              onBlur={handleBlur}
            />
          </div>
        </Field>     
        
        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={TestTube} alt="clock" className='icons'/>
              The school has a laboratory?
            </label>
            <input
              {...register("laboratory")}
              id="laboratory"
              onBlur={handleBlur}
            />
          </div>
        </Field>


        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={cleanHand} alt="clock" className='icons'/>
              The school has hand-washing facilities?
            </label>
            <input
              {...register("handWashingFacilities")}
              id="handWashingFacilities"
              onBlur={handleBlur}
            />
          </div>
        </Field>


        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={Library} alt="clock" className='icons'/>
              The school has a library? 
            </label>
            <input
              {...register("library")}
              id="library"
              onBlur={handleBlur}
            />
          </div>
        </Field>


        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={classroom} alt="clock" className='icons'/>
              Total number of classrooms?
            </label>
            <input
              {...register("numberOfClassrooms")}
              id="numberOfClassrooms"
              onBlur={handleBlur}
            />
          </div>
        </Field>


        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={Soccer} alt="clock" className='icons'/>
              The school has a yard/playground? 
            </label>
            <input
              {...register("playground")}
              id="playground"
              onBlur={handleBlur}
            />
          </div>
        </Field>

        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={toilet} alt="clock" className='icons'/>
              How many toilets at the school?
            </label>
            <input
              {...register("totalToilets")}
              id="totalToilets"
              onBlur={handleBlur}
            />
          </div>
        </Field>

        <Field error={errors?.lastName}>
          <div className="form-row">
            <label>
            <img src={Dining} alt="clock" className='icons'/>
              The school has a dining area?
            </label>
            <input
              {...register("diningArea")}
              id="diningArea"
              onBlur={handleBlur}
            />
          </div>
        </Field>

        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/">
            {"<"} Previous
          </Link>

          <Button>Previous {">"}      

            
          </Button>
          <Button>Next {">"}</Button>
        </div>
    </Form>
  );
};
