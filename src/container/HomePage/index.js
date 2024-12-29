import React from 'react';
import { Filter, Meals } from '@/constants';
import FilterIcon from '@/container/HomePage/FilterIcon';
import PrimaryButton from '@/components/Button/PrimaryButton';
import mealBackground from '@/assets/images/meal-plan/meal-home.jpg';
import MyLineChart from './LineChart';
import DonusChart from './DonusChart';

function HomeContainer() {
  return (
    <div className="w-screen flex flex-col gap-6">
      <div className="w-screen md:h-80 flex flex-col gap-6 md:gap-0 md:flex-row items-stretch">
        <div
          className="w-auto h-[30vh] md:w-[40%] md:h-full flex items-center justify-center
          bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${mealBackground})` }}
        >
          <DonusChart />
        </div>
        <div className="w-auto h-[40vh] md:w-[60%] md:h-full bg-black py-3 lg:px-5">
          <MyLineChart />
        </div>
      </div>
      <div className="w-full px-2 flex justify-center gap-2 mg:gap-5 md:gap-10 xl:gap-16 cursor-pointer">
        {Filter.map((item) => (
          <FilterIcon icon={item.icon} label={item.label} />
        ))}
      </div>
      <div className="w-full px-[5vw] md:px-[8vw] xl:px-[12vw] grid grid-cols-12 gap-2">
        {Meals.map((meal) => (
          <div
            key={meal.id}
            className="col-span-12 mg:col-span-6 md:col-span-4 lg:col-span-3"
          >
            <div className="relative w-full h-60 overflow-hidden rounded-md">
              <img
                src={meal.image}
                alt={`${meal.meal}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 min-w-32 pl-2 py-2 bg-primary-300">
                <div className="font-roboto text-base text-white-light">
                  {meal.time}.{meal.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full pb-16 flex justify-center">
        <PrimaryButton name="記録をもっと見る" />
      </div>
    </div>
  );
}

export default HomeContainer;
