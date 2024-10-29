import "../styles/ToggleAnswer.scss";

type Props = {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
};

function ToggleAnswer({ options, selectedOption, onSelect }: Props) {
    const selectedIndex = options.indexOf(selectedOption);

    // Calculate the flexbox padding for the slider
    const leftSliderPadding = selectedIndex; // i.e. first option has no padding
    const rightSliderPadding = options.length - selectedIndex - 1; // i.e. last option has no padding

    return (
        <div className="ToggleAnswer">
            <div className="slider">
                <div className="sliderPadding" style={{ flexGrow: leftSliderPadding }} />
                <div className="sliderCell" />
                <div className="sliderPadding" style={{ flexGrow: rightSliderPadding }} />
            </div>
            <div className="options">
                {options.map((option, index) => (
                    <div key={index} className="option" onClick={() => onSelect(option)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToggleAnswer;
