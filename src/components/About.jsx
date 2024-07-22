const About = () => {
    return ( 
        <div name='about' className="w-full h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">About</h1>
            </div>
            <div>
                <p className="text-xl mt-20">
                    I am a Data Scientist.
                </p>
                <p className="text-xl">
                    I am passionate.
                </p>
            </div>
            </div>
        </div>
     );
}
 
export default About;