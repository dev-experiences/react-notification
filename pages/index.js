import { toast } from 'react-toastify';

export default function Home() {
  const notify = () => toast("Notificação feita com React-toastify");

  return (
    <div className="container">
      <h1>Home Notification</h1>

      <button onClick={notify}>Notificar</button>
    </div>
  )
}
