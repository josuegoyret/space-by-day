// responsible of displaying the days of the week
const HeaderPresentation = () => {
  const weekDays: WeekDay[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className='grid grid-cols-7 bg-nasa-black text-nasa-white  border-l border-r'>
      {weekDays.map((weekDay, i) => {
        return (
          <div key={i} className='grid place-items-center font-label font-medium md:font-semibold'>
            {weekDay}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderPresentation;
