import { Link } from 'react-router-dom';


export function PasswordSave() {
  return (
    <>
      <nav>
        <Link to="/PasswordGenerator">PasswordGenerator</Link>
        <Link to="/">Login</Link>
      </nav>
    </>
  );
}
