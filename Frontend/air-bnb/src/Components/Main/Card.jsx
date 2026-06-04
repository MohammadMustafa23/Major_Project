import { useNavigate } from "react-router-dom";

export default function Card({
  title,
  description,
  Photo,
  id,
  price,
  location
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/item/${id}`)}
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-xl
        mb-10
      "
    >
      <img
        src={Photo}
        alt={title}
        className="
          w-full
          h-64
          object-cover
        "
      />

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg truncate">
            {title}
          </h2>

          <span className="font-medium">
            ⭐ 4.8
          </span>
        </div>

        <p className="text-gray-500 mt-1">
          {location}
        </p>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {description}
        </p>

        <p className="mt-4 text-lg">
          <span className="font-bold">
            ₹{price}
          </span>
          {" "}
          night
        </p>
      </div>
    </div>
  );
}