import { Link } from "react-router";

export default function unauthorized() {
  return (
    <div className="grid place-content-center h-screen">
      <h1> This is unauthorized component </h1>
      <button><Link to='/'>Go home</Link></button>
    </div>
  );
}