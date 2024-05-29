import Cards from "../cards";
import About from "../navbar";

export default function Layout() {
  return (
    <div className="bg-orange-100">
      <About />
      <Cards />;
    </div>
  );
}
