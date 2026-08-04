export interface ReviewCardProps {
    id: number;
    profileImageURL: string;
    name: string;
    isVerifiedBuyer: boolean;
    testimony: string;
}

export const ReviewCard = (props: ReviewCardProps) => {

    const marginBase = 15;

    return ( 
        <div className="flex flex-col flex-nowrap gap-6 pt-[45px] pb-[40px] pl-[35px] pr-[35px] bg-[hsl(300,43%,22%)] rounded-md sm:mt-('--mt-desktop)" style={{'--mt-desktop':`${marginBase * props.id}px`}as React.CSSProperties}>
            <div className="flex flex-row flex-nowrap justify-start items-center gap-6">
                <div>
                    <img src={props.profileImageURL} alt={props.name} className="w-[40px] h-auto rounded-[50%]"/>
                </div>
                <div className="flex flex-col flex-nowrap gap-0 justify-center items-start font-medium">
                    <div className="text-white">
                        {props.name}
                    </div>
                    <div className="text-[hsl(333,80%,67%)]">
                        {props.isVerifiedBuyer ? "Verified Buyer" : "Not Verified Buyer" }
                    </div>
                </div>
            </div>
            <div className="text-white  text-sm">
                &ldquo; {props.testimony} &rdquo;
            </div>
        </div>
    );
}

export default ReviewCard;