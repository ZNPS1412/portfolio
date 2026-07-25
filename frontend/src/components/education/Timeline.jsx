import TimelineItem from "./TimelineItem";

function Timeline({ items }) {

    return (

        <div className="relative mt-20">

            {/* Vertical Line */}
            <div
                className="absolute
                left-1/2
                top-0
                h-full
                w-px
                -translate-x-1/2
                bg-slate-700"
            />

            <div className="space-y-20">

                {items.map((item, index) => (

                    <TimelineItem
                        key={item.id}
                        item={item}
                        index={index}
                    />
                    
                ))}

            </div>

        </div>

    );

}

export default Timeline;
