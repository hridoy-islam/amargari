import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export const Consultancy = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login({ name: "name", email: "email" }));
  };
    return (
     <>
     



     
     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="mx-auto max-w-2xl">
    <div className="text-center">
      <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
      Booking Form
      </h2>
    </div>


    <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
    <form
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Full Name</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("name")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Full name" />
        </div>
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Phone</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("phone")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />
        </div>
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Email</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("email")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />
        </div>
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Body Type</label>
          <select  type="text" id="hs-feedback-post-comment-name-1"  {...register("bodyType")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  >
          <option value="">Choose</option>
        <option value="1">1</option>
            </select>
        </div>
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Car Brand</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("car_brand")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />
        </div>
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Car Year</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("car_year")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />
        </div>
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Car Model</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("car_model")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />
        </div>
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Service Package</label>
          <select  type="text" id="hs-feedback-post-comment-name-1"  {...register("servicePackage")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  >
          <option value="">Choose</option>
        <option value="1">1</option>
            </select>
        </div>
        <div className="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Address</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("address")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  />
        </div>
      


        <div>
          <label for="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-white">Message</label>
          <div className="mt-1">
            <textarea id="hs-feedback-post-comment-textarea-1" {...register("message")}  rows="3" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Leave your comment here..."></textarea>
          </div>
        </div>

        <div className="mt-6 grid">
          <button type="submit"       onClick={handleLogin} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Submit</button>
        </div>
      </form>
    </div>

  </div>
</div>
     </>
    );
  };
  