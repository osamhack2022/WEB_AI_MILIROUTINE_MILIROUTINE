import { Jumbotron, RoutineItem, Carousel } from "@/components/Element";

export const Landing = () => {
  return (
    <>
      <Jumbotron />
      <section className="w-screen flex items-center justify-center">
        <Carousel>
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
          <RoutineItem />
        </Carousel>
      </section>
    </>
  );
};
