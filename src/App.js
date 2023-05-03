import React from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
// import Dropdown.Menu from "rsuite/esm/Dropdown/Dropdown.Menu";
// import Video2 from "./video2";

function App() {
  const jsonData = [
    {
      name: "SailpointEssentialsExercise",
      children: [
        {
          name: "onboarding",
          children: [
            {
              CreateIdentityCubesale:
                "./SailpointEssentialsExercise/onboarding/CreateIdentityCube/video1.mp4",
            },
            {
              DefineEmployeesale:
                "./SailpointEssentialsExercise/onboarding/DefineEmployee/video1.mp4",
            },
            {
              Exercisesale:
                "./SailpointEssentialsExercise/onboarding/Exercise/video1.mp4",
            },
            {
              lb002sale:
                "./SailpointEssentialsExercise/onboarding/lb002/video1.mp4",
            },
          ],
        },
        {
          name: "PopulateCubes",
          children: [
            {
              AccountCorrelationsale:
                "./SailpointEssentialsExercise/PopulateCubes/AccountCorrelation/ReactJSNotesForProfessionals.pdf",
            },
            {
              Attributessale:
                "./SailpointEssentialsExercise/PopulateCubes/Attributes/java.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "SailpointUniversityExercise",
      children: [
        {
          name: "Content",
          children: [
            {
              Contentssale:
                "./SailpointUniversityExercise/Content/Contents/java.pdf",
            },
            {
              LB001sale:
                "./SailpointUniversityExercise/Content/LB001/vedio2.mp4",
            },
          ],
        },
      ],
    },
    // {
    //   name: "javascript",
    //   children: [
    //     {
    //       name: "javascript1",
    //       children: [
    //         {
    //           name: "javascript2",
    //           children: [
    //             {
    //               javascript3:
    //                 "../public/javascript/javascript1/javascript2/javascript3/java.pdf",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "react",
      children: [
        {
          datsaaa: "../public/react/java.pdf",
        },
      ],
    },
  ];

  function openurl(data) {
    // console.log("data",data)
    if (data.slice(data.length - 3, data.length) !== "mp4") {
      window.open("/pdf.html");
      localStorage.setItem("src", data);
      // console.log("inner");
    } else {
      window.open("/video.html");
      localStorage.setItem("src", data);
      // console.log("elseeee");
    }
  }

  console.log("json", jsonData);

  return (
    <>
      <Dropdown title="salepoint">
        {jsonData.map((level1, i) => {
          // console.log(Object.values(level1), "value in level1")
          // console.log(Object.keys(level1),"keys in level1")
          if (!level1?.children) {
            <Dropdown.Item
              onClick={() => openurl(Object.values(level1))}
              key={i}
            >
              {Object.keys(level1)}
            </Dropdown.Item>;
            // console.log(level1.name);
          }
          // console.log(level1.name,"levell1dataaaaaaaaaaaaaaaaa")
          return (
            <>
              <Dropdown.Menu title={level1.name} key={i}>
                {level1.children.map((level2, i) => {
                  // console.log(Object.values(level2), "values in level2")
                  // console.log(Object.keys(level2),"keys in level2")
                  if (!level2?.children) {
                    <Dropdown.Item
                      onClick={() => openurl(Object.values(level2))}
                      key={i}
                    >
                      {Object.keys(level2)[0]}
                    </Dropdown.Item>;
                  }
                  return (
                    <Dropdown.Menu title={level2.name} key={i}>
                      {level2?.children?.map((level3, i) => {
                        // console.log(level3, "values in items");
                        // console.log(Object.keys(level3), "keys in items");
                      return 
                        { !level3?.children?(  <Dropdown.Item
                          onClick={() => openurl(Object.values(level3)[0])}
                          key={i}
                        >
                          {/* {Object.keys(level3)[0]} */}
                          hello
                        </Dropdown.Item>): (<Dropdown.Menu
                            title={level3.name}
                            key={i}
                          ></Dropdown.Menu>) }
                      })}
                    </Dropdown.Menu>
                  );
                })}
              </Dropdown.Menu>
            </>
          );
        })}
      </Dropdown>
    </>
  );
}
export default App;
