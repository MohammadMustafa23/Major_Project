import { useNavigate } from 'react-router-dom';
export default function Card({title,description,Photo,id}) {
   const navigate = useNavigate();
   const handleCardClick = (id) => {
    // Dynamic routing based on the clicked card's ID
    navigate(`/item/${id}`);
  };
  return (
    <div
      onClick={() => handleCardClick(id)}
      className="p-8 max-w-100  rounded-md cursor-pointer  flex flex-col items-center"
      href="#"
    >
      <img
        src={Photo}
        className="shadow rounded-md cursor-pointer h-60  overflow-hidden border"
      />
      <div className="mt-8">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-5"></div>
      </div>
    </div>
  );
}
