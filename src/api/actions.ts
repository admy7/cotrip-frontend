import { BACKEND_URL } from "./config";
import { CreateTripDTO } from "./types";

export const createTrip = async (trip: CreateTripDTO) => {
  const response = await fetch(`${BACKEND_URL}/api/v1/trips`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trip),
  });

  const { id } = await response.json();

  return id;
};
