import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllHouses, updateHouse,deleteHouse } from "../../Service/HouseListing";
import { useNavigate } from 'react-router-dom';

export default function HouseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [house, setHouse] = useState(null);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await getAllHouses();

        const selectedHouse = response.data.data.find(
          (item) => item._id === id,
        );

        setHouse(selectedHouse);
      } catch (error) {
        console.log(error);
      }
    }

    fetchHouse();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setFormData(house);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updateHouse(id, formData);

      setHouse(formData);
      setIsEditing(false);

      alert("Property Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?",
    );
    if (!confirmDelete) return;
    try {
      await deleteHouse(id);
      alert("Property Deleted Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  if (!house) {
    return <div className="text-center mt-20 text-2xl">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={house.Image}
            alt={house.Title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Header */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start">
          <div>
            {isEditing ? (
              <input
                type="text"
                name="Title"
                value={formData.Title}
                onChange={handleChange}
                className="text-4xl font-bold border p-2 rounded-lg w-full"
              />
            ) : (
              <h1 className="text-4xl font-bold">{house.Title}</h1>
            )}

            <p className="text-gray-500 text-lg mt-2">
              {house.location}, {house.Country}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            {isEditing ? (
              <input
                type="number"
                name="Price"
                value={formData.Price}
                onChange={handleChange}
                className="border p-2 rounded-lg text-2xl font-bold"
              />
            ) : (
              <h2 className="text-3xl font-bold">
                ₹{house.Price}
                <span className="text-lg text-gray-500"> / night</span>
              </h2>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>

          {isEditing ? (
            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          ) : (
            <p className="text-gray-700 leading-8">{house.description}</p>
          )}
        </div>

        {/* Location Section */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Location Details</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="font-medium">Location</label>

              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2"
                />
              ) : (
                <p className="mt-2 text-gray-700">{house.location}</p>
              )}
            </div>

            <div>
              <label className="font-medium">Country</label>

              {isEditing ? (
                <input
                  type="text"
                  name="Country"
                  value={formData.Country}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-2"
                />
              ) : (
                <p className="mt-2 text-gray-700">{house.Country}</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          {!isEditing ? (
            <div>
              <button
                onClick={handleEdit}
                className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
              "
              >
                Edit Property
              </button>
              <button
                onClick={handleDelete}
                className="
                bg-red-600
                hover:bg-red-700
                text-white
                ml-5
                px-6
                py-3
                rounded-xl
                font-semibold
              "
              >
                Delete
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Save Changes
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="
                  bg-gray-500
                  hover:bg-gray-600
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
