type Props = {
  buttonName: string;
  onPressed: () => void;
};

const Button = ({ buttonName, onPressed }: Props) => {
  return (
    <>
      <div className="buttonContainer">
        <button className="mainButton" onClick={onPressed}>
          {buttonName}
        </button>
      </div>
    </>
  );
};

export default Button;
