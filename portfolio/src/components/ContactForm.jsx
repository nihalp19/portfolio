import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from "react-icons/fi";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState({})
    const [isSending, setIsSending] = useState(false)
    const handleChnage = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let errors = {}
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) {
            errors.email = "Email is required"
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid"
        }
        if (!formData.message) errors.message = "Message is required";
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validationErrors = validate();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})
            setIsSending(true);

            emailjs.send("service_bu6jbz8", "template_rfpq2og", formData, "JsmaNuPfwxAws-uRF")
                .then((res) => {
                    toast.success("Message Sent successfully")
                    setFormData({ name: "", email: "", message: "" })
                }).catch((error) => {
                    console.log("Failed...", error);
                    toast.error("Failed to sent message. please try again later")

                }
                ).finally(() => {
                    setIsSending(false)
                }
                )
        }
    }

    return (
        <div className='p-4 lg:w-3/4' id="#contact">
            <Toaster />
            <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>Let's Connect
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4 flex space-x-4'>
                    <div className='lg:w-1/2'>
                        <input type="text" id="name" name='name' value={formData.name} placeholder='name' onChange={handleChnage} className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3  py-2 text-sm focus:border-stone-400 focus:outline-none' />
                        {errors.name && (
                            <p className='text-sm text-rose-800'>{errors.name}</p>
                        )}
                    </div>
                    <div className='lg:w-1/2'>
                        <input type="email" id="email" name='email' value={formData.email} placeholder='email' onChange={handleChnage} className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3  py-2 text-sm focus:border-stone-400 focus:outline-none' />
                        {errors.email && (
                            <p className='text-sm text-rose-800'>{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className='mb-4'>
                    <textarea id="message" name='message' value={formData.message} placeholder='message' onChange={handleChnage} className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3  py-2 text-sm focus:border-stone-400 focus:outline-none' rows="6" />
                    {errors.message && (
                        <p className='text-sm text-rose-800'>{errors.message}</p>
                    )}
                </div>
                <button type='submit' className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`} disabled={isSending}>
                    <div className='flex items-center justify-center gap-2'>{isSending ? "Sending..." : "Send"} <FiSend /></div>
                </button>
            </form>
        </div>

    )
}

export default ContactForm