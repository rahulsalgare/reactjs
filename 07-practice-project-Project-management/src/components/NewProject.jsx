import { useRef } from "react";

export default function NewProject({ onSubmit, onClose }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const statusRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      status: statusRef.current.value,
      id: Date.now(),
    };
    onSubmit(formData);
    onClose();
    e.target.reset();
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-50 text-blue-700";
      case "in-progress":
        return "bg-yellow-50 text-yellow-700";
      case "finished":
        return "bg-green-50 text-green-700";
      default:
        return "";
    }
  };

  return (
    <div className="fixed inset-0 left-64 flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Project Title
            </label>
            <input
              type="text"
              id="title"
              ref={titleRef}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              required
              placeholder="Enter project title"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              ref={descriptionRef}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm resize-none"
              placeholder="Enter project description"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                ref={statusRef}
                defaultValue="new"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              >
                <option value="new" className={getStatusStyle("new")}>
                  New
                </option>
                <option
                  value="in-progress"
                  className={getStatusStyle("in-progress")}
                >
                  In Progress
                </option>
                <option value="finished" className={getStatusStyle("finished")}>
                  Finished
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                ref={dueDateRef}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm font-medium"
            >
              Create Project
            </button>
            <button
              type="button"
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-sm font-medium"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
