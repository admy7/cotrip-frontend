import { useState } from "react";
import { createTrip } from "./api/actions";

export default function App() {
  const [tripId, setTripId] = useState("");

  const handleCreateTripClick = async () => {
    try {
      const newTrip = {
        origin: "Paris",
        destination: "London",
        startDate: "2025-01-10",
        endDate: "2025-01-15",
      };

      const id = await createTrip(newTrip);
      setTripId(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="mt-10 flex items-center justify-center text-2xl">
        Welcome to CoTrip ✈️
      </h1>
      <button
        className="mx-auto w-fit rounded-lg border bg-gray-200 p-3"
        onClick={handleCreateTripClick}
      >
        Create a first trip
      </button>
      <p className="mx-auto">
        {tripId && `Trip has been created. ID: ${tripId} 🚀`}
      </p>
    </div>
  );
}
