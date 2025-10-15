export default function Reviews() {
    return (
        <div className="animate-fade-in flex flex-col">
            <div className="text-4xl md:text-5xl font-extrabold">Write A Review</div>
            <div className="flex gap-4 mt-8">
                <button className="button-secondary ms-8 w-16 h-8">Return</button>
                <div className="flex flex-col gap-4 mx-auto">
                    <div className="flex gap-8 mx-auto">
                        <div className="w-30 h-40">book cover</div>
                        <div className="flex flex-col gap-4">
                            <div>The Book Title</div>
                            <div>Author name</div>
                        </div>
                    </div>
                    <div className="mx-auto">Rate your Experience</div>
                    <div className="mx-auto">⭐⭐⭐⭐⭐</div>
                    <div>Your Thoughts?</div>
                    <input 
                        type="text" 
                        placeholder="Tell us about your experience reading this book" 
                        className="button-tertiary w-120 h-40 align-top">
                    </input>
                </div>                
            </div>            
        </div>
    );
}
