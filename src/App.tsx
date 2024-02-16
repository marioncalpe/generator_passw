import {createRoot} from 'react-dom/client'
import { PasswordGenerator } from './pages/PasswordGenerator';

export function App(){
    return <PasswordGenerator/>
}

const root = createRoot(document.body);
root.render(<App/>);