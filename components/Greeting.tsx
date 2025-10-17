'use client';

import { ReactTyped } from 'react-typed';

function Greeting() {
  return (
    <ReactTyped
      backSpeed={50}
      onBegin={function noRefCheck() {}}
      onComplete={function noRefCheck() {}}
      onDestroy={function noRefCheck() {}}
      onLastStringBackspaced={function noRefCheck() {}}
      onReset={function noRefCheck() {}}
      onStart={function noRefCheck() {}}
      onStop={function noRefCheck() {}}
      onStringTyped={function noRefCheck() {}}
      onTypingPaused={function noRefCheck() {}}
      onTypingResumed={function noRefCheck() {}}
      startWhenVisible
      strings={["Hello There, <br /> I'm Raphael Eze"]}
      typeSpeed={50}
      typedRef={function noRefCheck() {}}
    />
  );
}

export default Greeting;
