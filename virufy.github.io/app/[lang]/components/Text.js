import { TextProps } from '../themes';

export default function Text({ Text, Style, TextClassProps }) {
  return <p className={`${TextClassProps} ${TextProps?.[Style]}`}>{Text}</p>;
}
