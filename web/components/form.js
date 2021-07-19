import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>Thanks for your comment!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Email: {formData.email} <br />
            Comment: {formData.comment}
          </li>
        </ul>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg"
      disabled
    >
      <input type="hidden" value={_id} {...register("_id", {required: true })} />
      <label className="block mb-5">
        <span className="text-gray-700">Name</span>
        <input type="text"
          {...register("name", { required: true })}
          className="form-input mt-1 block w-full"
          placeholder="John Doe"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Email</span>
        <input type="text"
          {...register("email", { required: true })}
          className="form-input mt-1 block w-full"
          placeholder="your@email.com"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>
        <textarea
          {...register("comment", { required: true })}
          className="form-textarea mt-1 block w-full"
          rows="8"
          placeholder="Enter some long form content."
        ></textarea>
      </label>
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <input
        type="submit"
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      />
    </form>
  );
}

// import { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function Form({ _id }) {
//   // Sets up basic data state
//   const [formData, setFormData] = useState();

//   // Sets up our form states
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [hasSubmitted, setHasSubmitted] = useState(false);

//   // Prepares the functions from react-hook-form
//   const { register, handleSubmit, watch, errors } = useForm();

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     // let response;
//     setFormData(data);
//     // try {
//     //   response = await fetch("/api/createComment", {
//     //     method: "POST",
//     //     body: JSON.stringify(data),
//     //     type: "application/json",
//     //   });
//     //   setIsSubmitting(false);
//     //   setHasSubmitted(true);
//     // } catch (err) {
//     //   setFormData(err);
//     // }
//     try {
//       await fetch("/api/createComment", {
//         method: "POST",
//         body: JSON.stringify(data),
//         type: "application/json",
//       });
//       setIsSubmitting(false);
//       setHasSubmitted(true);
//     } catch (err) {
//       setFormData(err);
//     }
//   };

//   if (isSubmitting) {
//     // Returns a "Submitting comment" state if being processed
//     return <h3>Submitting comment…</h3>;
//   }
//   if (hasSubmitted) {
//     // Returns the data that the user submitted for them to preview after submission
//     return (
//       <>
//         <h3>Thanks for your comment!</h3>
//         <ul>
//           <li>
//             Name: {formData.name} <br />
//             Email: {formData.email} <br />
//             Comment: {formData.comment}
//           </li>
//         </ul>
//       </>
//     );
//   }

//   return (
//     // Sets up the Form markup
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full max-w-lg"
//       disabled
//     >
//       <input type="hidden" {...register("_id", { value:{_id} })} />

//       <label className="block mb-5">
//         <span className="text-gray-700">Name</span>
//         <input
//           {...register("name", { required: true })}
//           className="form-input mt-1 block w-full"
//           placeholder="John Doe"
//         />
//       </label>

//       <label className="block mb-5">
//         <span className="text-gray-700">Email</span>
//         <input
//           {...register("email", { required: true })}
//           className="form-input mt-1 block w-full"
//           placeholder="your@email.com"
//         />
//       </label>

//       <label className="block mb-5">
//         <span className="text-gray-700">Comment</span>
//         <textarea
//           {...register("comment", { required: true })}
//           className="form-textarea mt-1 block w-full"
//           rows="8"
//           placeholder="Enter some long form content."
//         ></textarea>
//       </label>

//       {/* errors will return when field validation fails  */}
//       {/* <input {...register("exampleRequired", { required: true })} /> */}
//       {/* {errors.exampleRequired && <span>This field is required</span>} */}

//       <input
//         type="submit"
//         className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//       />
//     </form>
//   );
// }
