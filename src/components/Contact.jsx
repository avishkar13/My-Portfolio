import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar'

const Contact = () => {

  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName) {
      formErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      formErrors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
  
    const formErrors = validateForm(); // Validate the form data
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true); // Disable the submit button
      setErrors({});

      emailjs.sendForm(
        'service_u9fj7m9', // Your service ID
        'template_yvlprv9', // Your template ID
        form.current, // The form ref
        'sCR55zdmdvxewod9s' // Your public key
      ).then((result) => {
        toast.success('Form Submitted Successfully!!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormData({ // Reset form data after successful submission
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      }).catch((error) => {
        toast.error('Form Submission Failed!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    } else {
      setErrors(formErrors); // Set validation errors if any
    }
  };
  

return (
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />

    <Navbar />
    <main className='py-24'>
      <div className='text-white w-[95%] md:w-[80%]  max-h-[80vh] mx-auto p-6 rounded-xl flex flex-col gap-10 '>
        <h1 className='text-center font-semibold font-serif md:text-xl lg:text-2xl'>Contact Form for work/genral Enquires</h1>

        <form ref={form} className=" w-[90%] md:max-w-md mx-auto " onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="text"
                name="firstName"
                autoComplete='true'
                id="floating_first_name"
                className="block py-2.5 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.firstName}
                onChange={handleInputChange}
                required />
              <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" autoComplete='true' name="lastName" id="floating_last_name" className="block py-2.5 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.lastName}
                onChange={handleInputChange} />
              <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
              {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" autoComplete='true' name="email" id="floating_email" className="block py-2.5 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.email}
              onChange={handleInputChange} />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          {/* <div className="grid md:grid-cols-2 md:gap-6"> */}
          <div className="relative z-0 w-full mb-5 group">
            <input type="tel" autoComplete='true' pattern="[0-9]{10}" name="phone" id="floating_phone" className="block py-2.5 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.phone}
              onChange={handleInputChange} />
            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number(10 digits) </label>
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>
          {/* </div> */}

          <div className="max-w-full mx-auto">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Your message</label>
            <textarea
              name='message'
              id="message"
              rows="5"
              className="block p-2.5 w-full text-sm text-white bg-slate-900 rounded-lg"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" value="send" disabled={isSubmitting} className="text-white w-fit cursor-pointer bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 my-4 flex items-center justify-center mx-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </div>
    </main>
  </>
)
}

export default Contact
