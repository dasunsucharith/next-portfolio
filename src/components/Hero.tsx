export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center px-4" id="hero">
      <h1 className="mb-4 text-5xl font-bold">John Doe</h1>
      <p className="mb-8 max-w-xl text-lg">
        Welcome to my personal website built with Next.js!
      </p>
      <a
        href="#projects"
        className="rounded bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        View Projects
      </a>
    </section>
  );
}
