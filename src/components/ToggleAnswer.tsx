import { useMemo } from "react";

import "../styles/ToggleAnswer.scss";
import { shuffleArray } from "../utils";

type Props = {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
    locked: boolean;
};

function ToggleAnswer({ options, selectedOption, onSelect, locked }: Props) {
    // Shuffle the order of the options when the options change
    const shuffledOptions = useMemo(() => shuffleArray(options), [options]);

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
            <div className="options">
                {shuffledOptions.map((option, index) => (
                    <div key={index} className="option" onClick={() => onSelect(option)} style={{ cursor: locked ? "default" : "pointer" }}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToggleAnswer;
