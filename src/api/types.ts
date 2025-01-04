export type CreateTripResponse = {
  id: string;
};

export type CreateTripDTO = {
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
};
