interface ICardProps {
  id: number;
  name: string;
  status: number;
  species: number;
  gender: string;
  image: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  onClick: () => void;
}
export default ICardProps;
