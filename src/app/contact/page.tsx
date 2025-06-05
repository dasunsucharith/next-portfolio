import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <NavBar alwaysScrolled />
      <section className="flex min-h-screen items-center justify-center p-4" id="contact">
        <ContactForm />
      </section>
    </main>
  );
}
