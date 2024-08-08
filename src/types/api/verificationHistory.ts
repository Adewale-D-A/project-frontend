export type verificationHistory = {
  id: string;
  matric_number: string;
  timestamp: string;
}[];

export type verificationHistoryItem = {
  id: string;
  matric_number: string;
  timestamp: string;
};

export type student_users = {
  student_id: number;
  firstname: string;
  lastname: string;
  matric_number: string;
  email: string;
  username: string;
  hardware_user_id: number;
  password: string;
  registered_index: string;
  created_at: string;
}[];
