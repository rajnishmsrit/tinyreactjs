

const React = {
  useState : callUseState,
  useEffect : callUseEffect
}

function callUseState (no: number, newValue: number) {
    //let currentValue = no;
    console.log("Called useState");
    
    const updateState = function () {
        return newValue;
    }
    return {no, updateState};
}

function callUseEffect () {
    console.log("Called useEffect")
}

export default React;