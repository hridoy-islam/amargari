import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const CarWash = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login({ name: "name", email: "email" }));
  };
  return (
   <>

<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Pricing</h2>
    <p className="mt-1 text-gray-600 dark:text-gray-400">Whatever your status, our offers evolve according to your needs.</p>
  </div>




  <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">

    <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
      <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">Free</h4>
      <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">Free</span>
      <p className="mt-2 text-sm text-gray-500">Forever free</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            1 user
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        Sign up
      </a>
    </div>


 
    <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
      <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">Most popular</span></p>
      <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">Startup</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
        <span className="font-bold text-2xl -me-2">$</span>
        39
      </span>
      <p className="mt-2 text-sm text-gray-500">All the basics for starting a new business</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            2 users
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html">
        Sign up
      </a>
    </div>

    <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
      <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">Team</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
        <span className="font-bold text-2xl -me-2">$</span>
        89
      </span>
      <p className="mt-2 text-sm text-gray-500">Everything you need for a growing business</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            5 users
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        Sign up
      </a>
    </div>

    <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
      <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">Enterprise</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
        <span className="font-bold text-2xl -me-2">$</span>
        149
      </span>
      <p className="mt-2 text-sm text-gray-500">Advanced features for scaling your business</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            10 users
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li className="flex space-x-2">
          <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        Sign up
      </a>
    </div>
 
  </div>

</div>



<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="mx-auto max-w-2xl">
    <div className="text-center">
      <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
      Booking Form44
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



   {/* <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="10" fill="white"/>
          <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z" fill="url(#paint0_linear_2204_541)"/>
          <path d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z" fill="#2684FF"/>
          <defs>
          <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0052CC"/>
          <stop offset="0.92" stop-color="#2684FF"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
        ঢাকা, গাড়ি
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
        বাংলাদেশ-এ বিক্রির জন্য যানবাহন
        </h3>
        <p className="mt-3 text-gray-500">
        ২,০২২ কিমি
        </p>
      
        <span>৳ ২৫,৫০,০০০</span>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          View details
        </a>
    
      </div>
    </div>


    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="10" fill="white"/>
          <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z" fill="url(#paint0_linear_2204_541)"/>
          <path d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z" fill="#2684FF"/>
          <defs>
          <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0052CC"/>
          <stop offset="0.92" stop-color="#2684FF"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
        ঢাকা, গাড়ি
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
        বাংলাদেশ-এ বিক্রির জন্য যানবাহন
        </h3>
        <p className="mt-3 text-gray-500">
        ২,০২২ কিমি
        </p>
      
        <span>৳ ২৫,৫০,০০০</span>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          View details
        </a>
    
      </div>
    </div>



    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="10" fill="white"/>
          <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z" fill="url(#paint0_linear_2204_541)"/>
          <path d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z" fill="#2684FF"/>
          <defs>
          <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0052CC"/>
          <stop offset="0.92" stop-color="#2684FF"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
        ঢাকা, গাড়ি
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
        বাংলাদেশ-এ বিক্রির জন্য যানবাহন
        </h3>
        <p className="mt-3 text-gray-500">
        ২,০২২ কিমি
        </p>
      
        <span>৳ ২৫,৫০,০০০</span>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <Link 
        top="Single"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
          View details
        </Link>
    
      </div>
    </div>


 

  </div>

</div> */}
   </>
  );
};
