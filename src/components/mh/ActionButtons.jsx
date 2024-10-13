// components/ActionButtons.jsx
import ActionButton from './ActionButton';

const ActionButtons = () => (
  <div className="flex flex-row justify-center gap-4 w-full max-w-sm mx-auto">
    <ActionButton>CONFIGURE NOW</ActionButton>
    <ActionButton>BOOK A TEST RIDE</ActionButton>
  </div>
);

export default ActionButtons;
