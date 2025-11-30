import React from "react";

const TemplateCard = ({ title, onEdit, onDelete, onUse }) => {
  return (
    <div className="
      bg-white 
      rounded-2xl 
      p-5 
      w-72 
      shadow-[0_4px_15px_rgba(0,0,0,0.1)] 
      hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
      transition-all 
      duration-300
      border border-gray-200
    ">
      {/* Title */}
      <h3 className="font-semibold text-lg text-gray-800 mb-3">
        {title}
      </h3>

      {/* Preview Box */}
      <div className="
        bg-linear-to-br from-blue-50 to-blue-100 
        rounded-xl 
        h-28 
        mb-4 
        flex 
        items-center 
        justify-center 
        border border-gray-200
      ">
        <p className="text-gray-500 text-sm">Preview</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="
            flex-1 
            py-2 
            bg-blue-500 
            text-white 
            rounded-lg 
            hover:bg-blue-600 
            transition
          "
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="
            flex-1 
            py-2 
            bg-red-500 
            text-white 
            rounded-lg 
            hover:bg-red-600 
            transition
          "
        >
          Delete
        </button>

        <button
          onClick={onUse}
          className="
            flex-1 
            py-2 
            bg-green-500 
            text-white 
            rounded-lg 
            hover:bg-green-600 
            transition
          "
        >
          Use
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
