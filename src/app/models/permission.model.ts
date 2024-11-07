export interface Permission {
  _id: string;
  userId: string;
  userName: string;
  module: string;
  moduleId: string;
  aircraft: string;
  aircraftId: string;
  access: number;
  status: number;
  comment: string;
  updatedAt: string;
  createdAt: string;
}
