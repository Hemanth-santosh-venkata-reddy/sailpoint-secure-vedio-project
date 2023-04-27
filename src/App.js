import React from "react";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

function App() {
  const jsonData = [
    {
      SailpointEssentialsExercise: [
        {
          onboarding: [
            {
              CreateIdentityCube:
                "./SailpointEssentialsExercise/onboarding/CreateIdentityCube/video1.mp4",
            },
            {
              DefineEmployee:
                "./SailpointEssentialsExercise/onboarding/DefineEmployee/video1.mp4",
            },
            {
              Exercise:
                "./SailpointEssentialsExercise/onboarding/Exercise/video1.mp4",
            },
            {
              lb002:
                "./SailpointEssentialsExercise/onboarding/lb002/video1.mp4",
            },
          ],
        },

        {
          PopulateCubes: [
            {
              AccountCorrelation:
                "./SailpointEssentialsExercise/PopulateCubes/AccountCorrelation/ReactJSNotesForProfessionals.pdf",
            },
            {
              Attributes:
                "./SailpointEssentialsExercise/PopulateCubes/Attributes/java.pdf",
            },
          ],
        },
      ],
    },
    {
      SailpointUniversityExercise: [
        {
          Content: [
            {
              Contents:
                "./SailpointUniversityExercise/Content/Contents/java.pdf",
            },
            {
              LB001:
                "./SailpointUniversityExercise/Content/LB001/vedio2.mp4",
            },
          ],
        },
      ],
    },
  ];
  function openurl(data) {
    if (data[0].slice(-3) && data[0].indexOf("mp4") == -1) {
      window.open("/pdf.html");
      localStorage.setItem("src", data);
    } else {
      window.open("/video.html");
      localStorage.setItem("src", data);
    }
  }
  return (
    <div>
      <Dropdown title="GeeksforGeeks">
        {jsonData.map((level1) => {
          return (    
            <Dropdown.Menu title={Object.keys(level1)}>      
              {Object.values(level1)[0].map((level2, i) => {

                return (
                  <Dropdown.Menu title={Object.keys(level2)}>
                    {Object.values(level2)[0].map((level3, index) => {
                    return (
                        <Dropdown.Item
                          onClick={() => openurl(Object.values(level3))}
                        >
                          {Object.keys(level3)}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                );
              })}
            </Dropdown.Menu>
          );
        })}
      </Dropdown>  
    </div>
  );
}
export default App;