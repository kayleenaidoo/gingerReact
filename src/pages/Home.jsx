export default function Home() {
    return (
        <div className="animate-fade-in flex flex-col gap-2">
            <div className="text-4xl md:text-5xl font-extrabold">Welcome to the Homepage!</div>
            <div className="">
                review block with scrollable pages of app features
            </div>
            <div className="flex gap-2 w-full">
                <div className="flex w-60 h-120">
                    this is ink and ginger.
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    <div className="h-40">
                        explore the library
                    </div>
                    <div className="flex flex-col gap-2 flex-grow">
                        <div>
                            suggestions
                        </div>
                        <div>
                            <div className="flex gap-2 overflow-x-auto">
                                {/* horizontal scrollable list */}
                                <book>
                                    book A
                                </book>
                                <book>
                                    book B
                                </book>   
                                <book>
                                    book C
                                </book>                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
