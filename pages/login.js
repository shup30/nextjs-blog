import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter()
    
  async function onSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;  
    // push user to /verify-email page
    router.push('/blog/verify-email');
  }
    
  return (
    <div>
      <h1>Log in here</h1>

      <form onSubmit={onSubmit}>
        <input name="email" placeholder="Your email address" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}