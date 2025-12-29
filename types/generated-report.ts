export type GeneratedReport = {
  id: string;
  name: string;
  status: "processing" | "generated" | "failed";
  time: string;
  date: string;
  size: string;
  downloadUrl?: string;
  previewUrl?: string;
};
