import '../../../utils/stringExtensions';

export interface TestimonyCardProps {
    id: number;
    tokenName: string,
    noOfToken: number;
    tokenURL: string;
    companyName: string;
}

const TestimonyCard = (props: TestimonyCardProps) => {

    const tokensArray = Array.from({length: props.noOfToken});
    const marginBase: number = 50;

    return ( 
        <>
            <div className={`flex flex-col gap-2 justify-center items-center bg-[hsl(300,24%,96%)] rounded-xl pt-[15px] pb-[15px] sm:w-[445px] ml-[var(--ml-mobile)] sm:flex-row sm:h-[70px] sm:justify-start sm:p-[30px] sm:ml-(--ml-desktop)`} style={{'--ml-desktop':`${marginBase * props.id}px`,'--ml-mobile':0} as React.CSSProperties}> 
                <div id={'rating-'+props.id} className="flex flex-row flex-nowrap gap-2 justify-center ">
                    {tokensArray.map(( _:unknown, index:number) => 
                        <img src={props.tokenURL} alt="star" key={index} />
                    )}
                </div>
                <div className="font-bold text-[hsl(300,43%,22%)]">
                    Rated {props.noOfToken} { (props.noOfToken > 1) ? props.tokenName.toCapitalize() + 's' : props.tokenName.toCapitalize() } in {props.companyName}
                </div>
            </div>
        </>
    );
}

export default TestimonyCard;