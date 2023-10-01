const student = {
    name:'Amil',
    address:{
        street:'sarayev str',
        apartment:'apt 19',
        flat: '4'
    },
    profiles: ['whatsApp','facebook','instagram'],
    printProfiles:()=>{
        student.profiles.map(
            (profile)=>
            console.log(profile)
        )
    }
}
export function LearningJavascript() {
    // const profile = student.printProfiles(); // Call the function and store the result

    return (
        <>
      <div>
        {student.name}
      </div>

      <div>
        {student.address.street}
      </div>
      <div>
        {student.profiles[0]}
      </div>
      <div>
        { student.printProfiles()}
      </div>
      </>
    );
  }
  