export default function ProjectList({ projects }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "in-progress":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "finished":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="fixed inset-0 left-64 overflow-y-auto bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Projects</h1>

        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusStyle(
                    project.status
                  )}`}
                >
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </span>
              </div>

              <p className="text-gray-600 mb-4">
                {project.description || "No description provided"}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span>
                    Due:{" "}
                    {project.dueDate
                      ? new Date(project.dueDate).toLocaleDateString()
                      : "No due date"}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    className="text-blue-600 hover:text-blue-700 font-medium"
                    onClick={() => {
                      /* Add edit handler */
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-700 font-medium"
                    onClick={() => {
                      /* Add delete handler */
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No projects yet. Create your first project to get started!
          </div>
        )}
      </div>
    </div>
  );
}
