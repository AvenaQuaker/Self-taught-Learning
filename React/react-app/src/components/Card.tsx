import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;

  const width = {
    width: "350px",
  };
  return (
    <div className="card" style={width}>
      <div className="card-children">{children}</div>
    </div>
  );
}

interface CardchildrenProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardchildrenProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}
export default Card;
