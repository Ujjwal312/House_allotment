import { useEffect, useState } from 'react';

const TableOne = () => {

  const [cat, setCat] = useState('All');
  const [data, setData] = useState(null);
  const [searchedHouse, setSearchedHouse] = useState('');

  const categories = [
    'A-TYPE',
    'B-TYPE',
    'C-TYPE',
    'E-TYPE SEC-25',
    'F-TYPE SEC-25',
  ];
  const houseData = [
    {
      category: 'A-TYPE',
      houseNo: [
        '33-SF',
        '33-TF',
        '45-TF',
        '49-DF',
        '48',
        '55-SF',
        '89-TF',
        '55-TF',
        '54-TF',
      ],
    },
    {
      category: 'B-TYPE',
      houseNo: ['54-TF', '77-SF', '77', '76', '46-SF', '45-SF'],
    },
    {
      category: 'C-TYPE',
      houseNo: ['45-SF', '43-SF', '43', '46', '50'],
    },
    {
      category: 'E-TYPE SEC-25',
      houseNo: ['50-BF', '50-SF', '57-EF', '55-EF', '12', '92'],
    },
    {
      category: 'F-TYPE SEC-25',
      houseNo: ['96', '26', '26-SF', '76-TF', '72-TF'],
    },
  ];

  useEffect(() => {
    if (cat === 'All') {
      setData(houseData);
    } else {
      const filteredData = houseData?.filter((house) => house?.category == cat);
      const formatedData = [];
      filteredData[0]?.houseNo?.map((h) => {
        if (h.toLowerCase().includes(searchedHouse.toLowerCase())) {
          formatedData.push({ category: cat, houseNo: [h] });
        }
      });
      setData(formatedData);
    }
  }, [cat, searchedHouse]);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="overflow-x-auto flex w-full items-center">
        <div className="w-1/2">
          <div className="relative z-20 bg-white dark:bg-form-input">
            <select
              value={cat}
              onChange={({ target }) => setCat(target?.value)}
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
            >
              <option value="All">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span className="absolute top-1/2 right-[2%] z-10 -translate-y-1/2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#637381"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div className="w-1/2">
          <input
            value={searchedHouse}
            onChange={({ target }) => {
              setSearchedHouse(target.value);
            }}
            type="text"
            placeholder="Type to search Houses"
            className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
          />
        </div>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className=" py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              Category
            </th>
            <th className=" py-4 px-4 font-medium text-black dark:text-white">
              House No.
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((houses, i) => (
            <tr key={i}>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <span className="font-medium text-black dark:text-white">
                  {houses?.category}
                </span>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-4">
                {houses?.houseNo.map((house, i) => {
                  return (
                    <span
                      className={` font-medium text-black dark:text-white`}
                      key={i}
                    >
                      <span
                        className={`${
                          searchedHouse != '' &&
                          house
                            .toLowerCase()
                            ?.includes(searchedHouse.toLowerCase())
                            ? 'bg-blue-50'
                            : ''
                        } `}
                      >
                        {house}{' '}
                      </span>
                      {i == houses?.houseNo.length - 1 ? '' : ','}{' '}
                    </span>
                  );
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOne;