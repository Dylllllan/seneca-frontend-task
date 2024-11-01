import useShuffledArray from "../hooks/useShuffledArray";

import "../styles/ToggleAnswer.scss";

type Props = {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
    locked: boolean;
};

function ToggleAnswer({ options, selectedOption, onSelect, locked }: Props) {
    // Shuffle the order of the options when the options change
    const shuffledOptions = useShuffledArray(options);

    const selectedIndex = shuffledOptions.indexOf(selectedOption);

    // Calculate the flexbox padding for the slider
    const leftSliderPadding = selectedIndex; // i.e. first option has no padding
    const rightSliderPadding = shuffledOptions.length - selectedIndex - 1; // i.e. last option has no padding

    return (
        <div className="ToggleAnswer">
            <div className="slider">
                <div className="sliderPadding" style={{ flexGrow: leftSliderPadding }} />
                <div className="sliderCell" />
                <div className="sliderPadding" style={{ flexGrow: rightSliderPadding }} />
            </div>
            <div className="options" style={{ cursor: locked ? "default" : "pointer" }}>
                {shuffledOptions.map((option, index) => (
                    <div key={options.indexOf(option)} className="option" onClick={() => onSelect(option)}
                        style={{ color: index === selectedIndex ? "#000000" : "" }}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToggleAnswer;
