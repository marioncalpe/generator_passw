import { Link } from 'react-router-dom';

export function Login() {
  return (
    <>
      <nav>
        <Link to="/PasswordGenerator">PasswordGenerator</Link>
        <Link to="/PasswordSave">PasswordSave</Link>
      </nav>
    </>
  );
}