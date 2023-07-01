type Props = {};

export default function CreateTodoForm({}: Props) {
  return (
    <div>
      <p className="mb-4 text-lg font-medium">Create Todo</p>
      <form action="">
        {/* Title */}
        <div className="mb-4">
          <label className="text-base" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic"
            placeholder="Todo Title"
          />
        </div>

        {/* short description */}
        <div className="mb-4">
          <label className="text-base " htmlFor="description">
            Short Description
          </label>
          <textarea
            name="description"
            id="description"
            cols={10}
            rows={5}
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic"
            placeholder="Short Description...."
          ></textarea>
        </div>
      </form>
    </div>
  );
}
