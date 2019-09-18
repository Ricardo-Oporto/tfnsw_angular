export interface Schedule {
  busData: Bus[];
  date: string;
  organisation: string;
}

export interface BusDataServiceResponse {
  data: Schedule[];
}

export interface Bus {
  busId: string;
  deviationFromTimetable: number;
  routeVariant: string;
}
