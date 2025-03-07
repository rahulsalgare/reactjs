export default function NoProjectsFound({ handleClick }) {
  return (
    <div className="fixed inset-0 left-64 flex flex-col items-center justify-center space-y-4 px-6">
      <h1 className="text-2xl font-bold text-gray-800">No Projects Found</h1>
      <p className="text-gray-500 text-center">
        Create a new project to get started
      </p>
      <button
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        onClick={handleClick}
      >
        New Project
      </button>
    </div>
  );
}
