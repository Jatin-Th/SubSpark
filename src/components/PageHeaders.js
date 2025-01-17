export default function PageHeaders({
  h1Text = "Header",
  h2Text = "SubHeader",
}) {
  return (
    <section className="text-center mt-[4.5rem] mb-8">
      <h1
        className="text-xl font-semibold sm:text-3xl sm:font-medium"
        style={{ textShadow: "2px 2px 0 rgba(0,0,0, 0.26)" }}
      >
        {h1Text}
      </h1>
      <h2 className="text-sm sm:text-zinc-100/90">
        {h2Text}
      </h2>
    </section>
  );
}


