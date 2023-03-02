import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorum
        aspernatur et labore, quidem nam sint quo placeat deleniti eius
        repudiandae at eveniet natus quaerat nemo quae facilis dolor! Provident
        consectetur cumque aliquid voluptatum! Exercitationem quod laboriosam
        illo placeat animi?
      </p>

      <p>Go to <Link to='/'>Homepage</Link>.</p>
    </div>
  );
}
