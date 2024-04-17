import { FC, useEffect, useState } from 'react';
import { useContext } from 'react';
import { Context } from '../context/context';
import { Tooltip } from 'react-tooltip';
import './textField.css';

export const TextField: FC = () => {
    const { field } = useContext(Context);
    const [visibleTooltip, setVisibleTooltip] = useState(false);
    const isEllipsis = (element: HTMLElement) => {
        return element.offsetWidth < element.scrollWidth;
    };
    useEffect(() => {
        const textField = document.querySelector(
            '.card__field_p'
        ) as HTMLElement;
        isEllipsis(textField)
            ? setVisibleTooltip(true)
            : setVisibleTooltip(false);
    }, []);

    return (
        <>
            <p
                className="card__field_p"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={field}
            >
                {field}
            </p>
            {visibleTooltip && <Tooltip id="my-tooltip" />}
        </>
    );
};
