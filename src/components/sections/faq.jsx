import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SlideLeft from "@/lib/animations/slideLeft"
import { faqData } from "@/lib/fackData/faqData"
import SectionTitle from "../ui/sectionTitle"


const Faq = () => {
    return (
        <section className={`pt-10`}>
            <SectionTitle
                section_name={"FAQ"}
                section_title={"Engineering FAQs Explained"}
                section_title_class={"max-w-[1000px]"}
                section_description={"Answers to Your Questions"}
            />
            <div className="container">
                <div className="grid lg:grid-cols-[40%_auto] items-center lg:gap-[70px] gap-7.5">
                    <div className="overflow-hidden">
                        <SlideLeft>
                            <Image src={'/images/faq-image.jpg'} width={519} height={685} sizes="100vw" className="mx-auto" alt="faq-background" />
                        </SlideLeft>
                    </div>

                    <div>
                        <Accordion type="single" defaultValue="1" collapsible>
                            {
                                faqData.map(({ id, ans, question }) => {
                                    return (
                                        <AccordionItem key={id} value={id} className='mb-2.5 border-b-0'>
                                            <AccordionTrigger className="text-xl border border-muted sm:px-12.5 px-6 hover:no-underline text-muted-foreground font-semibold">{question}</AccordionTrigger>
                                            <AccordionContent className="mt-[22px] sm:px-12.5 px-6 text-lg text-muted-foreground">
                                                {ans}
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq