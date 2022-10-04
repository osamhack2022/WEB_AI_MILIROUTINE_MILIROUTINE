import { Jumbotron, RoutineItem, Carousel } from "@/components/Element";

export const Landing = () => {
  return (
    <>
      <Jumbotron />
      <section className="w-screen flex items-center justify-center">
        <div className="container max-w-screen-lg">
          <Carousel>
            <RoutineItem />
            <RoutineItem />
            <RoutineItem />
            <RoutineItem />
            <RoutineItem />
            <RoutineItem />
          </Carousel>
        </div>
      </section>
    </>
  );
};
