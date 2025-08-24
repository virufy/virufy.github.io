import { TitleProps } from '../themes';

export default function Title({ Text, H, TitleClassProps, as = '' }) {
  if (as === 'span') {
    return (
      <span className={`${TitleClassProps} ${TitleProps?.[H]}`}>{Text}</span>
    );
  }
  return (
    // TODO: Evaluar la etiqueta H1 para cambiarla por un span
    <h1 className={`${TitleClassProps} ${TitleProps?.[H]}`}>{Text}</h1>
  );
}
