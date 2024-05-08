// responsible of displaying the days of the week
const HeaderPresentation = () => {
  const weekDays: WeekDay[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  return (
    <div className='grid grid-cols-7'>
      {weekDays.map((weekDay, i) => {
        return (
          <div key={i} className='grid place-items-center'>
            {weekDay}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderPresentation;
