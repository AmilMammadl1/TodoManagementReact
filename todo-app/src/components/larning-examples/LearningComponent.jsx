import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import { LearningJavascript } from './LearningJavascript';


export default function LearningComponent() {
    return (
      <div className="LearningComponent">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <LearningJavascript/>
      </div>
    );
  }
  