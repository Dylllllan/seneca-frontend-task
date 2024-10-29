import "../styles/ToggleAnswer.scss";

type Props = {
    options: string[];
};

function ToggleAnswer({ options }: Props) {
    return (
        <div className="ToggleAnswer">
            <div className="slider">
                <div className="sliderPadding" style={{ flexGrow: 0 }} />
                <div className="sliderButton" />
                <div className="sliderPadding" style={{ flexGrow: 1 }} />
            </div>
            <div className="options">
                {options.map((option, index) => (
                    <div key={index} className="option">
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToggleAnswer;
