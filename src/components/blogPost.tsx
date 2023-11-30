import React from 'react';

const BlogPost = () => {
    return (
        <section className={'py-10'}>
            <div className={'container mx-auto px-4 py-6'}>
                <h2 className={'text-4xl font-bold'}>Статьи</h2>
            </div>
            <div className={'container mx-auto px-4 grid grid-cols-3 gap-6 py-6'}>
                <article
                    className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                >
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div
                        className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                    >
                        <div className="p-4 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90">
                                10th Oct 2022
                            </time>

                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">
                                    How to position your furniture for positivity
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </div>
                </article>
                <article
                    className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                >
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div
                        className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                    >
                        <div className="p-4 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90">
                                10th Oct 2022
                            </time>

                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">
                                    How to position your furniture for positivity
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </div>
                </article>
                <article
                    className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                >
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div
                        className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                    >
                        <div className="p-4 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90">
                                10th Oct 2022
                            </time>

                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">
                                    How to position your furniture for positivity
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    );
};

export default BlogPost;