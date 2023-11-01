import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { formattedDate } from "../../../utils/dateFormatter";
import IconBtn from "../../common/IconBtn";
import { getAllHouse } from "../../../services/operations/houseApi";
import { categories } from "../../../services/apis";
import { savechoice } from "../../../services/operations/houseApi";
import { getsevedhouse } from "../../../services/operations/houseApi";

export default function ChoiceFilling() {
  const { token } = useSelector((state) => state.auth);
  const { user} = useSelector((state) => state.auth);
  const a=JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  const [allhouse, setallhouse] = useState([]);
  const [selecthouse, setselecthouse] = useState([]);
  console.log("jai hind", selecthouse);
  const [sevedhouse, setsevedhouse] = useState([]);
  const [sevedhouse2, setsevedhouse2] = useState([]);
  const [status, setstatus] = useState(false);
  const[sevedhousecount,setsevedhousecount]=useState(0);
  const [total, settotal] = useState([]);
  var [count, setcount] = useState(0);

  // const getAllHouses = async () => {
  //   try {
  //     const response = await getAllHouse(null);

  //     setallhouse(response);
  //   } catch (error) {
  //     console.log("Could not fetch enrolled courses.")
  //   }
  // };
  const getSevedHouse = async () => {
    try {
      let response = [];
      // yha se nhiche forword kiya hai
      try {
        // console.log(user);
        response = await getAllHouse(null);
        console.log(response);


console.log("ye hai a",a.category[0]);
const originalString =String(a.category[0]) ;
console.log("ye",originalString)
     
// Converted array
const separatedArray = originalString.split(',');
 
// Display output 
console.log(separatedArray);
setallhouse(response.filter(a=>{
  let bool;
  const r=separatedArray.find(f=>f==a.category)
if(r){return true}
}))


        // setallhouse(response);

        const fdata = [];

        response.map((house) => {
          const temp = fdata.find((fd) => fd.category == house.category);
          if (temp) {
            const i = fdata.indexOf(temp);
            fdata[i].housename = [
              ...fdata[i].housename,
              { id: house._id, housename: house.housename },
            ];
            return;
          }
          const t = {
            category: house.category,
            housename: [{ id: house._id, housename: house.housename }],
          };
          fdata.push(t);
        });
        console.log("fdata", fdata);
      } catch (error) {
        console.log("Could not fetch enrolled courses.");
      }

      const res = await getsevedhouse(token);
      console.log("hiiihiii resi", res);

      console.log("yes");
      console.log("res.length",res.choice.length)
      if (res.choice.length != 0) {
        console.log("kya ho rha hai");
        setselecthouse(res.choice);
        console.log(selecthouse);
        setstatus(res.locked);
        setsevedhouse(res.choice);
        let c=0;
   
    for(let i=0;i<res.choice.length;i++){
       c+=res.choice[i].housename.length;

    }
    console.log("it is c",c);
    setcount(c);
    setsevedhousecount(c);
    console.log(res.choice)
    // const final = []

    // res.choice.map(c=>{
    //        final.push(...c.housename)
    // })
    setallhouse(response.filter(a=>{
      let bool;
      const r=res.choice.find(f=>f.category==a.category)
 if(!r){return true}
 const data=r.housename.find(f=>f.hno==a.housename)
 if(data){return false}
 return true;
 }))
    // console.log(final);
  //   for(let i=0;i<res.choice.length;i++){ 
  //     for(let j=0;j<res.choice[i].housename.length;j++){



  // //       total = [



  // //         ...total,
  // //         { id:res.choice[i].housename[j].id, housename: res.choice[i].housename[j].hno},
  // //       ];
  // settotal((prevData) => ({
  //               ...prevData,
  //                id:res.choice[i].housename[j].id, housename: res.choice[i].housename[j].hno
  //       }))
  //     }
 
  //  }
      // console.log(total);
  
      
      }
      console.log("yes");
      console.log("jai hind", selecthouse);
      // const jaiho=allhouse.map(
      //   (house) => res.choice.map((shouse)=>

      //   (house.category!=shouse.category&&
      //   house.housename!=shouse.housename)

      //   )
      // )
      //     for(var i = 0; i < allhouse.lenght; i++){
      //       var l=false;
      //       for(var j = 0; j < res.choice.lenght; j++){
      //         console.log(allhouse(i).category)
      //          if(allhouse[i].category==res.choise[j].category&&
      //           allhouse[i].housename==res.choise[j].housename){
      //             l=true;
      //          }
      //       }
      //       if(!l){
      //       setsevedhouse2([...sevedhouse2,{category:allhouse[i].category,housename:allhouse[i].housename}])
      //       }
      //  }
      //  console.log(res.choice)
      //  console.log(allhouse)
      //  console.log(response)
      //    try {
      //     response = await getAllHouse(null);
      // console.log(response)
      //    setallhouse(response);
      //  } catch (error) {
      //    console.log("Could not fetch enrolled courses.")
      //  }
      console.log("yes");
      console.log(res);
      if (res.length != 0) {
        console.log("andar hAI");
        
          // response.filter((house,i) => {
          //   return !res.choice.find((choice) => {
          //     return (
          //       house.category == choice.category &&
          //       house.housename == choice.housename
          //     );
          //   });
          // })
      
      }

      console.log("yes");
      console.log("jai hind", selecthouse);

      //  console.log("bhhjbjhbbbbbbbbbbbbbbb",sevedhouse2);
      //  setallhouse(setsevedhouse2);

      // console.log("yehai",sevedhouse)

      // console.log("jaise ho",allhouse);
      // console.log("kgjgh",sevedhouse)

      // console.log(sevedhouse.choice)
    } catch (error) {
      console.log("Could not fetch enrolled courses.");
    }
  };

  //   const Addhouse= async (course) => {
  //     // try {
  //     //   const res = await getAllHouse(null);

  //     //   setallhouse(res);
  //     // } catch (error) {
  //     //   console.log("Could not fetch enrolled courses.")
  //     // }
  //     setselecthouse((prevData) => ({
  //             ...prevData,
  //             course
  //     }))

  //   };

  // const jaiho=()=>{
  //   try {
  //     setallhouse(allhouse.filter(
  //       (house) => sevedhouse.map((shouse)=>
  //       (house.category!=shouse.category&&
  //       house.housename!=shouse.housename)

  //       )
  //     )
  //     )
  //   } catch (error) {
  //     console.log("Could not fetch enrolled courses.")
  //   }
  // };

  useEffect(() => {
    // getAllHouses();
console.log("user ji",a);
    getSevedHouse();
  }, []);

  // const Addhouse = (course, name, index, id) => {
  //   console.log("kya hai ye", selecthouse);
  //   const temp = selecthouse.find((fd) => fd.category == course);
  //   if (temp) {
  //     const i = selecthouse.indexOf(temp);
  //     setselecthouse((prev) => {
  //       if(prev[i].housename.find(p=>p==name)){
  //         return prev;
  //       }
  //       prev[i].housename = [...prev[i].housename, { id, hno: name }];
  //       return prev;
  //     });
  //     setcount(prev=>prev+1);
  //     console.log(count);
  //   } else {
  //     const t = {
  //       category: course,
  //       housename: [{ id, hno: name }],
  //     };
  //     setselecthouse((prev) => [...prev, t]);
  //     setcount(prev=>prev+1);
  //     console.log(count);
  //   }


  //   const updatedRequirementList = [...allhouse];
  //   updatedRequirementList.splice(index, 1);

  //   setallhouse(updatedRequirementList);
  //   console.log("ye hai", selecthouse);
  // };
  const Addhouse = (course, name, index, id) => {
    console.log("kya hai ye", selecthouse);
    const temp = selecthouse.find((fd) => fd.category == course);
    if (temp) {
      const i = selecthouse.indexOf(temp);
      setselecthouse((prev) => {
        if(prev[i].housename.find(p=>p.hno==name)){
          return prev;
        }
        prev[i].housename = [...prev[i].housename, { id, hno: name }];
        return prev;
      });
      setcount(prev=>prev+1);
      console.log(count);
    } else {
      const t = {
        category: course,
        housename: [{ id, hno: name }],
      };
      setselecthouse((prev) => [...prev, t]);
      setcount(prev=>prev+1);
      console.log(count);
    }


    const updatedRequirementList = [...allhouse];
    updatedRequirementList.splice(index, 1);

    setallhouse(updatedRequirementList);
    console.log("ye hai", selecthouse);
  };

  const Removehouse = (course, name, id,i,j) => {
    if (allhouse) {
      setallhouse((prev) => {
        const final = [...prev, { _id:id,category: course, housename: name }];
        final.sort((a, b) => {
          console.log(a);
          console.log(b);

          let ca = a.category.toLowerCase(),
            cb = b.category.toLowerCase();

          if (ca < cb) {
            return -1;
          }
          if (ca > cb) {
            return 1;
          }
          return 0;
        });
        return final;
      });

      //setallhouse([...allhouse,{category:course,housename:name}])
      let a = count - 1;
      setcount(a);
      console.log(count);
    } else {
      setallhouse({ _id:id,category: course, housename: name });

      let a = count - 1;
      setcount(a);
      console.log(count);
    }
    const updatedRequirementList = [...selecthouse];
    updatedRequirementList[i].housename.splice(j, 1);

    setselecthouse(updatedRequirementList);
    console.log(selecthouse);
  };
  // const Uphouse = (old_index, new_index) => {
  //   console.log("this is");
  //   if (old_index != 0) {
  //     const arr = [...selecthouse];
  //     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  //     setselecthouse(arr);
  //   }
  // };
  const Uphouse = (id , no) => {
    console.log(id)
    console.log(no)
    const updatedRequirementList = [...selecthouse];
    const r = updatedRequirementList[id].housename.find(p=>p.hno==no)
    console.log(r)

        const i = updatedRequirementList[id].housename.indexOf(r);
    console.log(i)
        
        if(i==0){return}
        
        let temp = updatedRequirementList[id].housename[i];
        console.log(temp)
        updatedRequirementList[id].housename[i] = updatedRequirementList[id].housename[i-1];
        console.log( updatedRequirementList[id].housename[i])
        updatedRequirementList[id].housename[i-1]=temp;
        console.log(updatedRequirementList[id].housename[i-1])
      setselecthouse(updatedRequirementList)
//       let temp = selecthouse[id].housename[i];
//     selecthouse[id].housename[i] = selecthouse[id].housename[i-1];
//     selecthouse[id].housename[i-1] = temp;
// setselecthouse(selecthouse)
      // const updatedRequirementList = [...selecthouse];
     
  
      // selecthouse[id].housename.splice(i-1, 0, selecthouse.splice(i, 1)[0]);
      // setselecthouse(updatedRequirementList);

        console.log("hello")
    }

  const Downhouse = (id , no) => {
    // if (old_index != selecthouse.length - 1) {
    //   const arr = [...selecthouse];
    //   arr.splice(old_index, 0, arr.splice(new_index, 1)[0]);
    //   setselecthouse(arr);
    // }
    const updatedRequirementList = [...selecthouse];
    const r = updatedRequirementList[id].housename.find(p=>p.hno==no)
    console.log(r)

        const i = updatedRequirementList[id].housename.indexOf(r);
    console.log(i)
        
    if(i==updatedRequirementList[id].housename.length - 1){return}

        
        let temp = updatedRequirementList[id].housename[i];
        console.log(temp)
        updatedRequirementList[id].housename[i] = updatedRequirementList[id].housename[i+1];
        console.log( updatedRequirementList[id].housename[i])
        updatedRequirementList[id].housename[i+1]=temp;
        console.log(updatedRequirementList[id].housename[i+1])
      setselecthouse(updatedRequirementList)


  };

  const SaveChoices = async () => {
    try {
      console.log(token);
      console.log(selecthouse);

      const res = await savechoice(token, selecthouse, navigate);
      console.log(res);
    } catch (error) {
      console.log("Could not fetch enrolled courses.");
    }
  };

  {
    /* <div>
{
allhouse?.map((house, i, arr) => (
<div key={i}>
<div>{house.category}</div>
<div>{house.housename}</div>
</div>

))}
</div> */
  }
  return (
    <>
      {status ? (
        <div className="grid  max-h-screen h-[200px] overflow-hidden min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="text-richblack-900 fixed">
            Sorry,You can't do choice filling...
          </div>
        </div>
      ) : (
        <div className="flex overflow-scroll flex-col">
          <div className="flex w-full justify-between">
            <div className="flex bg-richblack-5 w-[35%] h-[400px] overflow-scroll shadow-md shadow-black p-3 flex-col">
              <div className="w-full border-b-[1px] ">
                <span className="text-blue-900 font-bold">
                  Available Choices
                </span>
              </div>
              <div className=" my-2 ">
                <span className="text-red-900 font-bold">
                  {" "}
                  Total Available Choices :{allhouse?.length}
                </span>
              </div>
              <div className="my-1   h-[400px] overflow-y-scroll text-richblack-5">
                {/* Headings */}
                <div className="flex rounded-t-lg w-full h-[13] bg-richblack-500 ">
                  <div className="w-[35%] h-[13] m-auto ">House Category</div>

                  <div className="w-[25%] m-auto h-[13] ">House No.</div>
                  <div className=" w-[20%] m-auto h-[13] ">Action</div>
                </div>
                {/* Course Names */}
                {allhouse.map((course, i, arr) => (
                  <div
                    className={`flex w-full items-center border-[1px] p-2 border-collapse border-richblack-700 ${
                      i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
                    }`}
                    key={i}
                  >
                    <div className="w-[35%] m-auto  text-richblack-700">
                      {course?.category}
                    </div>
                    <div className="w-[25%] m-auto   text-richblack-700">
                      {course?.housename}
                    </div>
                    <div className=" border-[1px] w-[20%] m-auto ">
                      <button
                        onClick={() =>
                          Addhouse(
                            course.category,
                            course.housename,
                            i,
                            course._id
                          )
                          }
                        className="w-[45px]  rounded-sm text-[15px] bg-blue-5"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex bg-richblack-5 w-[64%] h-[400px] overflow-scroll shadow-md shadow-black p-3 flex-col">
              <div className="w-full border-b-[1px] ">
                <span className="text-blue-900 font-bold">Filled Choices</span>
              </div>
              <div className=" my-2 flex justify-between ">
                <span className="text-red-900 font-bold">
                  {" "}
                  Total Filled Choices : {count}
                </span>
                <span className="text-caribbeangreen-600 font-bold">
                  {" "}
                  Total Saved Choices : {sevedhousecount}
                </span>
              </div>
              <div className="my-1   h-[400px] overflow-y-scroll text-richblack-5">
                {/* Headings */}
                <div className="flex rounded-t-lg w-full h-[13] p-2 bg-richblack-500 ">
                  <div className="w-[25%] h-[13] m-auto ">House Category</div>

                  <div className="w-[20%] m-auto h-[13] ">House No.</div>
                  <div className=" w-[20%] m-auto h-[13] ">Choice No.</div>
                  <div className=" w-[15%] m-auto h-[13] ">Remove</div>

                  <div className=" w-[10%] m-auto h-[13] ">Up</div>

                  <div className=" w-[10%] m-auto h-[13] ">Down</div>
                </div>
                {/* Course Names */}
                {selecthouse?.map((category, i, arr) => (
                  category?.housename?.map((houses, j, arr) => (
                  <div
                    className={`flex w-full items-center border-[1px] p-2 border-collapse border-richblack-700 ${
                      j === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
                    }`}
                    key={j}
                  >
                    <div className="w-[25%] m-auto  text-richblack-700">
                      {category?.category}
                    </div>
                    <div className="w-[20%] m-auto   text-richblack-700">
                      {houses?.hno}
                    </div>
                    <div className="w-[20%] m-auto px-5 items-center   text-richblack-700">
                      {j + 1}
                    </div>

                    <div className=" border-[1px] w-[15%] m-auto ">
                      <button
                        onClick={() =>
                          Removehouse(category.category, houses.hno,houses.id ,i,j)
                        }
                        className="w-[65px]  rounded-sm text-[15px] bg-red-900"
                      >
                        Remove
                      </button>
                    </div>
                    <div className=" border-[1px] w-[10%] m-auto ">
                      <button
                        onClick={() => Uphouse(i, houses.hno)}
                        className="w-[40px]  rounded-sm text-[15px] bg-caribbeangreen-600"
                      >
                        Up
                      </button>
                    </div>
                    <div className=" border-[1px] w-[10%] m-auto ">
                      <button
                        onClick={() => Downhouse(i, houses.hno)}
                        className="w-[45px]  rounded-sm text-[15px]  bg-caribbeangreen-600"
                      >
                        Down
                      </button>
                    </div>
                  </div>
                ))))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        {!status && (
          <div className=" flex justify-end w-full mt-3  m-auto ">
            <button
              onClick={() => SaveChoices()}
              className="w-[120px]  text-white  rounded-sm text-[15px] bg-blue-900"
            >
              Save Choices
            </button>
          </div>
        )}
      </div>
    </>
  );
}
