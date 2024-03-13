
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export const Posts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login({ name: "name", email: "email" }));
  };
  
    return (
     <>
     
  
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="relative p-9 md:p-9">

    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 ">
      <div className="mb-10 lg:mb-0 lg:col-span-9 lg:col-start-8 lg:order-2">


        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

<div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">


<form      onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Title</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("title")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Brand</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("brand")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Edition</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("edition")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Model</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("model")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Registration Year</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("registration_year")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Production Year</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("production_year")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Condition</label>
          <select  type="text" id="hs-feedback-post-comment-name-1"  {...register("condition")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  >
          <option value="">Choose</option>
        <option value="1">1</option>
            </select>
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Transmition</label>
          <select  type="text" id="hs-feedback-post-comment-name-1"  {...register("transmition")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  >
          <option value="">Choose</option>
        <option value="1">1</option>
            </select>
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Body Type</label>
          <select  type="text" id="hs-feedback-post-comment-name-1"  {...register("bodyType")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  >
          <option value="">Choose</option>
        <option value="1">1</option>
            </select>
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Fuel Type</label>
          <select  type="text" id="hs-feedback-post-comment-name-1"  {...register("fuelType")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  >
          <option value="">Choose</option>
        <option value="1">1</option>
            </select>
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Engine Capacity</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("engine_capacity")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Kilometer</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("kilometer")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Dtails</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("details")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">gallery</label>
          <input type="file" id="hs-feedback-post-comment-name-1"  {...register("details")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Price</label>
          <input type="text" id="hs-feedback-post-comment-name-1"  {...register("price")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">District</label>
          <select  type="text" id="hs-feedback-post-comment-name-1"  {...register("district")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  >
          <option value="">Choose</option>
        <option value="1">1</option>
            </select>
        </div>
        <div className="mb-12 sm:mb-12">
          <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Upazila</label>
          <select  type="text" id="hs-feedback-post-comment-name-1"  {...register("upazila")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"  >
          <option value="">Choose</option>
        <option value="1">1</option>
            </select>
        </div>
      

     


        <div className="mt-6 grid">
          <button type="submit "  onClick={handleLogin} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Submit</button>
        </div>
      </form>


</div>

</div> 
    
      </div>


      <div className="lg:col-span-3">
        <div className="relative">
       
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
             
            <ul className="space-y-1.5">
        <li>
          <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="dashboard">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Dashboard
          </a>
        </li>

        <li className="hs-accordion" id="users-accordion">
          <a type="button" href="profile" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
         Profile

             </a>

        </li>

    
        <li className="hs-accordion" id="projects-accordion">

          <a  href="/service"   type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          Service

          </a>

        </li>

        <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/posts">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
     Your Post
        </a></li>
      </ul>
            </div>

          </div>
     
         

        </div>
      </div>
  
    </div>

    <div className="absolute inset-0 grid grid-cols-12 size-full">
      <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
    </div>
 
  </div>
</div>





     
     </>
    );
  };
  