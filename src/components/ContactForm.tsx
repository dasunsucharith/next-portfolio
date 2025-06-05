'use client';

import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        form.current?.reset();
        alert('Message sent!');
      })
      .catch(() => {
        alert('Failed to send message.');
      });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md flex-col space-y-4"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        className="rounded border p-2"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="rounded border p-2"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="rounded border p-2"
        required
      />
      <button
        type="submit"
        className="rounded bg-blue-600 p-2 font-medium text-white hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}
