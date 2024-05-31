
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';
const isLoggedIn=true;
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

const Form = () => {
  return (
    <div>
    {content}
  </div>
  )
}

export default Form