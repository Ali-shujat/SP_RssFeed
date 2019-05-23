export interface IRssFeedProps {
  feedUrl: string;
  maxCount: number;
  showDesc: boolean;
  showPubDate: boolean;
  descCharacterLimit: number;
  titleLinkTarget: string;
  dateFormat: string;
  dateFormatLang: string;
  backgroundColor: string;
  font: string;
  fontSize: string;
  fontColor: string;
}
