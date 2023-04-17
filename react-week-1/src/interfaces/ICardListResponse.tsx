import ICardProps from './ICardProps';

interface ICardListResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICardProps[];
}
export default ICardListResponse;
