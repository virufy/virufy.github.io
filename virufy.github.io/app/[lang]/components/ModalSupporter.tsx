'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ButtonType } from '../themes';

export default function ModalSupporter({
  close,
  title,
  nametitle,
  emailtitle,
  texttitle,
  textplaceholder,
  submitButtonText,
  content,
}: {
  close: () => void;
  title: string;
  nametitle: string;
  emailtitle: string;
  texttitle: string;
  textplaceholder: string;
  submitButtonText: string;
  content: string;
}) {
  // Define types for the form data
  interface FormData {
    name: string;
    email: string;
    message: string;
  }
  // Initialize state with FormData type
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  // Handle change for form inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formActionURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSfPCkOF2egmshFjXPN01wwlfWDuKLYpUX6qKi1owg35SjrnaA/formResponse';
    // Google Form field names (entry IDs) from the form inspection
    const formFields = {
      'entry.285593858': formData.name,
      'entry.1660753976': formData.email,
      'entry.1273877453': formData.message,
    };
    const formBody = new URLSearchParams(formFields).toString();
    //console.log(formBody);
    fetch(formActionURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          //alert('There was an error submitting the form');
          close();
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form');
      });
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div
          className="relative mx-auto h-[500px] w-[300px] md:h-[500px] md:w-[700px]"
          onClick={(e) => e.stopPropagation()}
        >
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-2xl border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}

            <div className="flex w-full rounded-t">
              {/* Close button */}
              <div className="absolute flex w-full flex-col items-end pr-5 pt-3">
                <button
                  className="flex justify-center rounded-full text-xl font-medium text-white shadow-xl outline-none transition-all duration-150 ease-linear"
                  type="button"
                  onClick={close}
                >
                  X
                </button>
              </div>
            </div>
            {/*body*/}
            <div className="relative flex flex-col items-center rounded-b-2xl bg-gradient-to-b from-[#273F6A] to-[#4167AD] p-6">
              <p className="mb-6 mt-2 leading-relaxed">
                <span className="text-center text-4xl font-bold text-gray-200">
                  {title}
                </span>
              </p>
              <span className="text-center text-lg text-gray-200">
                {content}
              </span>
              <form
                className="m-8 flex w-full flex-col md:px-6"
                action={'Placehold for google form'}
                target="_blank"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <p className="text-white">{nametitle}</p>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  className="focus: border-blue mt-2 w-full p-2 text-black shadow-lg"
                  required
                  placeholder={nametitle}
                  onChange={handleChange}
                ></input>
                <p className="pt-2 text-white">{emailtitle}</p>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  className="focus: border-blue mt-2 w-full p-2 text-black shadow-lg"
                  required
                  placeholder={emailtitle}
                  onChange={handleChange}
                ></input>
                <p className="pt-2 text-white">{texttitle}</p>
                <textarea
                  name="message"
                  value={formData.message}
                  className="focus: border-blue mt-2 w-full p-2 text-black shadow-lg"
                  required
                  placeholder={textplaceholder}
                  onChange={handleChange}
                ></textarea>
                <div className="mt-4 flex w-full justify-center">
                  <button
                    className={`${ButtonType.primary} 'pt-10 pb-2px h-[50px] w-[150px] rounded-full align-middle text-base font-semibold`}
                    //onClick={() => close()}
                    type="submit"
                  >
                    {' '}
                    {submitButtonText}
                  </button>
                </div>
              </form>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
