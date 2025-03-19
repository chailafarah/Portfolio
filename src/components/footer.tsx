import { Mailto } from "./mailto"

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex justify-between items-center">
          <Mailto />

          <div className="flex gap-4">
            <a className="text-gray-600 hover:text-gray-950" href="https://github.com/chailafarah" target="_blank">
              <svg width="22" height="23" viewBox="0 0 22 23" stroke="currentColor" strokeWidth={2} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 19C3 20.5 3 16.5 1 16M15 22V18.13C15.0375 17.6532 14.9731 17.1738 14.811 16.7238C14.6489 16.2738 14.3929 15.8634 14.06 15.52C17.2 15.17 20.5 13.98 20.5 8.52C20.4997 7.12383 19.9627 5.7812 19 4.77C19.4559 3.54851 19.4236 2.19835 18.91 0.999999C18.91 0.999999 17.73 0.649999 15 2.48C12.708 1.85882 10.292 1.85882 8 2.48C5.27 0.649999 4.09 0.999999 4.09 0.999999C3.57638 2.19835 3.54414 3.54851 4 4.77C3.03013 5.7887 2.49252 7.14346 2.5 8.55C2.5 13.97 5.8 15.16 8.94 15.55C8.611 15.89 8.35726 16.2954 8.19531 16.7399C8.03335 17.1844 7.96681 17.6581 8 18.13V22" />
              </svg>
            </a>
            <a className="text-gray-600 hover:text-gray-950" href="https://www.linkedin.com/in/chaimaafaris/" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" />
                <path d="M6 9H2V21H6V9Z" />
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}