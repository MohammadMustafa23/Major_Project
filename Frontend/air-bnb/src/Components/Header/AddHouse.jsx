import { useState } from "react";
import { addHouse } from "../../Service/HouseListing";

export default function AddHouse() {

  const [formData, setFormData] = useState({
    Title: "",
    description: "",
    Price: "",
    location: "",
    Country: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.Title.trim())
      newErrors.Title = "Title is required";

    if (!formData.description.trim())
      newErrors.description = "Description is required";

    if (!formData.Price)
      newErrors.Price = "Price is required";
    else if (Number(formData.Price) <= 0)
      newErrors.Price = "Price must be greater than 0";

    if (!formData.location.trim())
      newErrors.location = "Location is required";

    if (!formData.Country.trim())
      newErrors.Country = "Country is required";

    if (!formData.image)
      newErrors.image = "Property image is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {

      const sendData = new FormData();

      sendData.append("Title", formData.Title);
      sendData.append("description", formData.description);
      sendData.append("Price", formData.Price);
      sendData.append("location", formData.location);
      sendData.append("Country", formData.Country);
      sendData.append("image", formData.image);

      const response = await addHouse(sendData);

      console.log(response.data);

      alert("Property Added Successfully");

      setFormData({
        Title: "",
        description: "",
        Price: "",
        location: "",
        Country: "",
        image: null,
      });

      setErrors({});

    } catch (error) {
      console.log(error);
      alert("Failed To Add Property");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border">

        <h1 className="text-3xl font-semibold mb-8">
          Add New Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2 font-medium">
              Title
            </label>

            <input
              type="text"
              name="Title"
              value={formData.Title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {errors.Title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Title}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Price Per Night (₹)
            </label>

            <input
              type="number"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {errors.Price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Price}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Country
            </label>

            <input
              type="text"
              name="Country"
              value={formData.Country}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {errors.Country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Country}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Property Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Add Property
          </button>

        </form>
      </div>
    </div>
  );
}