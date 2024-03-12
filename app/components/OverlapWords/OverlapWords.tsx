interface OverlapWordsProps {
    
    stylePhrasePairs : [string, string][];
}

// interface HeadingProps{
//     heading: number;
//     content: string;
//     style: string;
// }
const OverlapWords = ({ stylePhrasePairs : stylePhrasePairs = [["text-4xl font-bold", "title"], ["text-4xl font-bold", "subtitle"]] }: OverlapWordsProps) => {
    return (
        <div>
            <h1 className={stylePhrasePairs[0][0]}>{stylePhrasePairs[0][1]}</h1>
            <h6 className={stylePhrasePairs[1][0]}>{stylePhrasePairs[1][1]}</h6>
        </div>
    );
};

// const createHeading = ({ heading, content, style }: HeadingProps) => {
//     switch (heading) {
//         case 1:
//             return <h1 className={style}>{content}</h1>;
//         case 2:
//             return <h2 className={style}>{content}</h2>;
//         case 3:
//             return <h3 className={style}>{content}</h3>;
//         case 4:
//             return <h4 className={style}>{content}</h4>;
//         case 5:
//             return <h5 className={style}>{content}</h5>;
//         case 6:
//             return <h6 className={style}>{content}</h6>;
//         default:
//             return <h1 className={style}>{content}</h1>;
//     }
// }

export default OverlapWords;
