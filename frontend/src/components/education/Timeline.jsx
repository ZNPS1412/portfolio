import TimelineItem from "./TimelineItem";
import Reveal from "../common/Reveal";

function Timeline({ items }) {

    return (

        <div className="relative mt-20">

            {/* Desktop Timeline Line */}
            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    hidden
                    h-full
                    w-px
                    -translate-x-1/2
                    bg-slate-700
                    lg:block
                "
            />

            {/* Mobile Timeline Line */}
            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    h-full
                    w-px
                    -translate-x-1/2
                    bg-slate-700
                    lg:hidden
                "
            />

            <div className="space-y-12 lg:space-y-20">

                {items.map((item, index) => (
                    
                    <Reveal key={item.id}>
                    <TimelineItem
                        key={item.id}
                        item={item}
                        index={index}
                    />
                    </Reveal>
                ))}

            </div>

        </div>

    );

}

export default Timeline;
