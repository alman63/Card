import { IProps } from '../../App';

export const DecribeUser: React.FC<IProps> = (props: IProps) => {
    return (
        <>
            <h2>{props.title}</h2>
            <h3>{props.describe}</h3>
            <p>{props.text}</p>
        </>
    );
};
