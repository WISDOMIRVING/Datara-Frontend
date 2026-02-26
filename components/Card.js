export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`glass p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
