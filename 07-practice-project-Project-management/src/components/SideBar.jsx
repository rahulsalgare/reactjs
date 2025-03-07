import CreateProjectButton from "./CreateProjectButton";

export default function SideBar({ handleClick }) {
  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-gray-50 border-r border-gray-200 p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Projects</h2>
      <button
        onClick={handleClick}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <span>New Project</span>
      </button>
    </aside>
  );
}
