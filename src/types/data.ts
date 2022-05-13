export default interface Data {
  name: string;
  overview: DataContent;
  structure: DataContent;
  geology: DataContent;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

export type DataContent = {
  content: string;
  source: string;
};

export type DataType = "overview" | "structure" | "geology";
export type DataImgType = "planet" | "geology" | "internal";
