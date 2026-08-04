import { ReviewCard, type ReviewCardProps } from "./components/ReviewCard";
import TestimonyCard, { type TestimonyCardProps } from "./components/TestimonyCard";

export interface SocialProofProps {
    "id": number;
    "title": string;
    "description": string;
    "testimony": TestimonyCardProps[];
    "review": ReviewCardProps[];
}

const SocialProof = (props: SocialProofProps ) => {

    return ( 
        <>
            <div className=" grid grid-cols-1 gap-4 justify-center items-center w-[375px] p-[20px] sm:grid-cols-[400px_1fr] sm:gap-20 sm:w-[1110px] sm:p-0">
                    
                 {/* header */}
                <div className="grid grid-rows-1 gap-8 sm:w-[400px]"> 
                    <div className=" text-center text-[hsl(300,43%,22%)] text-4xl/8 tracking-tight font-bold sm:text-6xl sm:text-start sm:leading-14">
                        {props.title}
                    </div>
                    <div className="text-[hsl(300,43%,22%)] text-center sm:text-start">
                        {props.description}
                    </div>
                </div>

                {/* TestimonyCards */}
                <div className="grid gap-4 w-full grid-row-1">
                    {props.testimony.map((card:TestimonyCardProps) => (
                            
                            <TestimonyCard key={card.id} {...card} />
                            
                        ))}
                </div>

                {/* ReviewCards */}
                <div className="grid gap-4 w-full sm:grid-cols-3 sm:col-span-2 sm:gap-8" > 
                    {props.review.map((card:ReviewCardProps) => (
                            <ReviewCard key={card.id} {...card} />
                        ))}
                </div>

            </div>
        </>
    );
}

// const SocialProofStatic = () => {
//     return ( 
//         <div>SocialProofStatic</div>
//         );
// }

// export {SocialProofStatic};

export default SocialProof;

