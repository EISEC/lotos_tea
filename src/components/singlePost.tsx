import React from 'react';
import Image from "next/image";

const SinglePost = ({data}: any) => {
    const title = data[0].title.rendered
    const content = data[0].content.rendered
    const imge = data[0]['_embedded']["wp:featuredmedia"][0].source_url
    return (
        <main>
            <header className={'container mx-auto relative h-64'}>
                <div className={'bg-black/50 w-full h-full px-6'}>
                    <Image className={'-z-10 absolute'} src={imge} alt={title} fill={true} loading="lazy"
                           sizes="(max-width: 768px) 100vw, 33vw" style={{objectFit: "cover"}}/>
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="text-center">
                            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl mb-2"
                                dangerouslySetInnerHTML={{__html: title}}/>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className="p-6 sm:container xs:container md:w-2/3 md:max-w-4xl mx-auto text-gray-800 text-lg flex flex-col gap-4 blog_post"
                dangerouslySetInnerHTML={{__html: content}}/>
        </main>
    );
};

export default SinglePost;