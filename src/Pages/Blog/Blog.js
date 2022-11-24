import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-[#F44369] to-[#D64270] lg:text-3xl sm:font-bold font-bold mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><strong>The Four Kinds of React State to Manage</strong> <br />
                        Let's cover each of these in detail: <br />
                        <strong>Local (UI) state</strong> – Local state is data we manage in one or another component. <br />
                        <strong>Global (UI) state</strong> – Global state is data we manage across multiple components. <br />
                        <strong>Server state</strong> – Data that comes from an external server that must be integrated with our UI state. <br />
                        <strong>URL state</strong> – Data that exists on our URLs, including the pathname and query parameters.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is <strong>a method by which an object can inherit the properties and methods of another object</strong>. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The main objective of unit testing is <strong>to isolate written code to test and determine if it works as intended</strong>. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><strong>Vue provides higher customize ability and hence is easier to learn than Angular or React</strong>. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. <br />
                        According to a survey by Stack Overflow 40.13% of the developers believe that <strong>React is the most commonly used JavaScript Framework</strong>. Angular and Vue follow it with 22.96% and 18.97%, respectively. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;