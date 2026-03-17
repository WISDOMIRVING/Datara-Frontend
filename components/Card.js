export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`glass p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
