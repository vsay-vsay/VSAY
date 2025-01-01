import { WobbleCardRobotics } from "@/app/components/atom/roboticsservicecard";

export function RoboticsServiceApplication() {
    return (
        <>
        <section className= "py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Service Applications
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how our robotics solutions transform various industries
          </p>
        </div>

        <div className="">
        <WobbleCardRobotics />
        </div>
      </div>
    </section>
        
        </>
    )
}